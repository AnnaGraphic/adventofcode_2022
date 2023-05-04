// Find the item type that appears in both compartments of each rucksack. 
// What is the sum of the priorities of those item types?
// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

const fs = require('fs');
const { constants } = require('fs/promises');
fs.readFile("./input.txt", "utf8", (err, data) => {
    if (err) {
        console.error("error: ", err);
        return;
    }

    let arr = data.split('\n')

    const findMatch = input => {
        for (let i = 0; i < (input.length / 2); i++) {
            for (let j = input.length; j > (input.length / 2); j--)
                if (input[i] == input[j]) {
                    console.log("match ", input[i], input[j])
                    return input[i]
                };
        }
    }
    // TODO: priority return in right order, a-z = 1-26, act. 33-58
    let priority = item => {
        // console.log("item ", item)
        let i = 65;
        let p = 1;
        while (item !== String.fromCharCode(i)) {
            i++;
            p++;
        }
        console.log(p);
        return p 
    };

   priority(findMatch(arr[0]))
})

