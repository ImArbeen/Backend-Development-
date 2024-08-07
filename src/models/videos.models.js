import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = mongoose.Schema (
    {
        videofile:{
            type:String, /* cloudinary url will come here */
            required: true,
        },

        thumbnail:{
            type:String, /* cloudinary url will come here */
            required: true,
        },

        title:{
            type:String, 
            required: true,
        },

        descritpion:{
            type:String, 
            required: true,
        },

        time:{
            type:Number,
            required: true,
        },

        views:{
            type:Number,
            default:0
        },

        isPublished: {
            type: Boolean,
            default:true,
        },
        owner:{
            type: Schema.Types.ObjectId,
            reference: "User"
        }

    },
    
    { timestamps: true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)