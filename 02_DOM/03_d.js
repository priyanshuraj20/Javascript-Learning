let parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
console.log(parent.children[1]);
console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}
parent.children[1].style.color = "orange";

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector(".day");
console.log(dayOne);

//children->parent
console.log(dayOne.parentElement);
//sibling :bhai
console.log(dayOne.nextElementSibling);

console.log("NODES: ", parent.childNodes); //all elements aate space, br ... total

//creating element:

const div = document.createElement("div");
console.log(div);
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "generated title");
div.style.backgroundColor = "red";
// div.innerText = "HELLO LEARNING JS ";
//more preferable :
const addText = document.createTextNode("HELLO LEARNING JS");
div.appendChild(addText);

//attaching to document
document.body.appendChild(div);
