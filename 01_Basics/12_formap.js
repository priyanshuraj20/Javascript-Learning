// const coding = [json, ruby, java, python, cpp];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = myNums.filter((num) => num > 4); //if we open scope we have to return it than, explicit return:
// const newNums = myNums.filter((num) => {return num > 4});

console.log(newNums);

//map
const numss = myNums.map((num) => num + 10);
console.log(numss);

//chaining
const num = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 20);
console.log(num);
//reduce
array.reduce(callback(accumulator, currentValue, index, array), initialValue);
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // Output: 15
