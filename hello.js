let h1 = document.getElementsByClassName("two")
console.log(h1[0].innerText);
let h3 = document.querySelector("h3")
let name = prompt("Enter your name")
h3.innerText="Name: " + name
for(let a of h1){
    a.style.color = "blue"
}
console.log(h1,"whattt");

let inp= document.querySelector("input")
let h2= document.querySelector("h2")
inp.addEventListener("input",function(e){
    //console.log(e.target.value);
    h2.innerText = e.target.value
})