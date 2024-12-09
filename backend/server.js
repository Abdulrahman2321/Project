
import express from 'express';
import { connect } from 'mongoose';
// import { json } from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app = express();
const PORT = process.env.PORT || 5001;


app.use(cors());
//app.use(json());


import authRoutes from './routes/auth.js';  


app.use('/api/auth', authRoutes);


connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
