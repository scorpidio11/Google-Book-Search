import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './Nav.css';

class Nav extends Component {

  constructor(props) {
      super(props);

  } // End Constructor


  render(){

    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#" className="brand-logo center customNav"><i className="fas fa-book "></i>Google Book Search</a></li>
              <li><a onClick={()=>window.location.replace("/")} style={{"textDecoration": "none"}}>Home</a></li>
              <li><NavLink to="/saved" style={{"textDecoration": "none"}}>Saved</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
  )} // End of Render
} // End of Class


export default Nav;
