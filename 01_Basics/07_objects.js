//singleton
// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";

console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    name: "Priyanshu",
    last_name: "AGrawal",
  },
};
console.log(regularUser);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "C", 4: "d" };

// const obj3 = Object.assign({}, obj1, obj2); //{}->target  baaki->source
const obj3 = { ...obj1, ...obj2 }; //easy ad simple -> spread
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// ********Objects DEstructuring *********
const course = {
  courseName: "JS in hindi",
  price: 99,
  courseTeacher: "Hitesh sir",
};

const { courseTeacher: sirji } = course; //destructuring

console.log(sirji);

// const user = {
//   name: "Priyanshu",
//   age: 20,
//   city: "Vadodara",
// };

// const { name, age, city } = user;

// console.log(name, age, city);
const user = {
  name: "Priyanshu",
  address: {
    city: "Vadodara",
    country: "India",
  },
};

const {
  address: { city, country },
} = user;

console.log(city, country);

//ARRAY OF OBJECT:
const users = [
  { name: "Aman", age: 21 },
  { name: "Rahul", age: 22 },
];

const [{ name, age }] = users;

console.log(name, age); // Aman 21
