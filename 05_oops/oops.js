const user = {
  username: "Priyanshu",
  age: 20,
  branch: "CSE",

  getUser: () => {
    // console.log(`${this.username}`);
    console.log(this);
  },
};
console.log(user.username);
// console.log(user.getUser());

// 🔹 Constructor Function
// Constructor function ek **blueprint** ki tarah kaam karta hai
// aur `new` keyword ke saath use karte hain tab ye **naya object return karta hai**.
function User(username, loginCount, isLoggedIn) {
  // `this` refers to the **newly created object** by `new`
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  // Explicit return is optional; JS automatically returns `this` if no other object is returned
  return this;
}

// ❌ Without `new` keyword
// Agar hum `User()` ko normal function ki tarah call karte hain
// const userOne = User("hitesh", 12, true);
// const userTwo = User("priyanshu", 11, false);
// is case me:
// 1️⃣ `this` will point to global object (window in browser)
// 2️⃣ Properties of `this` get overwritten (username, loginCount, isLoggedIn)
// 3️⃣ userOne, userTwo will be undefined
// console.log(userOne); // ❌ Error / unexpected values

// ✅ Correct way: Use `new` keyword
// `new` keyword kaam karta hai:
// 1️⃣ Naya empty object banata hai
// 2️⃣ `this` ko us object pe point karta hai
// 3️⃣ Constructor function run hota hai aur properties assign hoti hain
// 4️⃣ Naya object automatically return hota hai
const userOne = new User("hitesh", 12, true);
const userTwo = new User("priyanshu", 11, false);

// 🔹 Check the created objects
console.log(userOne); // { username: "hitesh", loginCount: 12, isLoggedIn: true }
console.log(userTwo); // { username: "priyanshu", loginCount: 11, isLoggedIn: false }
