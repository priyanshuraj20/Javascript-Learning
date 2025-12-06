//promises bannana:
// Jab hum ek Promise banate hain, to uske constructor me ek callback function pass karte hain.

// Wo callback function ke do parameters hote hain:resolve ,reject
const promiseOne = new Promise(function (resolve, reject) {
  //Do an aync task:
  //DB calls,Network call etc
  setTimeout(function () {
    console.log("Aync task is complete");
    resolve(); //METHOD TO CONNECT PROMISE WITH .THEN {KI HNN KAAM HOGYA}
  }, 1000);
});
// Ab is promise ko handle karne ke liye hum likhte hain {promise consume}:
promiseOne.then(() => {
  console.log("Promise COnsumed");
});

//or

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Aync task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Aync 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Chai", email: "chai@example.com" }); // data aya toh resolve mein data pass krte woh .then mein jake console karwa skte , hum object ein pas kar rrahe
  }, 1000);
});

//hum yeh par accept kar skte by default ki koi data ayega :
// uss data ko user bol rahe
promiseThree.then((user) => {
  console.log(user);
});

const promiseFOur = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Priyanshu", password: "1234" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

promiseFOur
  .then((user) => {
    console.log(user);
    return user.username; //chaining return hoke niche chai mein jata value sirf username
  })
  .then((username) => {
    //chaining jo upar wale then mein return karte woh yeh par ata waise hi aage bhi bhej skte , aise hi callback hell ko manage krte
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The Promise is either resolved or rejected ")); //always execute

//PRomise Five
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "1323" });
    } else {
      reject("ERROR:JS went wrong");
    }
  }, 1000);
});
//aisa nahi nahi hain promise ko tum hamesha .then or .catch se handle karoge promise kya hain : future mein complete hone wale asynchronous kaam ko represent karta hai. toh--->
//we can handle PRomise :Using async / await
/*Yeh modern and cleaner way hai — promise ko handle karne ke liye.
await likhne se JavaScript us line pe ruk jaata hai jab tak promise resolve/reject na ho jaye.

Lekin await sirf async function ke andar hi likh sakte ho!*/

async function consumePromiseFive() {
  //for error handling we use :try...catch
  //hmra prmoise designed hain aur error askti hain toh prblm ho skti aur async , await direct problem handle nahi kar skti we use try and catch block
  try {
    let response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    // 🛰️ 1. Fetch API se data le rahe hain (yeh ek promise return karta hai)
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // 🔄 2. Response ko JSON (JavaScript Object) me convert kar rahe hain
    // ⚠️ .json() bhi ek promise return karta hai, isliye yahan bhi await lagaya
    //kbhi bhi response ata fetch se phale type janana chaiye , chalo abhi direct boldeh rahe aap json ban jao
    const data = await response.json();

    // 🧾 3. Ab 'data' ek JavaScript array hai (users ka list)
    console.log("All Users Data:", data);

    // 👇 4. Agar har user ka name print karna hai:
    data.forEach((user) => {
      console.log(`👤 Name: ${user.name}, 📧 Email: ${user.email}`);
    });
  } catch (error) {
    // ❌ 5. Agar upar kahin error aata hai (network fail, etc.)
    console.log("Error fetching users:", error);
  }
}

// 🚀 6. Function ko call kar rahe hain
getAllUsers();

//you will notice that yeh fetch wale code console mein phale print ho rahe:Microtasks (Promises, fetch) always run before normal callbacks (like setTimeout).

// ✅  same ->Promise ko handle kar rahe hain .then() aur .catch() se
function getAllUsers() {
  // 🛰️ 1. fetch() se API call kar rahe hain
  fetch("https://jsonplaceholder.typicode.com/users")
    // 🔄 2. Response milne ke baad usko JSON me convert karte hain
    .then((response) => {
      // .json() bhi ek promise return karta hai, to return karna zaroori hai
      return response.json();
    })
    // 🧾 3. Jab JSON convert ho jata hai, tab ye .then() chalega
    .then((data) => {
      console.log("All Users Data:", data);

      // 👇 Har user ka naam aur email print kar rahe hain
      data.forEach((user) => {
        console.log(`👤 Name: ${user.name}, 📧 Email: ${user.email}`);
      });
    })
    // ❌ 4. Agar kahin error aaya (network fail, etc.)
    .catch((error) => {
      console.log("Error fetching users:", error);
    });
}

// 🚀 Function call karte hain
getAllUsers();

// #fetch: kaise kaam karta:

/* the global fetch method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is availbale.
 ** fetch req. only rejects when a network eror is encountered .*/
