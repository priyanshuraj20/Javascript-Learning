// singleton :Object.create

const { json } = require("express");

//object literal :

const mySym = Symbol("key1");
const JsUser = {
  name: "Priyanshu",
  [mySym]: "mykey1",
  age: 21,
  branch: "CSE",
  enroll: 2403051050875,
};
console.log(JsUser);
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
// Object.freeze(JsUser);
JsUser.name = "SHreya agrawal";
console.log(JsUser.name);

JsUser.greeting = function () {
  console.log(`Hello ${this.name}`);
};
console.log(JsUser.greeting());
