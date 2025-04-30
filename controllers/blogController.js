import Blog from '../models/Blog.js';

// Create a new blog
export const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
    const blog = await Blog.create({ title, content, author });
    res.status(201).json(blog);
  } catch (err) {
    console.error(err); // log the error for debugging purposes
    res.status(500).json({ error: 'An error occurred while creating the blog. Please try again later.' });
  }
};

// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length === 0) {
      return res.status(404).json({ message: 'No blogs found' });
    }
    res.status(200).json(blogs);
  } catch (err) {
    console.error(err); // log the error for debugging purposes
    res.status(500).json({ error: 'An error occurred while retrieving blogs. Please try again later.' });
  }
};

// Get single blog by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (err) {
    console.error(err); // log the error for debugging purposes
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ error: 'Invalid blog ID format' });
    }
    res.status(500).json({ error: 'An error occurred while retrieving the blog. Please try again later.' });
  }
};

// Update blog by ID
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (err) {
    console.error(err); // log the error for debugging purposes
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ error: 'Invalid blog ID format' });
    }
    res.status(500).json({ error: 'An error occurred while updating the blog. Please try again later.' });
  }
};

// Delete blog by ID
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error(err); // log the error for debugging purposes
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ error: 'Invalid blog ID format' });
    }
    res.status(500).json({ error: 'An error occurred while deleting the blog. Please try again later.' });
  }
};
