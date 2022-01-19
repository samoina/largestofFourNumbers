
// let myNewArray;
// let sortedArr;
// let maxArr = [];


// let myNumberArray = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];

// for (let index = 0; index < myNumberArray.length; index++) {
//   //I created a new variable to store myNumberArray[index] because i could not use it in the next for-loop as myNumberArray[index].length. turns out it is because there were two indexes
//   myNewArray = myNumberArray[index];
//   // console.log(myNumberArray[index]);
//   for (let index = 0; index < myNewArray.length; index++) {
//     sortedArr = (myNewArray).sort(function (elA, elB) {
//       return elA - elB
//     });
//   }
//   console.log(sortedArr[0]);
//   maxArr.push(sortedArr[sortedArr.length-1]);
// }
// console.log(maxArr)

let numberArray = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1], [45, 67, 808, 12]];


function largestOfFour(array) {
  //create variables scoped to the local function
  let sortArr = [];
  let maxArr = [];
  // use nested for loops within the function and do not use index twice in the same for loop due to conflict within the same scope

  for (let index = 0; index < numberArray.length; index++) {
    for (let i=0; i<numberArray[index].length; i++) {
      //create a new array to store the values you return after comparison in descending order. we cannot use .sort() alone as it compares the first numbers and 10 is smaller than 2
      sortArr = numberArray[index].sort(function (num1, num2) {
        return num2 - num1;
      })
    }

    //sortArr is the sorted array, take the first index, and push it into a new array called maxArr.
    maxArr.push(sortArr[0]);
  }

  //place the return outside the for-loop so that it doesnt return the first value, and instead returns the array of largest numbers
  return maxArr;
}

console.log(largestOfFour(numberArray));

//<------------TAKE 2------------>
function trialTwo(array) {

  let nuArr = [];
  for (let index = 0; index < array.length; index++) {
    // console.log(array[index]);
    for (let i = 0; i < array[index].length; i++) {
      array[index].sort(function (a, b) {
        return b - a
      })
      console.log(array[index][0]);
    
    }
    nuArr.push(array[index][0]);
  }

  console.log(nuArr);
}


let digArray = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1], [45, 67, 808, 12]];
// console.log(trialTwo(digArray))
trialTwo(digArray);
