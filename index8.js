
// let obj={
//     id:1,
//     firstName:"om",
//     lastName:"tiwariiiii",
//     fullName:function(city,age){
//   console.log(this.firstName+ this.lastName+city+age);   
//     }
// }
// obj.fullName()
// let userOne={
//     id:10,
//     firstName:"chockroch",
//     lastName:"janta party",  
// }
// obj.fullName.call(userOne,"delhi")
// obj.fullName.apply(userOne,["delhi",51])
// const questions = [
//     {
//       question: "HTML ka full form kya hai?",
//       options: [  
//         "Hyper Text Markup Language",
//         "High Text Machine Language",
//         "Hyper Tabular Markup Language",
//         "Home Tool Markup Language"
//       ],
//       answer: 0   
//     },
//     {
//       question: "CSS me color change karne ke liye kaunsi property use hoti hai?",
//       options: ["font-color", "text-color", "color", "background"],
//       answer: 2
//     },
//     {
//       question: "JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?",
//       options: ["var", "int", "string", "declare"],
//       answer: 0
//     },
//     {
//       question: "Kaunsa HTML tag sabse bada heading banata hai?",
//       options: ["<h6>", "<heading>", "<h1>", "<head>"],
//       answer: 2
//     },
//     {
//       question: "JavaScript me array ki length kaise pata karte hain?",
//       options: ["array.size()", "array.length", "array.count", "length(array)"],
//       answer: 1
//     } 

// import { prototype } from "../lect12/jquery";

    
//   ];

//   let currentquestion = questions[0]
//   console.log(currentquestion.options[0]);
  

// for(let a in questions)
// {
//     console.log(questions[a].options[1])
// }

// let a=10
// let b=a
// b=30
// console.log(b);

// let obj={
//     id:1,
//     name:"om",
//     city:{
//         name:"delhi"
//     }
// }
// let user={...obj}
// user.city.name="goa"
// console.log(obj.city.name);
// console.log(user.city.name);
// let user1={
//     name:"om",
//     age:22,
//     address:{
//         city:"delhi"
//     }
// }
// let user2=structuredClone(user1)
// user2.address.city="bhopal"
// console.log(user1.address.city);
// console.log(user2.address.city);

// let arr=[1,2,3,4]
// // arr.mapppp
// console.log(Array.prototype);
let str="js  js   js"
let ans= str.split("").reverse().join("")
console.log(ans);
console.log(str.replaceAll("js","jsx"));
console.log(str.charAt(0));
// console.log(str.length);
// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.trim());
// console.log(str.includes("s"));
// console.log(str.indexOf("j"));
// console.log(str.substring(0,4),"substring");
// console.log(str.substr(0,4),"substr");
// console.log(str.split(""));



































