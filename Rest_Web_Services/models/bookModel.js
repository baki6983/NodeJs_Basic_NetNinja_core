var mongoose=require('mongoose');

var schema=mongoose.Schema({

    title:{
        type:String
    },
    author:{
        type:String
    },
    gener:{
        type:String
    },
    pages:{
        type:Number
    },
    read:{
        type:Boolean,default:false
    }

});



module.exports=mongoose.model('Book',schema);