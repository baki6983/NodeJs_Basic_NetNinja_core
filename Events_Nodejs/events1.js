var EventEmiter= require("events")

var emitter=new EventEmiter()


emitter.on("HelloEmitter",function(a,b){
    console.log(a,b,this, this);
    
})


emitter.emit("HelloEmitter",'a','b')