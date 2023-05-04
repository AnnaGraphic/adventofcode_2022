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

    function findMatch(input) {
        for (let i = 0; i < (input.length / 2); i++) {
            for (let j = input.length; j > (input.length / 2); j--)
                if (input[i] == input[j]) {
                    console.log("match ", input[i], input[j])
            };
        }
    }
    findMatch(arr[0])
})

