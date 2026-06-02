//import React from 'react'
import {Link} from 'react-router-dom'
import "./App.css"
const NavBar = () => {
  return (
    <div>
        <div id="nav">
          <Link to={'/'}>   
            <li>Home</li>
            </Link>
            <Link to={'/about'}> 
            <li>About</li>
            </Link>
            <li>Task</li>
        </div>
    </div>
  )
}

export default NavBar