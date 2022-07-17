// // const express = import('express')
// import('dotenv')
// const app= express();
// const port = process.env.PORT
// const cors = import('cors')
// import db from "./config/database.js";
// import usersRoutes from "./routes/app.js";


// try{
//   await db.authenticate();
//   console.log('Database connected');
// }catch(error){
//   console.log('connection error.',error);
// }

// app.use(cors())
// app.use(express.json());
// app.use('/users',usersRoutes)


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// // const users = [
// //   {
// //     "id": 001,
// //     "Name": "Mohamed Ahmed"
// //   },
// //   {
// //     "id": 002,
// //     "Name": "ali abdi"
// //   }
// // ]

// //  app.get('/users', (req, res) => {
//   //   res.send(users)
//   // })



import express from "express";
import db from "./config/database.js";
import usersRoutes from "./routes/app.js";
import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/users', usersRoutes);
 
app.listen(5000, () => console.log('Server running at port 5000'));
