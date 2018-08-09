var express=require('express');
var app=express();
var morgan=require('morgan');
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var port=process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var productRouter=require('./app/routers/products')
var orderRouter=require('./app/routers/orders')

app.use(morgan('dev'))
var db=mongoose.connect('mongodb://localhost:27017/ProductsDb');
app.use('/products',productRouter);

app.use('/orders',orderRouter)

app.listen(port);