const  express = require('express');

const bodyParser = require('body-parser');

const dotenv = require("dotenv");

const cors = require('cors');

const app = express();
//setup server port;
const port = process.env.Production || 3000;
// parse all requests of content-type - application/x-www-form-urlencoded & content-type - application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//enabling cors for all requests
//app.use(cors());

dotenv.config();

//default route
app.get('/',(req,res)=>{
    res.json({"message":"Hello World"});
});
//require purchasing routes
const purchasingRoute = require('./src/routes/purchase-route')

app.use('/api',purchasingRoute)
app.listen(port,()=> {
    console.log(`Server listening on port ${port}`)
});