// https://adventofcode.com/2022/day/1
// https://nodejs.org/dist/latest-v19.x/docs/api/ ckecken um zahlenstapel rein zu kriegen
// https://nodejs.dev/en/learn/reading-files-with-nodejs/


const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let arr = data.split('\n\n').map(i => {return i.split('\n')});
  
  let newArr = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = parseInt(arr[i][j]);
//console.log(num)
}
newArr.push(arr[i].reduce((acc, curr) => acc + curr, 0));
  //console.log(arr[i])

};
console.log(newArr.sort(function(a, b){return b-a}));

});

