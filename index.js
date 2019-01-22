import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes'

const app = express();
const PORT = 3000;

//mongoose Connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{ useNewUrlParser: true });

//body parser setup

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Serving static Files 
app.use(express.static('./public'));


routes(app);
app.get('/',(req,res)=>{
    res.send(`node and express server is running on ${PORT}`);
});

app.listen(PORT,()=>{
    console.log(`node and express server is running on ${PORT}`)
});