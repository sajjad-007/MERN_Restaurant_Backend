const mongoose = require('mongoose');
const { ErrorHandler } = require('../error/error');

const databaseConnection = async(req,res)=>{
    try {
        const dbCoonnect = await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "RESTAURANT"
        })
        if (!dbCoonnect) {
            console.log("Database connection failed!")
            return next(new ErrorHandler("database connection error!", 401));
        }
    } catch (error) {
        console.log("Error from database connection",error)
    }
}

module.exports = {databaseConnection};