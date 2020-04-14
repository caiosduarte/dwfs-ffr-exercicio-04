import React from "react";
import {useState, useEffect} from "react";
import { MoviesService } from "../services/MoviesService";
import { MovieItem } from "./MovieItem";

// Obtém o estado do STORE
import { useSelector } from "react-redux";

export const MoviesList = () => {
  const favorites = useSelector(state => state.items);
  const [movies, setMovies] = useState({data: {results: [] }});
    

  // resolve o problema das promises do javascript
  const requestMovies = async () => {
    const moviesResults = await MoviesService.getPopularMovies();
    setMovies(moviesResults);  
  };

  useEffect(() => {
    requestMovies();    
  }, []);
  
  const isFavorite = id => {
    let encontrou = false;
    favorites.map(f => {
      if (f.id == id) { 
        encontrou = true;
        break;
      }
    });
    return encontrou;
  }

  return (
    <>
    <ul>
      {movies.data.results.map(movie => (
        <MovieItem key={movie.id} id={movie.id} title={movie.title} favorite={isFavorite(movie.id)}/>
      ))}
     </ul> 
    </>
  );
};
