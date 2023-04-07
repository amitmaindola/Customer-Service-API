const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const initRoutes = require('./app/routes/routes');


const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(express.static('assets'));

initRoutes(app);

app.listen(3000, ()=>{
    console.log("Server started at port 3000!");
})