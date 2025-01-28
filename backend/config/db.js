import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,  
      useUnifiedTopology: true, 
    });
    console.log('Connected Successfully...');
  } catch (error) {
    console.log('Error connecting to the database:', error);
  }
};

export default connectDB;
