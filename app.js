import express from "express";
import cors from "cors";
import blogs from "./blogs.js";


const app = express();

app.use(cors())
app.use(express.json())


  
  console.log(blogs);
  

app.get("/",(req,res)=>{
    return res.status(200).json({message:"Hello from the server",status:200})
});

app.get('/blogs',(req,res)=>{
    return res.status(200).json({message:"Blogs retrieved succsesfully",
        data: blogs
    })
});

app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    const ind = blogs.findIndex(blog => blog.id == id);
    if(ind == -1){
        return res.status(404).json({message:"Not found"});
    }

    const blog = blogs[ind];
    return res.status(200).json({message: "Blog retrieved successfully",data:blog});
})

app.post('/blogs',(req,res)=>{
    const newBlog  = req.body;
    const blogToBeAdded = {id: blogs.length + 1 , ...newBlog};

    blogs.push(blogToBeAdded);

    return res.status(200).json({message:"Blog added successfully",
        data: blogToBeAdded
    });
})

app.delete('/blogs/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index = blogs.findIndex(blog => blog.id == id);
    if(index == -1){
        return res.status(404).json({message:"Not found"});
    }
    const blogDeleted = blogs[index];
    blogs.splice(index,1);


    return res.status(200).json({message:"Blog deleted successfully",
        data: blogDeleted
    });
})

// app.put('/blogs/:id',(req,res)=>{

// })



app.listen(8000,()=>{
    console.log("Server is listening to port " + 8000);
})