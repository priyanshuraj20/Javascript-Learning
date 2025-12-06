# JavaScript and classes:

#Javascript is a prototype -based language:JavaScript prototype-based language hai matlab —objects directly dusre objects se inherit karte hain,classes se nahi
Yes, JavaScript mein “classes” hoti hain —
lekin wo real classes nahi, syntactic sugar hain over prototype.
"Syntactic sugar" ka matlab hai —
JavaScript ne class syntax sirf code ko clean aur readable banane ke liye diya hai,
lekin andar se wo still prototype-based system hi use karta hai.

Feature Description
Before ES6: JavaScript used functions + prototypes
After ES6: class syntax introduced for simplicity
Internally: Still uses prototype-based inheritance
Type: Class is actually a special kind of function

Prototype-based:
function Person(name, age) {
this.name = name;
this.age = age;
}

// Method add karna prototype se
Person.prototype.sayHi = function() {
console.log(`Hello, my name is ${this.name}`);
};

const user1 = new Person("Priyanshu", 19);
user1.sayHi();

New style (Class-based):
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

sayHi() {
console.log(`Hello, my name is ${this.name}`);
}
}

const user2 = new Person("Priyanshu", 19);
user2.sayHi();
Par andar se JavaScript pehle wala hi logic (prototype chain) use karti hai.

# chatgpt se padh lena :

oops
parts of oops: object literal
constructor func.
protoype
classes
Instances(new,this)
bind
