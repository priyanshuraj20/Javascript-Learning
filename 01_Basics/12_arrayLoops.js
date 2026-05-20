//for of:

const arr = [1, 2, 3, 4, 5];

for (const s of arr) {
  console.log(s);
}

const greetings = "Hello world";
for (const greeting of greetings) {
  console.log(greeting);
}

//Maps: The map object holds key value pairs and rem. the original insertion order of the keys.  {unique collection}

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United states of america");
map.set("Fr", "France");

console.log(map);

for (const m of map) {
  console.log(m);
}

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObj = {
  game1: "NFS",
  game2: "Spiderman",
};

// obj is not iterable like this :

// for (const obj of myObj) {
//   console.log(obj);
// }

for (const key in myObj) {
  console.log(key, myObj[key]);
}

//for each loop:

const coding = ["js", "ruby", "java", "cpp", "python"];

coding.forEach(function (item) {
  console.log(item);
});

const num = [1, 2, 3, 4, 5, 6];
num.forEach((number) => {
  console.log(number + 1);
});

function printME(item) {
  console.log(item);
}

coding.forEach(printME);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    langName: "Java",
    langExt: ".java",
  },
  {
    langName: "c",
    langExt: ".C",
  },
  {
    langName: "python",
    langExt: ".py",
  },
];

myCoding.forEach((item) => {
  console.log(item.langName);
});

//reduced function:
// let arrr= [2,4,6,8,9]
// arr.reduce((acc,cur)=>{
//   return acc+curr
// })
//shift

// arrr.indexOf()

let arr2 =[1,2,3,[2,3,4],5]

let ansss = Array.isArray(arr2)
console.log(ansss)

let new_arr = arr2.flat(
console.log(new_arr);

//splice


greet = function(name){
  console.log(name);
}
greet("Hello!")

