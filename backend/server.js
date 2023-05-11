const cookieParser = require("cookie-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const app = express();



//db connection
const connectDB = require("./config/db");
connectDB();



//to use json

//middlewares

app.use(express.json());



//to accept body data
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//calling the routes

app.get("/",(req,res)=>{
    res.send("API is Running Succesfully");
} );

const refundRouter = require("./routes/RefundRoute")
app.use("/api/refund",refundRouter)

const EmployeeRouter = require("./routes/EmployeeRoute")
app.use("/api/employee",EmployeeRouter)

const SalaryRouter = require("./routes/SalaryRoute")
app.use("/api/salary",SalaryRouter)

const RecordRouter = require("./routes/FinanceHealth")
app.use("/api/record",RecordRouter)




//define the port number
const port = process.env.PORT || 5000;

//start the server
const server=app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

const io =require('socket.io')(server,{
   pingTimeout:60000,
    cors:{

        orgin:"http://localhost:3000",
    },
});

