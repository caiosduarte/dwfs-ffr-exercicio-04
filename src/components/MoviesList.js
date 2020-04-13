import React from "react";
import {useState, useEffect} from "react";
import { MoviesService } from "../services/MoviesService";
import { MovieItem } from "./MovieItem";


export const MoviesList = () => {
  const [movies, setMovies] = useState({data: {results: [] }});

  // resolve o problema das promises do javascript
  const requestMovies = async () => {
    const moviesResults = await MoviesService.getPopularMovies();
    setMovies(moviesResults);  
  };

  useEffect(() => {
    requestMovies();
  }, []);
  
  return (
    <>
    <ul>
      {movies.data.results.map(movie => (
        <MovieItem key={movie.id} id={movie.id} title={movie.title} popularity={movie.popularity}/>
      ))}
     </ul> 
    </>
  );
};
