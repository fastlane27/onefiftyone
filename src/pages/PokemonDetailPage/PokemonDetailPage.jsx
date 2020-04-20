import React, { useState, useEffect } from 'react';
import styles from './PokemonDetailPage.module.css';
import Pokemon from '../../components/Pokemon/Pokemon';
import Comment from '../../components/Comment/Comment';
import CommentForm from '../../components/CommentForm/CommentForm';
import pokeAPI from '../../services/pokeAPI';
import commentAPI from '../../services/commentAPI';

function PokemonDetailPage(props) {
  const [pokemon, setPokemon] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const result = await pokeAPI.getOne(props.pokemonId);
      setPokemon(result);
    }
    const fetchComments = async () => {
      const results = await commentAPI.get(props.pokemonId);
      setComments(results);
    }
    fetchPokemon();
    fetchComments();
  }, [props.pokemonId]);

  const handleAddComment = async (commentData) => {
    commentData.pokemonId = props.pokemonId;
    const newComment = await commentAPI.create(commentData);
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
    <>
      <Pokemon 
        pokemon={pokemon}
      />
      {props.currentUser &&
        <CommentForm
          handleAddComment={handleAddComment}
        />
      }
      {comments.map(comment =>
        <Comment
          comment={comment}
          currentUser={props.currentUser}
          handleEditComment={handleEditComment}
          handleDeleteComment={handleDeleteComment}
          key={comment._id}
        />
      )}
      <div className={styles.spacing}></div>
    </>
  );
}

export default PokemonDetailPage;
