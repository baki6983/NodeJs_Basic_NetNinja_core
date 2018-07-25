var EventEmitter= require('events')

var myEmitter= new EventEmitter()

myEmitter.once('newListener', (event, listener) => {
    if (event === 'event1') {
      // Insert a new listener in front
      myEmitter.on('event1', () => {
        console.log('B');
      });
    }
  });
  myEmitter.on('event1', () => {
    console.log('A');
  });
  myEmitter.emit('event1');

console.log(myEmitter.listenerCount(myEmitter,'event1'))