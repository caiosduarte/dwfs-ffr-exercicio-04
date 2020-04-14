import React from "react";
import {useState, useEffect} from "react";
import { MoviesService } from "../services/MoviesService";
import { MovieItem } from "./MovieItem";

// Obtém o estado do STORE
import { useSelector } from "react-redux";

export const MoviesList = () => {
  const [movies, setMovies] = useState({data: {results: [] }});
  const favorites = useSelector(state => state.items);  

  // resolve o problema das promises do javascript
  const requestMovies = async () => {
    const moviesResults = await MoviesService.getPopularMovies();
    setMovies(moviesResults);  
  };

  useEffect(() => {
    requestMovies();    
  }, []);
  
  const isFavorite = movie => {
    return favorites.indexOf(movie) > -1;
  }

  return (
    <>
    <ul>
      {movies.data.results.map(movie => (
        <MovieItem key={movie.id} id={movie.id} title={movie.title} favorite={isFavorite(movie)}/>
      ))}
     </ul> 
    </>
  );
};
