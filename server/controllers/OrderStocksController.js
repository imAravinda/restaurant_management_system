import SupplierItem from "../models/SupplierItem.js";

// Method : POST
// End Point : "api/v1/AddSupplierOrder";
// Description : Add Supplier Order Item

export const addSupplierOrder = async(req,res)=>{
    try {
        const user = req.user;
        if(user.Role === "Manager"){
            const {Item,Quantity,Date} = req.body;
            const neworder = await SupplierItem.create({
                Item:Item,
                Quantity:Quantity,
                Date:Date
            })
                res.status(201).json({
                    status:'Success',
                    message:'A New supplier order is Added',
                    data:{
                        neworder
                    }
                })
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

// Method : Get
// End Point : "api/v1/ViewSupplierOrder";
// Description : Get supplier order

export const ViewSupplierOrder = async (req,res)=>{
    try {
        const user = req.user;
        if(user.Role === "Manager"){
            const tables = await SupplierItem.find();
            if(tables !== null){
                res.json(tables);
            }
            else{
                res.status(404).json({message:"There are no any recordes please add tables"});
            }
        }
        else{
            res.status(401).json('Only Manager has access to do this operation');
        }
    } catch (error) {
        res.status(501).json(error.message);
    }
}