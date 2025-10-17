const mongoose = require("mongoose");

async function DBconnection() {
    try {
        await mongoose.connect(process.env.DBURL);
        console.log("DB connected")
    }
    catch (err) {
        console.log("Getting error", err)
    }
}
module.exports=DBconnection;