// console.log(a);
// import   {a,sum} from './new.js'
// console.log(a);
// sum(5,6)
//pure function
// function sum(num){
//     return num*2
// }
// console.log(sum(5));
// console.log(sum(5));

// let count=0
// function outer(){
//     count++
//     return count
// }
// console.log(outer());
// console.log(outer());



// function sum(a){
//     return function(b){
//         return a+b

//     }
// }

// console.log(sum(5)(6));
// function sum(a){
//     return function(b){
//         if(b){
//             return sum(a+b)
//         }
//         return a
//     }
// }
// console.log(sum(5)(6)(7)(8)(1)(2)(4)(6)(3)());

// console.log("hello");
// let arr=[1,2,3,4,5]
// let nums=[ ...arr,6,7,8]
// let ans=nums.concat(arr)
// console.log(nums);
// let obj={
//     id:1,
//     name:"om"
// }
// let data={
//     ...obj,
//     age:101
// }



// function sum(a,b,c,...nums){
//     console.log();
    
// }
// sum(1,2,3,34,4,5,6,7,8,8,9,8)
// if(false){
//    let a=5
//    console.log(a);
   
// }
// console.log(a);

// console.log("a");

// new Promise(()=>{
//     console.log("C");
    
// })
// console.log("B");

// let arr=[1,2,3,4,5]
// let [c,b,a]=arr
// console.log();
// // let a=arr[1]
// let obj={
//     id:1,
//     name:"om"

// } 
// let {id,name}=obj
// console.log(id);

// // let name=obj.name


//   let h1=  document.querySelector("h1")
//   h1.innerText="byeeeee"
// $("h1").css("color","red")
// $("#fadeIn").click(()=>{
//     $("div").fadeOut()
// })
// $("#fadeOut").click(()=>{
//     $("div").fadeIn()
// })
// let obj={
//     id:1,
//     firstName:"om",
//     lastName:"tiwariii",
//     fullName:function(){
//         console.log(this.firstName+this.lastName);
        
//     }
// }
// let user={
//     id:1,
//     firstName:"cockroch",
//     lastName:"janta party"
// }
// obj.fullName.call(user)



// let obj1 = {
//     name: "om"
// }

// let obj2 = obj1;

// obj2.name = "rohit";

// console.log(obj1.name); // rohit
// console.log(obj2.name); // rohit
// let user1 = {
//     name: "om",
//     age: 22
// }

// let user2 = { ...user1 };

// user2.name = "rohit";

// console.log(user1.name); // om
// console.log(user2.name); // rohit
















