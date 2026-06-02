//import React from 'react'
// import Home from './Home'
// import './App.css';
//import Home, { New } from "./Home"


// const App = () => {
//     let [count,SetCount]=   useState(0)
// function fun1(){
//     SetCount(++count)
// }
// function fun2(){
//     SetCount(--count)
// }
//   return (
//     <div>
//         <h2>{count}</h2>
//         <button onClick={fun1}>addd</button>
//         <button onClick={fun2}>subtract</button>

//     </div>
//   )
// }

// export default App/




// const App = () => {
//   return (
//     <div>
//         <Home/>
//         <New/>
//     </div>
//   )
// }

// export default App

//import React from 'react'

// const App = () => {
//     let user = "Pcc"
//   return (
//     <div><Home data={user}/></div>
//   )
// }

// export default App 



// import React, { useState } from 'react';
// import Form from './Form.jsx';
// const App = () => {
  // const [input, setInput] = useState('');
  // const [displayText, setDisplayText] = useState('');

  // function handleChange(e) {
  //   setInput(e.target.value);
  // }

  // function handleClick() {
  //   setDisplayText(input);
  // }

//   return (
//     <div>
//       <Form/>
//       </div>
//       );
// };

// export default App;


//import React from 'react'
// //import useState from 'react'
// import { useState,useEffect } from 'react'

// const App = () => {
//   let [count,SetCount]=   useState(0)
//   let [city,SetCity]=   useState("Pune")
//   useEffect(()=>{
//     console.log("hello");
//   },[city])
//   return (
//     <div>
//         <h2>{count}</h2>
//         <h4>{city}</h4>
//         <button onClick={()=>SetCity("manali")}>change</button>
//         <button onClick={()=>SetCount(++count)}>click</button>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   // let [count,SetCount]=   useState(0)
//   // let [city,SetCity]=   useState("Pune")
//   let [ApiData, setApiData] = useState([])
//   useEffect(()=>{
//     async function fun1(){
//       let res = await fetch("https://jsonplaceholder.typicode.com/users")
//       let data = await res.json()
//       //console.log(data);
//       setApiData(data)
//     }
//     fun1()
//   },[])
//   return (
//     <div>
//         {/* <h2>{count}</h2>
//         <h4>{city}</h4>
//         <button onClick={()=>SetCity("manali")}>change</button>
//         <button onClick={()=>SetCount(++count)}>click</button> */}
//         {
//         ApiData.map((a)=>{
//           return <div >
//             <h1>{a.id}</h1>
//             <h4>{a.name}</h4>
//           </div>
//         })
//       }

//     </div>
//   )
// }

// export default App

// import { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {

//   const [products, setProducts] = useState([]);

//   useEffect(() => {

//     async function call() {

//       let res = await fetch(
//         "https://dummyjson.com/products"
//       );

//       let data = await res.json();

//       setProducts(data.products);
//     }

//     call();

//   }, []);

//   return (
//     <div className="container">

//       <div className="card-container">

//         {
//           products.map((item) => (

//             <div className="card" key={item.id}>

//               <img
//                 src={item.thumbnail}
//                 alt=""
//               />

//               <h3>{item.title}</h3>

//               <p>₹ {item.price}</p>


//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
// };

// export default App;



import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Task from './Task.jsx'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/task' element={<Task/>}/>
    </Routes>
    </div>
  )
}

export default App