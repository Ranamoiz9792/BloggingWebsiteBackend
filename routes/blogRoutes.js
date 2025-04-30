import express from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';

const router = express.Router();

router.post('/create', createBlog);          // Create a blog
router.get('/list', getAllBlogs);            // Get all blogs
router.get('/details/:id', getBlogById);     // ✅ Read one blog by ID
router.put('/update/:id', updateBlog);       // ✅ Update a blog by ID
router.delete('/delete/:id', deleteBlog);    // ✅ Delete a blog by ID


export default router;
