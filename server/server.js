const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
//Express middleware functions. They are responsible for providing and parsing the request.body data.
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8000, ()=> {
    console.log("You are now listening to port 8000");
})