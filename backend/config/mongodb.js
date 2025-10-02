import mongoose from "mongoose";
const dburl=process.env.MONGODB_URI;

const connectDB=async()=>{

    mongoose.connection.on('connected',()=>console.log("Database Connected"))
  
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
}

export default connectDB;