console.log("Hello world")
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath,'utf-8');
const lines = input.split('\n');
console.log(lines[5]);
let sum = 0;
console.log(parseInt(lines[5],2));

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let digits = line.match(/\d/g);
    if (digits && digits.length > 0) {
        let firstDigit = parseInt(digits[0]);
        let lastDigit = parseInt(digits[digits.length-1]);
        const combinedNumber = parseInt(`${firstDigit}${lastDigit}`);
        sum += combinedNumber;
    }
}

console.log('sum is' + sum);