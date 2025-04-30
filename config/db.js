import mongoose from 'mongoose';
import { MONGO_DB_URI } from './env.js';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log('✅ MongoDB connected!');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
