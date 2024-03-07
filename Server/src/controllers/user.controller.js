import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body

    if([name,email,password===""]){
        throw new ApiError(400,"all fields are required")
    }
})

const loginUser=asyncHandler(async(req,res)=>{

})

export {registerUser,loginUser}