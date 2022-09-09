const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//system uptime
console.log(`The system time usage is: ${os.uptime} seconds`);

//system information
const info = {
name: os.type(),
release: os.release(),
totalmemory: os.totalmem(),
freemem: os.freemem()
}
console.log(info);