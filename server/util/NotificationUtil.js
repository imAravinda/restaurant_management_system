
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'resto6430@gmail.com',
        pass:'cicjmbbdilnbxdaf'
    }
});
