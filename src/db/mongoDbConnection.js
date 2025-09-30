const mongoose = require('mongoose');
const { DBNAME } = require('../../constant');

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DBNAME}`);
        console.log(`MongoDB connected !! DB Host ${connectionInstance.connection.host}`);
        
    } catch (error) {  
        console.log(error);
        process.exit();
    }
    mongoose.set("debug", true); // for log raw query
}

module.exports = connectDB;