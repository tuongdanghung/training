const demo = document.getElementById("main")
console.log("getElementById", demo);
const demoClass = document.getElementsByClassName("container")
console.log("getElementByClassName", demoClass);
// let html = document.getElementById("main").innerHTML = 'inner html'
let tagName = demo.getElementsByTagName('h1')
console.log(tagName.length);
let submit = document.getElementById("submit")
submit.onclick = () => {alert("submit", submit)}