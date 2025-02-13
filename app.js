import express, { Router } from "express";
import cors from "cors";
import { blogRouter } from "./blogRouter.js";


const app = express();

app.use(cors())
app.use(express.json())

const customMiddleware = (_,__,next)=>{
    console.log("this is the middleware hit");
    next();
}

const middleware2 = (_,__,next)=>{
    console.log("Next middleware")
    next();
}


  
app.get("/",customMiddleware,middleware2,(req,res)=>{
    return res.status(200).json({message:"Hello from the server",status:200})
});


//Routes
app.use('/blogs',blogRouter);


app.listen(8000,()=>{
    console.log("Server is listening to port " + 8000);
})