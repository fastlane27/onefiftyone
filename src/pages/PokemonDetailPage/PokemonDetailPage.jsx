import React, { useState, useEffect } from 'react';
import Comments from '../../components/Comments/Comments';
import CommentForm from '../../components/CommentForm/CommentForm';
import pokeAPI from '../../services/pokeAPI';
import commentAPI from '../../services/commentAPI';

function PokemonDetailPage(props) {
  const [pokemon, setPokemon] = useState({});
  const [comments, setComments] = useState([]);
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
    const fetchComments = async () => {
      try {
        const results = await commentAPI.get(pokemonId);
        setComments(results);
      } catch(err) {
        console.log(err);
      }
    }
    fetchPokemon();
    fetchComments();
  }, [pokemonId]);

  const handleAddComment = async (commentData) => {
    const newComment = await commentAPI.create(commentData);
    setComments([...comments, newComment]);
  }

  const handleDeleteComment = async (commentId) => {
    await commentAPI.deleteOne(commentId);
    setComments(comments.filter(comment => comment._id !== commentId));
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
          handleAddComment={handleAddComment}
        />
      }
      <Comments
        comments={comments}
        handleDeleteComment={handleDeleteComment}
      />
    </div>
  );
}

export default PokemonDetailPage;
