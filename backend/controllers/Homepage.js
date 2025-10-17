const User = require("../models/User.js")

exports.Home = async (req, res) => {
    try {
        const allUser = await User.find();
        if (!allUser) {
            return res.status(500).json({
                success: false,
                messgage: "No user found",

            })
        }

        return res.status(200).json({
            success: true,
            messgage: "all user info",
            data: allUser
        })
    }
    catch (err) {
        console.log("Error in registration controller")
        return res.status(500).json({
            success: false,
            messgage: "Internal Server error",
            error: err.messgage
        })
    }
}
