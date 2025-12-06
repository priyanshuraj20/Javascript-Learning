//this keyword and arrow function :

const user = {
  username: "Priyanshu",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username},Welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this);

// function chai() {
//   console.log(this);
// }
// chai();

// const chai = function () {
//   console.log(this);
// };

//Arrow function:::

const chai = () => {
  let username = "Priyanshu";
  console.log(this.username);
};
chai();

const addTwo = (num1, num2) => {
  return num1 + num2;
};
let sum = addTwo(2, 5);
console.log(sum);
//this was basic arrow function

//implict return :
const addTow = (num1, num2) => num1 + num2;
console.log(addTow(9, 8));

//object return :
const name = () => ({ username: "Priyanshu" });
console.log(name());
