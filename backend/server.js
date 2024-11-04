import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import claimRoutes from './routes/claim.routes.js';
import path from 'path';


dotenv.config()
const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/claims', claimRoutes);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
app.listen(process.env.PORT || 5000, () => {
    connectDB();
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});