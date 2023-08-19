const nodemailer = require("nodemailer");
const express = require("express");
const dotenv=require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

app.post("/email", async (req, res) => {
    const { email } = req.body;
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: process.env.EMAIL_SENDER_ADDRESS,
            pass: process.env.PASS_CONNECT,
        }
    }); 
    await transporter.sendMail({
        from: process.env.EMAIL_SENDER_ADDRESS, // sender address
        to: `${email}`, // list of receivers
        subject: "Demo-1 ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<div>
            <p>Chao nhe</p>
            <button>Click</button>
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80">
        </div>`, // html body
    }, (err) => {
        if (err) {
            return res.json("Failed-connect: "+err)
        };
        return res.json("Successful to send !")
    });
});

app.listen(3000, () => {
    console.log("ok connect");
});