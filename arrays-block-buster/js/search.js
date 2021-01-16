import movies from './movies.js';
import render from './render.js';

window['search-form'].addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const query = formData.get('title');

  const moviesFiltered = searchMovie(query);
  render(moviesFiltered ? moviesFiltered : movies);
});

function filterByTitle(title) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(title.toLowerCase())
  });
}

function findById(query) {
  const movieSearched = movies.find(movie => movie.id === parseInt(query, 10));
  return movieSearched ? [movieSearched] : null;
}


function searchMovie(query) {
  if (isNaN(query)) {
    return filterByTitle(query);
  }

  return findById(query);
}

