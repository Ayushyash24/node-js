const fs =  require('fs')


const os = require('os')
fs.writeFileSync("dummy.txt","trying with modules")


console.log("abc");
console.log(os.platform());
console.log(os.hostname());

