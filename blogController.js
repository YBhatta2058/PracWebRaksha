import blogs from "./blogs.js";
export const getBlogs = (req,res)=>{
    return res.status(200).json({message:"Blogs retrieved succsesfully",
        data: blogs
    })
}

export const getBlogById = (req,res)=>{
    const id = req.params.id;
    const ind = blogs.findIndex(blog => blog.id == id);
    if(ind == -1){
        return res.status(404).json({message:"Not found"});
    }

    const blog = blogs[ind];
    return res.status(200).json({message: "Blog retrieved successfully",data:blog});
}

export const postBlog = (req,res)=>{
    const newBlog  = req.body;
    const blogToBeAdded = {id: blogs.length + 1 , ...newBlog};

    blogs.push(blogToBeAdded);

    return res.status(200).json({message:"Blog added successfully",
        data: blogToBeAdded
    });
}

export const deleteBlog = (req,res)=>{
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
}