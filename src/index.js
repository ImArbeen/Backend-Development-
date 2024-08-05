import dotenv from 'dotenv';
import connectDb from './db/index.js';

// Load environment variables
dotenv.config();


// Connect to MongoDB
connectDb()

.then(()=>{
    app.listen(process.env.PORT || 8000)
    console.log(`Server is running at port : ${process.env.PORT}`)
})
.catch((error)=>{
    console.log("MongoDb Connection Failed  !! ",error)
})
