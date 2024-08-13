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
        required: [true, "password is required "]
        
    },
    refreshToken:{
        type: String,

    }
    

},{timestamps:true})
userSchema.pre("save", async function (next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10)
        
    }
    next();
})

// checking the password from the user and existing

userSchema.methods.isPasswordCorrect  = async function (password){
return await bcrypt.compare(password,this.password)

}

// generating the access_Token 

userSchema.methods.generatedAccessToken = function(){
   return Jwt.sign(
        {
            _id: this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
    
}
userSchema.methods.generatedRefreshToken = function(){
   return Jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
    
}



export const User = mongoose.model("User",userSchema)


