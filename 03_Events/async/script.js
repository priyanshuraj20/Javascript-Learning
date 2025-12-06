// JAvascript is syncronous and single threaded langugae    {default}

/*Execution Context: excute one line of code at a time 
    Each operation waits for the last one to complete before executing */

/*Blocking Code       vs Non blocking Code
    block the flow of program ->Read file Sync.        does not block execution -> Read file Async.       */

const sayPriyanshu = function () {
  console.log("Priyanshu");
};

const changeText = function () {
  document.querySelector("h1").innerHTML = "Best JS series";
};
setTimeout(sayPriyanshu, 2000);
//refrence dena execution () nahi

const changeME = setTimeout(changeText, 2000);

document.querySelector("#stop").addEventListener("click", function () {
  clearTimeout(changeME); // btn click se woh kam nahi hoga mtlb ki clearTimeout ka kaam hain setTimeout ko rokna .
  console.log("STOPPED");
});

//setInterval
// setInterval(function () {
//   console.log("Priyanshu", Date.now());
// }, 1000);

// const sayDate = function (str) {
//   console.log(str, Date.now());
// };

// //we can print{pass} 3rd parameter  :
// const intervalId = setInterval(sayDate, 1000, "hi");

//to stop setInterval
// clearInterval(intervalId);

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let intid; // declare it outside so it can be started/stopped multiple times

start.addEventListener("click", () => {
  // start interval only if not already running
  if (!intid) {
    intid = setInterval(() => {
      console.log("Handsome Priyanshu");
    }, 1000);
  }
});

stop.addEventListener("click", () => {
  clearInterval(intid);
  intid = null; // reset so it can be restarted
  console.log("Stopped");
});
