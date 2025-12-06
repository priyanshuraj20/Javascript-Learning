console.log(window);
console.log(document);
document, (getElementByid("heading").innerHTML = <h1>"CHAi aur code"</h1>);

// window object ->document->html->1}head 2} body ...
//html collection hota array nahi so we cant use filter, map

const id = document.getElementById("title");
console.log(id);
console.log(id.className);
console.log(id.getAttribute("class"));
// id.setAttribute(("id", "test heading"));
id.style.backgroundColor = "red";
id.style.padding = "15px";
id.style.borderRadius = "21px";

console.log(id.innerHTML); //allwithinside tags
console.log(id.innerText); //jo dikh raha whi
console.log(id.textContent); //saara hidden

document.getElementsByClassName("heading");

//we will use:
//by tag
let h2 = document.querySelector("h2");
console.log(h2);

//by id
let idd = document.querySelector("#testing");
console.log(idd);

//ny class
const classs = document.querySelector(".forTest");
console.log(classs);

const h11 = document.querySelectorAll("h2");
console.log(h11);

// document.querSelectoer('input[type="password"]');

const myUl = document.querySelector("ul");
const list = myUl.querySelector("li");
list.style.backgroundColor = "green";

console.log((list.innerText = "1"));

const lii = document.querySelector("ul").querySelectorAll("li");
console.log(lii);
//nodelist hain not array
// lii.style.color = "red";//yeh kam nahi hoga
//batna hoga konsa wala direct array jaisa nahi kar skte becoz its not array
lii[1].style.color = "red";
//forEach rahta in nodelist :

lii.forEach((item) => {
  item.style.color = "pink";
  item.style.fontSize = "20px";
});

//html collection mein foreach nahi hota no option for looping:
const uLCLASS = document.getElementsByClassName("list-item");
console.log(uLCLASS);

//so we have convert to array:
const arrUl = Array.from(uLCLASS);

arrUl.forEach((item) => {
  item.style.backgroundColor = "blue";
});
