import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";



const postData=asyncHandler(async(req,res)=>{
   
    const myData=await User.find({})
    res.status(200).json({myData})
    

})

export {postData}