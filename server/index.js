require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors')
const Connected = require('./db')
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')



Connected()

//middlewars
app.use(express.json())
app.use(cors())

app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)


app.listen(5000,()=>{
    console.log("Server is running!!!!");
})