import { ADD_MOVIES, SET_FILTER, SEARCH_MOVIE } from '../actions/index.js';
import { movieListAsMap, getAllIds, getMostValuedIds, getLeastValuedIds } from '../normalize.js';

function filterByTitle(title, movieList) {
  const list = [];
  movieList.forEach((movie) => {
    if(movie.title.toLowerCase().includes(title.toLowerCase())){
      list.push(movie.id);
    }
   });
   return list;
}

function findById(query, allIds) {
  const parseId = parseInt(query, 10);
  
  if(allIds.includes(parseId)){
    return [parseId];
  }

  return allIds;
}


function searchMovie(query, movieList, allIds) {
  if (isNaN(query)) {
    return filterByTitle(query, movieList);
  }

  return findById(query, allIds);
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_MOVIES: {
      const movieList = movieListAsMap(payload, state.movieList);
      const list = {
        ...state.list,
        all: getAllIds(payload, state.list.all),
        mostValued: getMostValuedIds(payload, state.list.mostValued),
        leastValued: getLeastValuedIds(payload, state.list.leastValued),
      };
      return {...state, movieList, list};
    }

    case SET_FILTER:
      return {...state, filter: payload};

    case SEARCH_MOVIE: {
      
      return {
        ...state,
        filter: 'search',
        list: {
          ...state.list,
          search: searchMovie(payload, state.movieList, state.list.all)
        }
      };
    }

    default:
      state;
      break;
  }
  return state;
};

export default reducer;