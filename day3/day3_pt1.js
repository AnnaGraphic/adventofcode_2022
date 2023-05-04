// Find the item type that appears in both compartments of each rucksack. 
// What is the sum of the priorities of those item types?
// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

const fs = require('fs')
fs.readFile("./input.txt", "utf8", (err, data) => {
    if (err) {
        console.error("error: ", err);
        return;
    }

    // let oneCompartment = arr[i].length/2
    let arr = data.split('\n')
    console.log(arr[1].length)
    for (let i = 0; i < (arr[0].length / 2); i++) {
        for (let j = arr[0].length; j > (arr[0].length / 2); j--)
        if (arr[0][i] == arr[0][j]) {
            console.log("match ", arr[0][i], arr[0][j])
        };
    }
})

