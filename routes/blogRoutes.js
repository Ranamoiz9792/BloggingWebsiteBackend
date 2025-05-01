import express from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/create',protect, createBlog);          // Create a blog
router.get('/list', getAllBlogs);            // Get all blogs
router.get('/details/:id',protect, getBlogById);     // ✅ Read one blog by ID
router.put('/update/:id',protect, updateBlog);       // ✅ Update a blog by ID
router.delete('/delete/:id', protect,deleteBlog);    // ✅ Delete a blog by ID


export default router;
