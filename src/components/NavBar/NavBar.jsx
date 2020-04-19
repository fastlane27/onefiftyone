import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

function NavBar(props) {
  return (
    <nav className={styles.container}>
      <NavLink exact to="/">Pokemon</NavLink>
      {props.currentUser ?
        <>
          <NavLink exact to="">{props.currentUser.name}</NavLink>
          <NavLink to="" onClick={props.handleLogout}>Log Out</NavLink>
        </>
      :
        <>
          <NavLink exact to="/signup">Sign Up</NavLink>
          <NavLink exact to="/login">Log In</NavLink>
        </>
      }
    </nav>
  );
}

export default NavBar;
