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
            <NavLink
              className={styles.link}
              exact to=""
            >
              {props.currentUser.name}
            </NavLink>
            <NavLink
              className={styles.link}
              to=""
              onClick={props.handleLogout}
            >
              Log Out
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
