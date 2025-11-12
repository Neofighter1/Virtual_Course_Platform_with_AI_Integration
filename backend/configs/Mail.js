import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});


const sendMail=async (to,otp) => {
  try{
    await transporter.sendMail({
        from:process.env.EMAIL,
        to,
        subject:"Reset Your Password",
        html:`<p>Your OTP for Password Reset is <b>${otp}</b>.
        It expires in 5 minutes.</p>`
    })
  }
  catch(error){
    console.log("Mail Send Error:",error);
    throw error;
  }
}

export default sendMail