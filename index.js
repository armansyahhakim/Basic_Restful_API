const express = require("express");
const app = express();

// Port
require("dotenv").config();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server ini berjalan di http://localhost:${PORT}`)
});

// Connect to database
const mongoose = require("mongoose");
const MONGODB = process.env.MONGODB_LOCAL
mongoose.connect(MONGODB, {});

// Connection database check
const checkDB = mongoose.connection;
checkDB.on("error", (error) => {
    console.log(error)
})

checkDB.once("open", () => {
    console.log("Database connected")
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// User router
const userRouter = require('./routes/userRoute');
app.use(userRouter);

