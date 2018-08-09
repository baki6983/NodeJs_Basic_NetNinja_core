var express=require('express');

var router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        name:'Baki',
        age:'24',
        message:'This is from Get request!!'
    });
    
});

router.get('/:orderId',(req,res,next)=>{

    var pId=req.params.orderId;
    if (pId==='Baki')
      var jsonObject={name:'Baki'}
    else
    var jsonObject={name:'I am not baki'}
    
    res.status(200).json(jsonObject)
})

router.patch('/:orderId',(req,res,next)=>{

    var jsonObject={message:'Order is updated!!'}
    res.status(200).json(jsonObject)
})

router.delete('/:orderId',(req,res,next)=>{

    var jsonObject={message:'Order is deleted!!'}
    res.status(200).json(jsonObject)
})


router.post('/',(req,res,next)=>{
    res.status(200).json({
        name:'Baki',
        age:'24',
        message:'This is from Post request!!'
    });
    
});



module.exports=router;
