import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import PokemonListPage from '../PokemonListPage/PokemonListPage';
import ForumPage from '../ForumPage/ForumPage';

function App() {
  return (
    <div>
      <header>
        <nav>
          <NavLink exact to="/">Pokemon</NavLink>
          <NavLink exact to="/forum">Forum</NavLink>
        </nav>
      </header>
      <main>
        <Route exact path="/" render={() => 
          <PokemonListPage />
        } />
        <Route exact path="/forum" render={() => 
          <ForumPage />
        } />
      </main>
    </div>
  );
}

export default App;
