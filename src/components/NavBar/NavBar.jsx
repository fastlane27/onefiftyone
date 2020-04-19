import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

function NavBar(props) {
  return (
    <nav className={styles.navbar}>
      <h1>OneFiftyOne</h1>
      <ul>
        <li>
          <NavLink className={styles.link} exact to="/">POKEMON</NavLink>
        </li>
        {props.currentUser ?
          <>
            <li>
              <NavLink
                className={styles.link}
                exact to=""
              >
                {props.currentUser.name}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.link}
                to=""
                onClick={props.handleLogout}
              >
                Log Out
              </NavLink>
            </li>
          </>
        :
          <>
            <li>
              <NavLink className={styles.link} exact to="/signup">SIGN UP</NavLink>
            </li>
            <li>
              <NavLink className={styles.link} exact to="/login">LOG IN</NavLink>
            </li>
          </>
        }
      </ul>
    </nav>
  );
}

export default NavBar;
