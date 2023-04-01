
import mongoose from "mongoose";
import ServiceProviders from "../models/ServiceProviders.js";

// Method : POST
// End Point : "api/v1/SupplierItems";
// Description : Supplier insert items they have
export const SupplierItems = async(req,res,next)=>{
    try {
        const user = req.user;
        if(user.Role === 'Supplier'){
            console.log(req.body);
            const logedSupplier = await ServiceProviders.findOne({Email:user.Email}).populate('Email');
            const session = await mongoose.startSession();
            try {
                if(logedSupplier.Address !== null){
                        session.startTransaction();
                        const newSupplierItem = await SupplierItem.create([
                                req.body
                            ],
                            {session}
                        )
                        const commit = await session.commitTransaction();
                        session.endSession();
                        res.status(201).json({
                            status:'Success',
                            message:'Your Supplier Item : successed',
                            data:{
                                newSupplierItem
                            }
                        })
                }
                else{
                    res.status(400).json({
                        status:'Error1',
                        message:'Set Your Address First'
                    })
                }
            } catch (error) {
                res.status(500).json({
                    status:'Error2',
                    message:error.message
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            status:'Server Error',
            message:error.message
        })
    }
}

// Method : GET
// End Point : "api/v1/SupplierItemsDetails";
// Description : Get All SupplierItems
export const ViewAllSupplierItems = async(req,res)=>{
    try {
        const user = req.user;
        if(user.Role === "Supplier"){
            const findSupplierItems = await SupplierItem.find();
            let SupplierItems = [];
            for (const supplierItem of findSupplierItems) {
                  let SupplierItemDetails;
                  console.log(supplierItem);
                  try {
                    const populatedSupplierItem = await SupplierItem.findById(supplierItem.id)
                      .populate({
                        path: 'Supplier',
                        model: 'ServiceProviders'
                      })
                      .exec();

                    const Name = populatedSupplierItem.Supplier.Name;
                    const ContactNumber = populatedSupplierItem.Supplier.ContactNumber;
                    const supplierItem = populatedSupplierItem.Items.map((item) => {
                      if(item !== undefined){
                        return{
                          ItemName: item.ItemName,
                          Price: item.Price,
                          Status: item.Status,
                          Category: item.Category
                        }
                      }
                      
                    });
                    SupplierItemDetails = {
                      SupplierItemId:supplierItem.id,
                      supplierName: Name,
                      supplierContactNumber:ContactNumber,
                      supplierItem                      
                    };
                    SupplierItem.push(SupplierItemDetails);
                  } catch (err) {
                    console.error(err);
                    return res.status(500).send('Server Error');
                  }
            }
              
              res.status(200).json({
                status: "Success",
                message: "All Supplier Item Details",
                data: {
                    SupplierItems
                }
              });
        }
        else{
            res.status(401).json({
                status: 'Error',
                message: 'User Have No Authorization to do this action',
            })
        }
    } catch (error) {
        res.status(500).json({
            status:'Server Error',
            message:error.message
        })
    }
}