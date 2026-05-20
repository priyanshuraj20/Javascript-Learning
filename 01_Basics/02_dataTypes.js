//DataTypes: 1} primitive 2}Non primitive(refrence)

//primitive: aisi saari values jinko copy karne par tumhe ek real copy mil jayega

//  string,number, boolean, null, undefined, symbol, bigint
//reference: inko copy karne par real copy nahi milegi but aapko refrence milege parent ka:
// arrays, objects, functions

let a  = 12; 

let b =a;
//b ko change karne se a nahi change hoga and vice versa 

//null: ka matlab hain apne jaan boojh kar koi value nahi dhi, jaise abhi koi value abhi pata nahi null deh diya baad mein jake update kardenge.

//undefined:ka mtlb hain ki aapne ek varibale banaya aur usey value nahi dhi to jo value by default mili wo hain undefined.  let a;
//undefined milti hum apne nahi dte.

//symbol: unique immutable value 
let u1 = Symbol("uid");
let u2 = Symbol("uid");

u1 == u2 (false) //unique hain 

//bigInt:
let c = 9007199254740991n;
c + 12n


//Dynamic typing : js mein stratic typing nahi hain and yaha poar hain dynamic typing jsika mtlb hain app data ko change ker skte ho kyunki yaha par dynamic data types hain.

//type of quirks:
typeof(c); //big int 
typeof(NaN) === 'number' //true  //Number
//nan: failed number operation hain "harsh" * 5 failed but ek tarah ka numerical op. tah isliye number
typeof(null) //object

//Type coercion:(== vs ===)->concpt jisme ek type automatically convert hojayega:
x = '5' + 1 //= '51'; concatenate
y = '5' - 1 //= 4

//Truthy vs false: har val ko true and false mein todh rakha: // 0, false,"", null , undeined, Nan , document.all  ->false
!!0 // !! used to know truty or falsey nature

//instanceof: works with refence value,   bascially yeh bata akya yeh varibale iska instance (isse janam liya)
let k = []
k instanceof Array  //true

let g = {}
g instanceof Object  //true



