import React, {useReducer} from 'react';
import MovieContext from './movie-context';

const defaultMovieState = {
    items:[],
    filteredItems: [],
    isFiltered: false,
}

const movieReducer = (state, action) => {
    if (action.type === 'ADD_MOVIES') {
        const updatedState = {
            items: action.payload,
            filteredItems: [],
            isFiltered: false
        }
        return updatedState; 
    }

    if (action.type === 'SEARCH_MOVIES') {
        const filteredMovies = state.items.filter(movie => movie[action.payload.category] === action.payload.value);
        const updatedState = {
            items: state.items,
            filteredItems: filteredMovies,
            isFiltered: true
        }
        return updatedState;
    }

    if (action.type === 'REMOVE_FILTER') {
        const updatedState = {
            items: state.items,
            filteredItems: [],
            isFiltered: false
        }
        return updatedState;
    }

    return defaultMovieState
}


const MovieProvider = props => {
    const [movieState, dispatchMovieAction] = useReducer(movieReducer, defaultMovieState)

    const addItemsHandler = (itemsToAdd) => {
        dispatchMovieAction({type:'ADD_MOVIES', payload: itemsToAdd})
    }

    const removeSearchHandler = () => {
        dispatchMovieAction({type:'REMOVE_FILTER'})

    }

    const searchItemsHandler = (itemToSearch) => {
        dispatchMovieAction({type:'SEARCH_MOVIES', payload: itemToSearch})
    }

    const movieContextData = {
        items:movieState.items,
        filteredItems: movieState.filteredItems,
        isFiltered: movieState.isFiltered,
        addItems: addItemsHandler,
        searchItems: searchItemsHandler,
        removeSearch: removeSearchHandler
    }

    return(
        <MovieContext.Provider value={movieContextData}>
            {props.children}
        </MovieContext.Provider>   
    )
}

export default MovieProvider;