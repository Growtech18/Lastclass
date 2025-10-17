const jwt = require("jsonwebtoken");
exports.ChecKLogin = async (req, res, next) => {
    try {
        // get the token from the header||cookie||body
        const { token } = req.cookies || req.body;
        console.log("middle")
        if (!token) {
            return res.status(500).json({
                success: false,
                messgage: "Getting token value null,Please Login",

            })
        }


        const payload = jwt.verify(token, process.env.JWT_SECRET)
        if (!payload) {
            return res.status(500).json({
                success: false,
                messgage: "This is not valid token",
                error: err.messgage
            })
        }
        next();
        return;
    }

    catch (err) {
        return res.status(500).json({
            success: false,
            messgage: "Getting an error while decode token ",
            error: err.messgage
        })
    }
}