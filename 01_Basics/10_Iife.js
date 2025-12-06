//Immediately Invoked Function Expression (IIFE)
//:An IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after it is created.

//It’s a JavaScript design pattern used to create a private scope and avoid polluting the global namespace

(function chai() {
  //named iife
  console.log(`DB CONNECTED `);
})();

(() => {
  //unnamed iife
  console.log(`DB CONNECTED `);
})();

//passsing paramter
((name) => {
  console.log(`DB CONNECTED TWO ${name} `);
})("MONGO DB");

/*1st parenthesis :  () -> fun.defination 
2nd parenthesis : () -> execution 
      ; ->for end ,iife invoke toh hojat par isko pata nahi hota rokna kaha hain  for end use semicolon */
