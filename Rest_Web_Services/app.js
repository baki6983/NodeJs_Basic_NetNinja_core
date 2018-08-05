
//Npm modules
var express = require('express'),
    mongoose=require('mongoose'),
    bodyParse=require('body-parser');

var db=mongoose.connect('mongodb://localhost:27017/bookAPI');
    //Project modules
var Book=require('./models/bookModel');
var app = express();
port = process.env.PORT || 8016;
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

bookRouter=require('./Routes/bookRouters')(Book);  

app.use('/api',bookRouter)

app.get('/', function rootHndlr(req, res) {
    /* body... */
    res.send('welcome to my API!');
});

app.listen(port, function listenHndlr(){
    console.log('Gulp is running my app on PORT ' + port);
});
