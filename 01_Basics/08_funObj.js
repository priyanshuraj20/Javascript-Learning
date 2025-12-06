function calculateCartPrice(...num1) {
  //rest opeartor
  return num1;
}

console.log(calculateCartPrice(200, 400, 600));

const user = {
  name: "priyanshu",
  age: 31,
};
function handleObject(anyobject) {
  console.log(`username is ${anyobject.name} and age is ${anyobject.age} `);
}

handleObject(user);
//or: directly pass :
handleObject({
  name: "sam",
  age: 19,
});

//array pass:

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
