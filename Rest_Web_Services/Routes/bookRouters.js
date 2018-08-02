var express = require('express');

var routes=function(Book){
    var bookRouter=express.Router();
    bookRouter.route('/books')
    .post(function(req,res){
        var book=new Book(req.body);
        book.save()
        res.status(201).send(book)    
    })
    .get(function(req,res){
        var query=req.query;
        Book.find(query,function(err,books){
            if (err)
            res.status(500).send(err)
            else
            res.json(books)
        })  
    })  
    bookRouter.route('/books/:bookId')
    .get(function(req,res){
       
        Book.findById(req.params.bookId,function(err,book){
            if (err)
            res.status(500).send(err)
            else
            res.send(book)
        })
    })
    return bookRouter;
}

module.exports=routes;