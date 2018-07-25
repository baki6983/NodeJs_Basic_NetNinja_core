var EventEmitter= require('events')

var emitter= new EventEmitter()

//listeners should always be added for the 'error' events.
emitter.on('error',(err)=>{
    console.log('Oops something went wrong');
    
})
emitter.emit("error",new Error('Oops something went wrong'))