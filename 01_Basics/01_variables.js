var a =12; //window mein add hota hain
// yeh hamesa fun scoped hota hain
//aap firse declare kar skte error nmahi ayega 
var a =10; // var only respect function

const person = {name:"Priyanshu"}
person.name  ="Harsh"   //allowed
person = {}   //not allowed 
// and you want to dont change properties of object : then you can use : object.freeze() -> make objkect immutable 
object.freeze(person);

const accountId = 144553; 
let accountEmail = "priyanshu123@gmail.com";

accountCity = "Jaipur";

console.log(accountId);

console.table([accountId, accountEmail]);
/* Perfer not to use var becoz of issue in block scope */
{
    var id = 345;
}
console.log(id);//we are accesing outside the block

//Temporal Dead Zone:utna area jitne mein js ko pata hain c(varibale) exist karta hain but value nahi deh skta. 
//var mein temporal dead zone nahi hota hain
console.log(c);


let c = 12; 
//but it is possible in var

//Hoisting impact per type:
//hoisting: ek variable ko jab js mein banate woh variable doh hisse mein tooth jata hain uska declare part upar chaal jaty hain and uska intilization part neeche reh jata hain
var a =12;  // yeh define 
var a = undefined; //yeh hissa top pe chal jata 
//toh issliye agar hum console.log(pahele call krte isme toh ho jata).
a =12;

//dekho hoisting teeno mein hoti :
//let kya kehta uski val aap tab tak nahi acces kar skte jab tak intilize na hui hoo.
//let mein undefined nahi assign hota -> koi refrence rahta  and const 

//toh intilization toh baad mein na ho raha toh whi declaration se leke intilization tak temporal dead zone mein hain (a)  
