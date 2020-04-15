import React, { useState, useEffect } from 'react';
import Comments from '../../components/Comments/Comments';
import CommentForm from '../../components/CommentForm/CommentForm';
import pokeAPI from '../../services/pokeAPI';
import commentAPI from '../../services/commentAPI';

function PokemonDetailPage(props) {
  const [pokemon, setPokemon] = useState({});
  const [comments, setComments] = useState({
    comments: [],
    isChanged: false
  });
  const pokemonId = props.match.params.id;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const result = await pokeAPI.getOne(pokemonId);
        setPokemon(result);
      } catch(err) {
        console.log(err);
      }
    }
    fetchPokemon();
  }, [pokemonId]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const results = await commentAPI.get(pokemonId);
        setComments({
          ...comments,
          comments: results,
        });
      } catch(err) {
        console.log(err);
      }
    }
    fetchComments();
  }, [pokemonId, comments.isChanged]);

  const handleCommentChange = () => {
    setComments({
      ...comments,
      isChanged: !comments.isChanged
    });
  }

  const toggleEditView = () => {

  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img
        src={`${pokeAPI.IMAGE_URL}${pokemonId}.png`}
        alt={pokemon.name}
      />
      {props.currentUser &&
        <CommentForm
          pokemonId={pokemonId}
          currentUser={props.currentUser}
          handleCommentChange={handleCommentChange}
        />
      }
      <Comments
        comments={comments.comments}
        handleCommentChange={handleCommentChange}
      />
    </div>
  );
}

export default PokemonDetailPage;
