import React, { useState, useEffect } from 'react';
import Comment from '../../components/Comment/Comment';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentEdit from '../../components/CommentEdit/CommentEdit';
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
    commentData.pokemonId = pokemonId;
    const newComment = await commentAPI.create(commentData, pokemonId);
    if (!newComment.err) setComments([...comments, newComment]);
  }

  const handleDeleteComment = async (commentId) => {
    const deletedComment = await commentAPI.deleteOne(commentId);
    if (!deletedComment.err) setComments(comments.filter(comment =>
      comment._id !== commentId));
  }

  const handleEditComment = async (commentData) => {
    const editedComment = await commentAPI.update(commentData);
    if (!editedComment.err) setComments(comments.map(comment =>
      comment._id === editedComment._id ? editedComment : comment));
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
          handleAddComment={handleAddComment}
        />
      }
      {comments.map(comment =>
        <div key={comment._id}>
          <Comment
            comment={comment}
          />
          <CommentEdit 
            comment={comment}
            handleEditComment={handleEditComment}
            handleDeleteComment={handleDeleteComment}
          />
        </div>
      )}
    </div>
  );
}

export default PokemonDetailPage;
