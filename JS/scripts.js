// let numberArray = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1], [45, 67, 808, 12]];


// function largestOfFour(array) {
//   let sortArr = [];
//   let maxArr = [];
//   for (let index = 0; index < numberArray.length; index++) {
//     for (let i = 0; i < numberArray[index].length; i++) {
//       sortArr = numberArray[index].sort(function (num1, num2) {
//         return num2 - num1;
//       })
//     }
//     maxArr.push(sortArr[0]);
//   }
//   return maxArr;
// }

// console.log(largestOfFour(numberArray));
//output (5) [27, 5, 39, 1001, 808]


//<-------TAKE TWO-------->
function trialTwo(array) {

  let nuArr = [];
  for (let index = 0; index < array.length; index++) {
    for (let i = 0; i < array[index].length; i++) {
      array[index].sort(function (a, b) {
        return b - a
      })
    }
    nuArr.push(array[index][0]);
  }
  console.log(nuArr);
}


let digArray = [[13, 627, 18, 26], [4, 75, 1, 3], [32, 35, 7, 9], [1000, 1001, 857, 1], [45, 67, 88, 12]];
trialTwo(digArray);







