import React from "react";
import {useState, useEffect} from "react";
import { MovieItem } from "./MovieItem";

// Obtém o estado do STORE
import { useSelector } from "react-redux";

export const FavoritesList = () => {
  const favorites = useSelector(state => state.items);  
 
  return (
    <>
    <ul>
      {favorites.map(movie => (
        <MovieItem key={movie.id} id={movie.id} title={movie.title} favorite={true}/>
      ))}
     </ul> 
    </>
  );
};
