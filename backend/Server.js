const express = require("express");
require("dotenv").config();
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors")
const port = process.env.PORT || 4000;

//middlewares


app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})



//Configure Your cors so identify your fronend request
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);
//database connctibity
const DBconnection = require("./configuration/DBconnetion.js");
DBconnection();




app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})




const RegistrationRoute = require("./routes/RegistrationRoute.js")
//mount your routes

app.use("/api/v1/r1", RegistrationRoute)
const LoginRoute = require("./routes/LoginRoute.js")
app.use("/api/v1/l1", LoginRoute);
const HomeRoute = require("./routes/HomeRoute.js")
app.use("/api/v1/h1", HomeRoute)