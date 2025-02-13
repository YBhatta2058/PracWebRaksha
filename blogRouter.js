import { Router } from "express";
import { deleteBlog, getBlogById, getBlogs, postBlog } from "./blogController.js";

export const blogRouter = Router();

blogRouter.route('/').get(getBlogs);
blogRouter.route('/').post(postBlog);
blogRouter.route('/:id').delete(deleteBlog);
blogRouter.route('/:id').get(getBlogById);