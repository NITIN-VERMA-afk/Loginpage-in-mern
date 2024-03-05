import mongoose from "mongoose";
// import DB_NAME from "../constants"



const connectDB=async()=>{
    try {

        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/"LOGINFORM"`)
        console.log(`\n mongoDB connected !! DB host:${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("mongodb connection failed",error)
        process.exit(1)
        
    }

}




export default connectDB