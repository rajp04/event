
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\nMongoDB connected !! DB HOST: ${connection.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}
module.exports = connectDB;