const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


require('dotenv').config()
/*EXPRESS SERVER AND PORT INITIALIZATION*/
const todoAppServer = express();
const port = process.env.port || 5000

// MIDDLE WARE SETUP
todoAppServer.use(cors())
todoAppServer.use(express.json())


//INITALIZING MongoDB Database
mongoose.set("strictQuery",false)
//Connect to db
mongoose.connect(process.env.ATLAS_URL,{useNewUrlParser:true}).then(()=>{
  console.log("connection created!")
}).catch((err)=>{
  console.log(err)
})
const connection = mongoose.connection
//Open Session to connected db
connection.once('open',()=>{
  console.log("DB established successfully")
})

//Initializing new Route of the API
const todoRouter = require('./routes/todo-routes')

//Declaring path and the function(file) to use for API
todoAppServer.use('/todo',todoRouter)
//Start Express JS Server On Port
todoAppServer.listen(port,()=>{
  console.log(`Server is running on port: ${port}`)
});

todoAppServer.get("/", (req, res) => {
  console.log("get is working");
  res.send("Backend Server Started");
 });
