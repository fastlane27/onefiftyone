import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import PokemonListPage from '../PokemonListPage/PokemonListPage';
import PokemonDetailPage from '../PokemonDetailPage/PokemonDetailPage';
import ForumPage from '../ForumPage/ForumPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userAPI from '../../services/userAPI';
import pokeAPI from '../../services/pokeAPI';

function App() {
  const [currentUser, setCurrentUser] = useState(userAPI.getCurrent());
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const { results } = await pokeAPI.getAll();
        setAllPokemon(results);
      } catch(err) {
        console.log(err);
      }
    }
    fetchPokemon();
  }, []);

  const handleLogout = () => {
    userAPI.logout();
    setCurrentUser(null);
  }

  const handleSignupOrLogin = () => {
    setCurrentUser(userAPI.getCurrent());
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
        {currentUser ?
          <p>Logged in as {currentUser.name}</p>
        :
          <p>Not logged in.</p>
        }
      </header>
      <main>
        <Switch>
          <Route exact path="/" render={() => 
            <PokemonListPage
              allPokemon={allPokemon}
            />
          } />
          <Route path="/pokemon/:id" render={({match}) => 
            <PokemonDetailPage
              match={match}
              currentUser={currentUser}
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
