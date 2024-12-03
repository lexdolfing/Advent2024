const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname, 'input2023day1part1.txt');
const input = fs.readFileSync(filepath, 'utf-8');
const doubleLines = input.split('\n');


let number = doubleLines[0];
let splitted = number.split("   ");



// split de doubleLines in twee lijsten
let leftList = [];
let rightList = [];
for (let i=0; i < doubleLines.length; i++){
    const splitted = doubleLines[i].split("   "); // splits on the three spaces between numbers and that deletes the spaces
    // add them to the correct list and meanwhile, make a integer of the numbers that were type string
    leftList.push(parseInt(splitted[0]));
    rightList.push(parseInt(splitted[1]));
}

// sort the lists
leftList.sort();
rightList.sort();

// measure distance between each pair
let distance = [];
let totalDistance = 0;
for (let i=0; i < leftList.length; i++){
    distance.push(Math.abs(leftList[i]-rightList[i]));
    totalDistance += Math.abs(leftList[i]-rightList[i]);
}
console.log(totalDistance)