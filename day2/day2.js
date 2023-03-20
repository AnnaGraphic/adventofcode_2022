// A for Rock, B for Paper, and C for Scissors
// X for Rock, Y for Paper, and Z for Scissors


// The score for a single round is the score for 
// the shape you selected (1 for Rock, 2 for Paper, 
// and 3 for Scissors) plus the score for the 
// outcome of the round (0 if you lost, 
// 3 if the round was a draw, and 6 if you won).


// score == 15
const strategyGuide = ['A Y', 'B X', 'C Z']

let totalScore = 0;

const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("error: ", err);
    return;
  }

  let arr = data.split('\n')
  console.log(data.length, arr.length)
// console.log("arr", arr, "data", data)
// for (let i = 0; i < arr.length; i++) {
//     console.log("arr[i]", arr[i]);
// }

    function playGuide(input) {
        for (let i = 0; i < input.length; i++) {
            // console.log("input[i]", input[i]);
            evaluateStratGuide(input[i])
        }
    }

    function evaluateStratGuide(input) {

        switch (input) {
            case ('A X') : 
                totalScore += 4; // +1 for rock, +3 for tie
                break;
            case ('A Y') :
                totalScore += 8; // +2 for paper, +6 for win
                break; 
            case ('A Z') :
                totalScore += 3; // + 3 for scissors, 0 for lost
                break; 
            case ('B Z') :
                totalScore += 9; // + 3 for scissors, +6 for win
                break; 
            case ('B X') : 
                totalScore += 1; // +1 for rock, 0 for lose
                break;
            case ('B Y') :
                totalScore += 5; // +2 for paper, +3 for tie
                break; 
            case ('C Z') :
                totalScore += 6; // + 3 for scissors, +3 for tie
                break; 
            case ('C X') : 
                totalScore += 7; // +1 for rock, +6 for win
                break;
            case ('C Y') :
                totalScore += 2; // +2 for paper, 0 for tie
                break; 
            default: 
            console.log('kaputt');
        };

    }

//evaluateStratGuide('B, Z')
playGuide(arr);    function playGuide(input) {
    for (let i = 0; i < input.length; i++) {
        // console.log("input[i]", input[i]);
        evaluateStratGuide(input[i])
    }
}

function evaluateStratGuide(input) {

    switch (input) {
        case ('A X') : 
            totalScore += 4; // +1 for rock, +3 for tie
            break;
        case ('A Y') :
            totalScore += 8; // +2 for paper, +6 for win
            break; 
        case ('A Z') :
            totalScore += 3; // + 3 for scissors, 0 for lost
            break; 
        case ('B Z') :
            totalScore += 9; // + 3 for scissors, +6 for win
            break; 
        case ('B X') : 
            totalScore += 1; // +1 for rock, 0 for lose
            break;
        case ('B Y') :
            totalScore += 5; // +2 for paper, +3 for tie
            break; 
        case ('C Z') :
            totalScore += 6; // + 3 for scissors, +3 for tie
            break; 
        case ('C X') : 
            totalScore += 7; // +1 for rock, +6 for win
            break;
        case ('C Y') :
            totalScore += 2; // +2 for paper, 0 for tie
            break; 
        default: 
        console.log('kaputt');
    };

}

console.log('total: ', totalScore)
});


