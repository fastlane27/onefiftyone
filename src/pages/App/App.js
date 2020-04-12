import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import PokemonListPage from '../PokemonListPage/PokemonListPage';
import PokemonDetailPage from '../PokemonDetailPage/PokemonDetailPage';
import ForumPage from '../ForumPage/ForumPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../services/userService';
import { getAllPokemon } from '../../services/pokeapiService';

function App() {
  const [user, setUser] = useState(userService.getUser());
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const { results } = await getAllPokemon();
        setPokemon(results);
      } catch(err) {
        console.log(err);
      }
    }
    fetchPokemon();
  }, []);

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  }

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
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
        {user ?
        <p>Logged in as {user.name}</p>
        :
        <p>Not logged in.</p>
        }
      </header>
      <main>
        <Switch>
          <Route exact path="/" render={() => 
            <PokemonListPage
              pokemon={pokemon}
            />
          } />
          <Route path="/pokemon/:id" render={({match}) => 
            <PokemonDetailPage
              match={match}
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
