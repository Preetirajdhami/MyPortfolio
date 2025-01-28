import express from 'express';
import dotenv from 'dotenv'; 
import connectDB from './config/db.js';
import cors from 'cors'; 
import contact from './routes/contact.js'
 

dotenv.config(); 

const app = express();
const port = process.env.PORT || 8000; 
const DATABASE_URL = process.env.DATABASE_URL; 

app.use(cors({
  origin: 'http://localhost:3000',  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  
  allowedHeaders: ['Content-Type'], 
}));


connectDB(DATABASE_URL);

app.use(express.json()); 


app.use('/api', contact);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
