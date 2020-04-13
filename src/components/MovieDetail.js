import React from "react";
import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { MoviesService } from '../services/MoviesService';

export const MovieDetail = (props) => {
    const [movie, setMovie] = useState({data: {}});

    // resolve o problema das promises do javascript
    const requestMovie = async () => {   
      // parâmetro que vem da Rota
      const id = props.match.params.id;
      const movieResult = await MoviesService.getMovieById(id);
      setMovie(movieResult);
    };
  
    // tem que passar os 02 parâmetros para useEffect por conta de loop
    useEffect(() => {
      requestMovie();
    }, []);

    return (
        <>
            <h2>{movie.data.title}</h2>
            <dl>
              <dt>Original Title</dt>
              <dd>
                {movie.data.original_title}
              </dd>
              <dt>Release Date</dt>
              <dd>
                {movie.data.release_date}
              </dd>
              <dt>Status</dt>
              <dd>
                {movie.data.status}
              </dd>              
              <dt>Overview</dt>
              <dd>
                {movie.data.overview}
              </dd>
            </dl>
            
            <Link to="/">Back</Link>
        </>        
    );
};
    
