import React, { useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import PokemonListPage from '../PokemonListPage/PokemonListPage';
import ForumPage from '../ForumPage/ForumPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../services/userService';

function App() {
  const [state, setState] = useState({
    user: userService.getUser()
  });

  const handleLogout = () => {
    userService.logout();
    setState({user: null});
  }

  const handleSignupOrLogin = () => {
    setState({user: userService.getUser()});
  }

  return (
    <div>
      <header>
        <nav>
          <NavLink exact to="/">Pokemon</NavLink>
          <NavLink exact to="/forum">Forum</NavLink>
          <NavLink exact to="/signup">Sign Up</NavLink>
          <NavLink exact to="/login">Log In</NavLink>
          <NavLink to="" onClick={handleLogout}>Log Out</NavLink>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" render={() => 
            <PokemonListPage
              user={state.user}
            />
          } />
          <Route exact path="/forum" render={() => 
            <ForumPage />
          } />
          <Route exact path="/signup" render={({history}) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          } />
          <Route exact path="/login" render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          } />
        </Switch>
      </main>
    </div>
  );
}

export default App;
