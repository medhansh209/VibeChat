import mongoose from "mongoose";

const userSchmea = new mongoose.Schema(
    {
        email:{
            type:String,
            required: true,
            unique:true
        },

        fullName:{
            type:String,
            required:true
        },

        password:{
            type:String,
            required:true
        },

        profilePic:{
            type:String,
            default: "",
        }
    }, { timestamps:true }
)

const User = mongoose.model("User", userSchmea);
export default User;