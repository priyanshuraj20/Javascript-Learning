//Events in Javascript:

// document.getElementById("owl").onclick = function () {
//   alert("owl clicked");
// };
//not good : best hain event listner

// type, timestamp, defaultPrevented: default behaviour ko rokhna
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     console.log("clicked inside the ul");
//   },
//   false
// );

// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("owl clicked");
//     e.stopPropagation(); //do not want bubbling{bubbling stop}
//   },
//   false
// );

// document.getElementById("google").addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked");
//   },
//   false
// );

//click image and than image remove hojaye :

document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
});
// li ka parent ul toh pura gayab tagname se tag name jane aur tagname img hoga tab remove karenge
//removeIt.parentNode.removeChild(removeIt)
