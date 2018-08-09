var express=require('express');

var router=express.Router();

const Product=require('../models/Product')


router.get('/:productId',(req,res,next)=>{
    Product.findById(req.params.productId)
            .exec()
            .then(doc=>{
                console.log(doc);  
                if(doc){
                res.status(200).json(doc);}
                else{
                res.status(404).json({message:'Invalid Id , Please try again'});
            }
            })
            .catch(err=>{
                console.log(err);
                res.status(500).json({error:err})
            });
})

router.patch('/:productId',(req,res,next)=>{
    Product.findById(req.params.productId,function(err,product){
        if (err)
        res.status(500).send(err)
        else
        for(var p in req.body)
        product[p]=req.body[p]
         product.save(function(err){
            if (err){
                res.status(500).send(err)
            }
            else{
                res.json(product)
            }
        })
    })
})

router.delete('/:productId',(req,res,next)=>{
    Product.findById(req.params.productId,function(err,product){
        if (err)
        res.status(500).send(err)
        else
        product.remove(function(err){
            if (err)
            res.status(500).send(err)
            else
            res.status(204).send('removed')
        })
    })
    
})

router.post('/',(req,res,next)=>{
    var product=new Product(req.body)
    product.save()
    res.status(200).send(product)
    });
router.get('/',(req,res,next)=>{
    Product.find(function(err,books){
        if (err)
        res.status(404).send(err)
        else
        res.json(books);
    })
})

module.exports=router;
