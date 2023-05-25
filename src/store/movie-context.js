import React from 'react';

const MovieContext = React.createContext({
    items: [],
    filteredItems: [],
    isFiltered: false,
    addItems: (itemsToAdd) => {},
    removeSearch: () => {},
    searchItems: (itemToSeatch) => {} 
})

export default MovieContext;