var EventEmitter= require('events')

var emitter= new EventEmitter()


//#region 
// So whenever you "EmitAsync" calls , Event which register (on) executes So It prints 1,2,3,4.
// If we set emitter once instead of on. it executs ignore rest , here it prints 1.
let m=0
emitter.on("EmitAsync",(a,b)=>{
   
    setImmediate(function(){
        console.log('this happens Aynchrnously');
        console.log(++m)     
    }); 
})
//#endregion


emitter.emit('EmitAsync','a','b')
emitter.emit('EmitAsync','a','b')
emitter.emit('EmitAsync','a','b')
emitter.emit('EmitAsync')



