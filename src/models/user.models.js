import mongoose, { Schema } from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema  = mongoose.schema({

    username:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true,
        index: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true,
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
    },
    avatar:{
        type: String,/*cloudinary url will come here */
        required: true,
    },
    coverimage:{
        type: String,/*cloudinary url will come here */
    },
    watchHistory:{
        type: [{
            type: Schema.Types.ObjectId,
            reference: "video"
        }]
    },
    password:{
        type: String,
        required: [true, "password is required"]
        
    },
    refreshToken:{
        type: String,

    }
    

},{timestamps:true})
userSchema.pre("save",async function (next){
    if(!this.isModified ("password"))return next()
    this.password = bcrypt.hash(this.password, 10)
    next()

})


export const User = mongoose.model("User",userSchema)


