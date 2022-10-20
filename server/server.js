const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');
require('./configs/mongoose.config')
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
require('dotenv').config();
//Express middleware functions. They are responsible for providing and parsing the request.body data.
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('./routes/user.route')(app)
require('./routes/event.route')(app)



  
app.listen(8000, ()=> {
    console.log("You are now listening to port 8000");
})