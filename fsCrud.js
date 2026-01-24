const fs = require('fs');

//  Create a directory named 'files'
// creating a file named apple.txt and banana.txt inside it with some content

fs.writeFileSync('files/apple.txt', 'Apple is a fruit.')
fs.writeFileSync('files/banana.txt', 'Banana is a fruit.')

// delete the file named apple.txt

fs.unlinkSync('files/apple.txt') 
// this will delete the file apple.txt from the files directory

// read the content of banana.txt and log it to the console

const bananaContent = fs.readFileSync('files/banana.txt', 'utf-8')
console.log(bananaContent)

// update the content of banana.txt to 'Banana is a yellow fruit.'

fs.appendFileSync('files/banana.txt', ' Banana is a yellow fruit.')

// read the updated content of banana.txt and log it to the console 
const updatedBananaContent = fs.readFileSync('files/banana.txt', 'utf-8')
console.log(updatedBananaContent)