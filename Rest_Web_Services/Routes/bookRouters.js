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

    .put(function(req,res){
        Book.findById(req.params.bookId,function(err,book){
            if (err)
            res.status(500).send(err)
            else
            book.title=req.body.title;
            book.author=req.body.author;
            book.gener=req.body.gener;
            book.pages=req.body.pages;
            book.read=req.body.read;
            book.save() 
            res.json(book)
        })
    })
    .patch(function(req,res){
        Book.findById(req.params.bookId,function(err,book){
            if (err)
            res.status(500).send(err)
            else
            if (req.body._id)
            delete req.body._id
            for(var p in req.body)
            book[p]=req.body[p]
            book.save(function(err){
                if (err){
                    res.status(500).send(err)
                }
                else{
                    res.json(book)
                }
            })
        })
    })
    .delete(function(req,res){
        Book.findById(req.params.bookId,function(err,book){
            if (err)
            res.status(500).send(err)
            else
            book.remove(function(err){
                if (err)
                res.status(500).send(err)
                else
                res.status(204).send('removed')
            })
        })
    })
    return bookRouter;
}

module.exports=routes;