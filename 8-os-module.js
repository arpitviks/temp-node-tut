const os = require('os');

//get information about the current user

const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()}`);

const currentos = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentos);