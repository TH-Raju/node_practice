const events = require('events')
const eventEmitter = new events.EventEmitter()


// creating an event handler
const chitkardibo = () => {
    console.log("oi beti koi tmi?...");
}


// assign the handler into an event
eventEmitter.on('scream', chitkardibo).chitkardibo

//firing the event

eventEmitter.emit('scream')