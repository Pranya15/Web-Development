// localStorage.setItem("user","rahul")
// let data= localStorage.getItem("user")
// // localStorage.removeItem("user")
// // console.log(data);



let h2= document.querySelector("h2")
let h1= document.querySelector("h1")
let btn= document.querySelector("button")
console.log(btn,"btnn");
btn.addEventListener("click",(e)=>{
   console.log("hjeheheh");
   
         localStorage.removeItem("data")
})





     let data=   JSON.parse(localStorage.getItem("data"))
     console.log(data,"data");
     
     if(data){
      h2.innerText=data.name
      h1.innerText=data.email

     }


     let form= document.querySelector("#formData")
 
    
//  console.log(form);
form.addEventListener("submit",(e)=>{
   e.preventDefault()

    console.log();
    console.log(form[1].value);
    console.log(form[2].value);

    let userData={
      name:form[0].value,
      email:form[1].value,
      pass:form[2].value
    }
      
   //  console.log(userData);
   localStorage.setItem('data',JSON.stringify(userData))
    

        
   // console.log("helloo");
   
})



 







//  let loginF= document.querySelector("#loginData")
//  loginF.addEventListener("submit",(e)=>{
//    e.preventDefault()
//   let lognSaveData=     JSON.parse(localStorage.getItem("data"))
//   console.log(lognSaveData);
//   let loginInputD={
//    email:loginF[0].value,
//    pass:loginF[1].value,

//   }
//   if(loginInputD.email===lognSaveData.email && loginInputD.pass===lognSaveData.pass){
//    alert("login donee")
//   }else{
//    alert("errrrrr")
//   }
  

//  })