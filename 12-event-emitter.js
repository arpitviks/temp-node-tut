const eventEmitter = require('events');

const customEvent = new eventEmitter();


//On Event: This will execute the callback funtion once the event is executed.

customEvent.on('response', (user, id) => {
    console.log(`Data recieved user ${user} with id: ${id}`);
})


//Emit: this method will fire up the event & then it will
customEvent.emit('response', 'Arpit', '139');