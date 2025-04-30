import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
    },
    content: {
      type: String,
      required: [true, 'Blog content is required'],
    },
    author: {
      type: String,
      default: 'Anonymous',
    },
  },
  { timestamps: true }
);

// _id is automatically the primary key (ObjectId)
const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
