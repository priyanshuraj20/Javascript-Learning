function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
}
addLanguage("JAVA");
addLanguage("TYPESCRIPT");
addLanguage("PYTHON");
//jitni baar yeh method chal raha utni baar pura traverse ho raha , so optimization ke liye thik baat nahi hain:
//ISME PURA KA PURA TREE TRAVERSE NAHI KARNA PAD RAHA
function addOptiLanguage(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}
addOptiLanguage("cpp");

//value EDIT:
const selectLang = document.querySelector("li:nth-child(2)");
selectLang.innerHTML = "Mojo";
//optimse way:
const newLi = document.createElement("li");
newLi.textContent = "Mojoilo";
selectLang.replaceWith(newLi);

//using outerHTML
// const firstLi = document.querySelector("li:first-child");
// firstLi.outerHTML = "<li>React-NAtive<li>";

//remove::
const lastLang = document.querySelector("li:last-child");
lastLang.remove();
