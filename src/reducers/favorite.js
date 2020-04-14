import { SET_FAVORITE, UNSET_FAVORITE } from '../actions/favoriteActions';

const initialState = {
    items: []
};

export const favorites = (state = initialState, action) => {
    switch (action.type) {
        case UNSET_FAVORITE:
            //let newItems = state.items.filter(id => id !== action.id );                 
            return {
                ...state,
                items: state.items.filter(movie => movie.id !== action.payload.id )
            };
        case SET_FAVORITE:
            let movie = action.payload;
            state.items.map(m => {console.log(`lista atual: ${m.id}`)} );
            console.log(`favoritou: ${movie.id}`);       

            return {
                ...state,
                items: [
                    ...state.items,
                    movie
                ]
            };
        default:
            return state;            
    }
};

