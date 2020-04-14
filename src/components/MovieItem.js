import React from 'react';
// componente react para rotas
import { Link } from 'react-router-dom';

// ACTIONS
import { setFavorite, unsetFavorite } from '../actions/favoriteActions';

// dispatch para comunicar a ACTION com o STORE
// useSelector para receber o valor da variável global
import { useDispatch } from 'react-redux';


export const MovieItem = (props) => {
    const dispatch = useDispatch();   

    return (
        <li>
            <Link to={`/movies/${props.id}`} params={{id: props.id}}>{props.title}</Link> | 
            {!props.favorite ? <button onClick={() => dispatch(setFavorite({id: props.id, title: props.title}))}>Favoritar</button>: <button onClick={() => dispatch(unsetFavorite({id: props.id}))}>Desfavoritar</button>}
        </li>        
    )
};