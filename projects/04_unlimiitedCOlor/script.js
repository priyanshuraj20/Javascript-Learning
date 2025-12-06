const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const body = document.querySelector("body");

// Generate random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

start.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(function () {
      body.style.backgroundColor = randomColor(); // ✅ function call
    }, 1000);
  }
});

stop.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  console.log("Stopped");
});
