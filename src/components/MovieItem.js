import React from 'react';
import { Link } from 'react-router-dom';

export const MovieItem = (props) => {
    return (
    <li><Link to={`/movies/${props.id}`} params={{id: props.id}}>{props.title}</Link> | Popularity: {props.popularity}</li>        
    )
};