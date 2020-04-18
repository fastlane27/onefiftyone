import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav>
      <NavLink exact to="/">Pokemon</NavLink>&nbsp;&nbsp;
      <NavLink exact to="/forum">Forum</NavLink>&nbsp;&nbsp;
      {props.currentUser ?
        <NavLink exact to="">{props.currentUser.name}</NavLink>
      :
        <>
          <NavLink exact to="/signup">Sign Up</NavLink>&nbsp;&nbsp;
          <NavLink exact to="/login">Log In</NavLink>
        </>
      }
      &nbsp;&nbsp;<NavLink to="" onClick={props.handleLogout}>Log Out</NavLink>
    </nav>
  );
}

export default NavBar;
