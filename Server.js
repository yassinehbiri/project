const express = require('express');
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User');
const postRouter = require('./Routes/Posts');
const path=require('path')

const app = express();

require('dotenv').config()

ConnectDB()

app.use(express.json())
app.use('/api/users', userRouter)

app.use('/api/post',postRouter)

app.use("/api/uploads", require("./Routes/uploadRoute"));

app.use((req,res)=>{
    res.send('API is running...')
})

app.use("/uploads", express.static(path.join(__dirname, "./uploads")));



app.listen(process.env.port,console.log(`Server is running on the port ${process.env.port || 7666}`));