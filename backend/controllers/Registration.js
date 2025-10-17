const User = require("../models/User.js")
const bcrypt = require("bcrypt");
exports.Registration = async (req, res) => {
    try {

        //step-1 data ko nikala
        console.log("het1")
        const { Name, email, password } = req.body;
        // step-2 data ko validate kar leaya hai
        if (Name === "" && email === "" && password === "") {
            return res.status(400).json({
                success: false,
                messgage: "Name and email and password is required",
            })
        }
        console.log(Name, email, password)
        // check email in db 
        const isUser = await User.findOne(email);
        if (isUser) {
            return res.status(400).json({
                success: false,
                messgage: "Email is already registered",
            })
        }
        console.log("het1")

        // password ko encrypt kar do or db ke andar daal do 
        let hashPassword;
        try {
            hashPassword = await bcrypt.hash(password, 10);
            console.log("hey")
        }

        catch (err) {
            return res.status(500).json({
                success: false,
                messgage: "Getting an error while hasing ",
                error: err.messgage
            })
        }

        // db ke andar entyr insert kar do
        const newUser = await User.create({ Name, email, password: hashPassword });

        return res.status(201).json({
            success: true,
            messgage: "Registration done",
            data: newUser
        })




    }
    catch (err) {
        console.log("Error in registration controller", err)
        return res.status(500).json({
            success: false,
            messgage: "Internal Server error",
            error: err.messgage
        })
    }
}


