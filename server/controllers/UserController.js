import mongoose from "mongoose";
import Customer from "../models/Customer.js";
import User from "../models/User.js";
import { GeneratePassword, GenerateSalt } from "../util/PasswordUtility.js";
import { createToken } from "../util/AuthUtil.js";
import { transporter } from "../util/NotificationUtil.js";
import dotenv from 'dotenv';
import ShoutoutClient from 'shoutout-sdk';
import Stripe from "stripe";
import ServiceProviders from "../models/ServiceProviders.js";

var apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMTU0YTA3MC0yYTBkLTExZWQtYTIyZC0yMzNlNTJkNzg3MDYiLCJzdWIiOiJTSE9VVE9VVF9BUElfVVNFUiIsImlhdCI6MTY2MjA0NzQ4OSwiZXhwIjoxOTc3NjY2Njg5LCJzY29wZXMiOnsiYWN0aXZpdGllcyI6WyJyZWFkIiwid3JpdGUiXSwibWVzc2FnZXMiOlsicmVhZCIsIndyaXRlIl0sImNvbnRhY3RzIjpbInJlYWQiLCJ3cml0ZSJdfSwic29fdXNlcl9pZCI6IjczMzgxIiwic29fdXNlcl9yb2xlIjoidXNlciIsInNvX3Byb2ZpbGUiOiJhbGwiLCJzb191c2VyX25hbWUiOiIiLCJzb19hcGlrZXkiOiJub25lIn0.7ODAC-X1QFiFFKMpoe23iD-mpEPRkO6twmBsvQvgnOM';

var debug = true, verifySSL = false;

var client = new ShoutoutClient(apiKey, debug, verifySSL);
dotenv.config();
const stripe = Stripe('sk_test_51MbCY3GuiFrtKvgKRlTswuS2ZIlFZdYvBKP9TKGA4OdrqC5pgCreZkQJpNrX0d09pccyDr2iuXrTDrVBEkXKV9S000q80NzIvV');
const maxAge = 3 * 24 * 60 * 60;
process.env.GEOCODER_PROVIDER = 'google';
process.env.GEOCODER_API_KEY = 'AIzaSyCzww-sVilydidTfz54KfF50tWWIwgahC4';

// Method : POST
// End Point : "api/v1/User/CustomerRegister";
// Description : Register Customer
export const RegisterCustomer = async (req,res)=>{
    const {Name,Password,ConfirmPassword,ContactNumber,Email} = req.body;
    const existingCustomer = await Customer.findOne({Email:Email});
    try {
        if(existingCustomer === null){
            const salt = await GenerateSalt();
            const encryptedPassword = await GeneratePassword(Password,salt);
            const confirmEncryptedPassword = await GeneratePassword(ConfirmPassword,salt);
            const Role="Customer";
            const createCustomer = await Customer.create({
                Name:Name,
                Password:encryptedPassword,
                ConfirmPassword:confirmEncryptedPassword,
                ContactNumber:ContactNumber,
                Email:Email,
                Role:Role
            });
            //send sms
            const contactNumber = "94"+ContactNumber.slice(1);
            console.log(contactNumber);
            var message = {
                source: 'ShoutDEMO',
                destinations: [contactNumber],
                 content: {
                     sms: `Welcome ${Name} to Resto. You successfully registerd to our system.`
                },
                 transports: ['sms']
              };
              client.sendMessage(message, (error, result) => {
                if (error) {
                    console.error('error ', error);
                } else {
                    console.log('result ', result);
                }
              });

            //send Email
            const mailOption = {
                from : 'resto6430@gmail.com',
                to : Email,
                subject : 'Registration Confrimation',
                text : `Hi ${Name} Welcome to Resto. You successfully registered to the system.`
            }

            transporter.sendMail(mailOption,(err,info)=>{
                if(err){
                    console.log(err.message);
                }
                else{
                    console.log(info.response);
                }
            })

            const token = createToken(createCustomer._id,createCustomer.Email);
            res.status(200).json({
                status: 'success',
                message:'Customer Registerd Successfully',
                token
            });
        }
        else{
            return res.json({
                status:'Error',
                message:"A Customer is already exist"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'Server error',
            message: error.message
        });
    }
}

// Method : POST
// End Point : "api/v1/User/ServiceProviderRegister";
// Description : Register Service Providers
export const RegisterServiceProviders = async (req,res)=>{
    try {
    const user = req.user;
        if(user.Role === "Admin" || user.Role === 'Manager'){
            const {Email,Role} = req.body;
            const Password = "12345678";
            const existingServiceProvider = await ServiceProviders.findOne({Email:Email});
            if(existingServiceProvider !== null){
                return res.json({"message":"A User is already exist"});
            }
            else{
                const salt = await GenerateSalt();
                const encryptedPassword = await GeneratePassword(Password,salt);

                if(Role === "Admin"){
                    const user = await ServiceProviders.findOne({Role:Role}).populate('Role');
                    console.log(user);
                    if(user !== null){
                        res.json('Admin is already exist');
                    }
                }
                else if(Role === 'Manager'){
                    const user = await ServiceProviders.findOne({Role:Role}).populate('Role');
                    console.log(user);
                    if(user !== null){
                        res.json('Manager is already exist in the system');
                    }
                }
                else{
                    const createServiceProvider = await ServiceProviders.create({
                        Password:encryptedPassword,
                        Email:Email,
                        Role:Role
                    });
                    //send Email
                    if(createServiceProvider.Role !== "Customer"){
                        const mailOption = {
                            from : 'resto6430@gmail.com',
                            to : Email,
                            subject : 'Registration Confrimation',
                            attachments:[{
                                filename : 'logo.png',
                                path:'E:/WEB/Restaurant_Management_System/server/Template/logo.png',
                                cid:'logo'
                            },
                            {
                                filename : 'welcome_vector.png',
                                path:'E:/WEB/Restaurant_Management_System/server/Template/welcome_vector.png',
                                cid:'welcome'
                            }],
                            html: { path:'E:/WEB/Restaurant_Management_System/server/Template/Email.html' }
                        }
                        transporter.sendMail(mailOption,(err,info)=>{
                            if(err){
                                console.log(err.message);
                            }
                            else{
                                console.log(info.response);
                            }
                        })
                    }
                    const token = createToken(createServiceProvider._id,createServiceProvider.Email);
                    res.status(201).json({
                        status:'Success',
                        message:'User added to the system successfully',
                        data:{
                            token
                        }
                    });
                }
                
            }
        }
        else{
            res.status(401).json({
                status: 'Error',
                message: 'User Have No Authorization to do this action',
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:'Server Error',
            message:error.message,
        });
    }
    
}

// Method : GET
// End Point : "api/v1/User/Users"
// Description : Get All Users
export const getUsers = async (req,res)=>{
    try {
        const user = req.user;
        if(user.Role === "Admin" || user.Role === "Manager"){
            const serviceProviders = await ServiceProviders.find();
            const Customers = await Customer.find();
            let Users = []
            if(serviceProviders === null && Customers === null){
                res.status(401).json({
                    status:'Error',
                    message:'There are no users',
                });
            }
            else{
                Users.push(serviceProviders,Customers);
                res.status(200).json({
                    status:'Success',
                    message:'Details of all users',
                    data:{
                        Users
                    }
                })   
            }
        }   
        else{
            res.status(401).json({
                status: 'Error',
                message: 'User Have No Authorization to do this action',
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:'Server Error',
            message:error.message,
        });
    }
}

// Method : GET
// End Point : "api/v1/User"
// Description : Get User By Email

export const getUserByEmail = async (req,res)=>{
    try {
        const user = req.user;
        if(user.Role === "Admin" || user.Role === "Manager"){
            const Email = req.body.Email;
            const findServiceProvider = await ServiceProviders.findOne({Email:Email});
            const findCustomer = await Customer.findOne({Email:Email});
            if(findServiceProvider !== null){
                res.status(200).json({
                    status:'Success',
                    message:`Details of ${findServiceProvider.Name}`,
                    data:{
                        findServiceProvider
                    }
                })
            }
            else if(findCustomer !== null){
                res.status(200).json({
                    status:'Success',
                    message:`Details of ${findCustomer.Name}`,
                    data:{
                        findCustomer
                    }
                })
            }
            else{
                res.status(404).json({
                    status:'Error',
                    message:`There are no any user related to ${Email}`,
                });
            }
        }
        else{
            res.status(401).json({
                status: 'Error',
                message: 'User Have No Authorization to do this action',
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:'Server Error',
            message:error.message,
        });
    }
    
}

// Method : GET
// End Point : "api/v1/Users/:Role"
// Description : Get Users By Role

export const getUsersByRole = async(req,res)=>{
    try {
        const user = req.user;
        if(user.Role === "Admin" || user.Role === "Manager"){
            const {Role} = req.params;
            const Users = await ServiceProviders.find({Role:Role}).populate('Role');
            if(Users !== null){
                let users = [];
                Users.map(user=>{
                    if(user.Role === Role){
                        users.push(user);
                    }
                })
                res.status(201).json({
                    status:'Success',
                    message:'Users details',
                    data:{
                        users
                    }
                });
            }
        }
        else{
            res.status(401).json({
                status: 'Error',
                message: 'User Have No Authorization to do this action',
            })
        }
        
    } catch (error) {
       return res.status(500).json({
            status:'Server Error',
            message:error.message,
        });
    }
}

// Method : PATCH
// End Point : "api/v1/User/:Email"
// Description : Update User By Email
export const updateUserProfile = async (req,res)=>{
    try {
        const user = req.user;
        if(user.Role === "Admin" || user.Role === "Manager"){
            const {Email} = req.params;
            const findUser = await User.findOne({Email:Email});
            const {Name,ContactNumber,Role} = req.body;
            console.log(findUser);
            if(!mongoose.Types.ObjectId.isValid){
                return res.status(404).send(`The id ${id} is not valied`);
            }
            if(findUser !== null){
                const user = {Name:Name,ContactNumber:ContactNumber,Email:Email,Role:Role};
                await User.findByIdAndUpdate(findUser._id,user,{new:true});
                res.json(user);
            }   
        }
        else{
            res.status(401).json({
                status: 'Error',
                message: 'User Have No Authorization to do this action',
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:'Server Error',
            message:error.message,
        });
    }
}

// Method : DELETE
// End Point : "api/v1/User/:Email"
// Description : Delete User By Email

export const deleteUser = async (req,res)=>{
    try {
        const user = req.user;
        if(user.Role === "Admin" || user.Role === "Manager"){
            const {Email} = req.params;
            const findServiceProvider = await ServiceProviders.findOne({Email:Email});
            if(findServiceProvider){
                const removeUser = await ServiceProviders.findByIdAndRemove(findServiceProvider.id);
                res.status(200).json({
                    status:'Success',
                    message:`${findServiceProvider.Email} is removed`,
                    data:{
                        removeUser
                    }
                })
            }
        }
        else{
            res.status(401).json({
                status: 'Error',
                message: 'User Have No Authorization to do this action',
            })
        }   
    } catch (error) {
        return res.status(500).json({
            status:'Server Error',
            message:error.message,
        });
    }
}

// Method : DELETE
// End Point : "api/v1/Users"
// Description : Delete Users

export const deleteUsers = async (req,res)=>{
    try {
        const user = req.user;
        if(user.Role === "Admin" || user.Role === "Manager"){
            const findCustomers = await Customer.find();
            const findServiceProviders = await ServiceProviders.find();
            if(findCustomers == null && findServiceProviders === null){
                res.status(404).json({
                    status:'Error',
                    message:'Users are not found'
                })
            }
            else{
                await Customer.deleteMany();
                await ServiceProviders.deleteMany();;
                res.status(200).json({
                    status:'Success',
                    message:'All users are removed'
                })
            }
        }
        else{
            res.status(401).json({
                status: 'Error',
                message: 'User Have No Authorization to do this action',
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:'Server Error',
            message:error.message,
        });
    }
}
// Method : GET
// End Point : "api/v1/Users/AvailableDeliverers";
// Description : Get Available Deliverers
export const getAvailableDeliverers = async (req,res)=>{
    try {
        const user = req.user;
        if(user.Role === "Staff-Member"){
            const Deliverers = await ServiceProviders.find({Role:"Deliverer"}).populate('Role');
            if(Deliverers !== null){
                let deliverers = [];
                    Deliverers.map(user=>{
                        if(user.Order === undefined){
                            deliverers.push(user);
                        }
                    })
                    res.status(201).json({
                        status: 'Success',
                        message: 'Available Deliverers',
                        data:{
                            deliverers
                        }
                    })
                return deliverers; 
            }
            else{
                res.status(401).json({
                    status: 'Warning',
                    message: 'There are no available deliverers',
                })
            }
        }
        else{
            res.status(401).json({
                status: 'Error',
                message: 'This user has not authorization to do this operation',
            }) 
        }
        
    } catch (error) {
        res.status(401).json({
            status: 'Error',
            message: error.message,
        });
    }
 }

// Method : PATCH
// End Point : "api/v1/User/Profile/:Email";
// Description : Update Profile
export const UpdateProfile = async(req,res)=>{
    try {
        const user = req.user;
        const {Email} = req.params;
        if(user.Email == Email){
            const logedCustomer = await Customer.findOne({Email:Email}).populate('Email');
            const logedServiceProvider = await ServiceProviders.findOne({Email:Email}).populate('Email');
            if(logedCustomer !== null){
                const {Name,ContactNumber,Address,Email} = req.body;
                const locationAddress = JSON.stringify({Address});
                const userDetails = {Name:Name,Email:Email,ContactNumber:ContactNumber,Address:Address}
                const updateCustomer = await Customer.findByIdAndUpdate(logedCustomer._id,userDetails,{new:true});
                console.log(updateCustomer);
                createToken(updateCustomer._id,updateCustomer.Email);
                res.status(201).json({
                    message:'Update Customer Successfully',
                    data:{
                        updateCustomer
                    }
                });
            }
            else if(logedServiceProvider){
                const {Name,ContactNumber,Email} = req.body;
                const userDetails = {Name:Name,Email:Email,ContactNumber:ContactNumber}
                const updateServiceProvider = await ServiceProviders.findByIdAndUpdate(logedServiceProvider._id,userDetails,{new:true});
                console.log(updateServiceProvider);
                createToken(updateServiceProvider._id,updateServiceProvider.Email);
                res.status(201).json({
                    message:'Update Service Provider Successfully',
                    data:{
                        updateServiceProvider
                    }
                });
            }
            else{
                res.json("error");
            }
        }
        else{
            res.status(400).json({
                status:'Error',
                message:'This user is not logged in to the system'
            });
        }
    } catch (error) {
        res.status(500).json({
            status:'Server Error',
            message:error.message
        });
    }
}