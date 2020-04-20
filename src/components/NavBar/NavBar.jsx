import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

function NavBar(props) {
  return (
    <nav className={styles.navbar}>
      <h1>OneFiftyOne</h1>
      <div>
        <NavLink className={styles.link} exact to="/">POKÉMON</NavLink>
        {props.currentUser ?
          <>
            <span className={styles.link}>
              {props.currentUser.name.toUpperCase()}
            </span>
            <NavLink
              className={styles.link}
              exact to="/"
              onClick={props.handleLogout}
            >
              LOG OUT
            </NavLink>
          </>
        :
          <>
            <NavLink className={styles.link} exact to="/signup">SIGN UP</NavLink>
            <NavLink className={styles.link} exact to="/login">LOG IN</NavLink>
          </>
        }
      </div>
    </nav>
  );
}

export default NavBar;
