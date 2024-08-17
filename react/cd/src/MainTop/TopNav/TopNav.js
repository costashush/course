import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './TopNav.css';
const BasicExample = () => (
    <div className='topNav'>
      <ul>
        <li><Link to="/">Become a Host</Link></li>
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/signup">Sing UP</Link></li>
        <li><Link to="/login">Log In</Link></li>

      </ul>  
    </div>
)


export default BasicExample