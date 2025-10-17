const User = require("../models/User.js")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.Login = async (req, res) => {
    try {
        //step-1 data ko nikala
        const { email, password } = req.body;
        // step-2 data ko validate kar leaya hai
        if (email === "" && password === "") {
            return res.status(400).json({
                success: false,
                messgage: " email and password is required",
            })
        }

        // check email in db 
        const isUser = await User.findOne({email});
        if (!isUser) {
            return res.status(400).json({
                success: false,
                messgage: "Email id not exist in our db",
            })
        }

        // password ko  compare karo db ke andar jo password rakha hai
        if (await bcrypt.compare(password, isUser.password)) {

            const payload = {
                id: isUser._id,
                email: isUser.email
            }

            const token =  jwt.sign(payload, process.env.JWT_SECRET);
            res.cookie("token", token);
            return res.status(200).json({
                success: true,
                messgage: "Login successfully",
                data: isUser
            })

        }
        else {
            return res.status(401).json({
                success: false,
                messgage: "Password invalid hai done",
                data: newUser
            })
        }



    }
    catch (err) {
        console.log("Error in Login controller",err)
        return res.status(500).json({
            success: false,
            messgage: "Internal Server error",
            error: err.messgage
        })
    }
}
