import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import PokemonListPage from '../PokemonListPage/PokemonListPage';
import PokemonDetailPage from '../PokemonDetailPage/PokemonDetailPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userAPI from '../../services/userAPI';
import pokeAPI from '../../services/pokeAPI';

function App() {
  const [currentUser, setCurrentUser] = useState(userAPI.getCurrent());
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      const { results } = await pokeAPI.getAll();
      results.forEach(result => {
        const urlArr = result.url.split('/');
        result.id = urlArr[urlArr.length - 2];
      });
      setAllPokemon(results);
    }
    fetchAllPokemon();
  }, []);

  const handleLogout = () => {
    userAPI.logout();
    setCurrentUser(null);
  }

  const handleSignupOrLogin = () => {
    setCurrentUser(userAPI.getCurrent());
  }

  return (
    <>
      <header>
        <NavBar
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
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
              pokemonId={match.params.id}
              currentUser={currentUser}
            />
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
    </>
  );
}

export default App;
