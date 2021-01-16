import rawMovieList from './movies.js';

const movieList = rawMovieList.reduce((list, movie) => list.set(movie.id, movie), new Map);

const all = rawMovieList.map(movie => movie.id);

const popular = rawMovieList.reduce((list, movie) => {
  if (movie.vote_average > 7) {
    list.push(movie.id);
  }
  return list;
}, []);


const unpopular = rawMovieList.reduce((list, movie) => {
  if (movie.vote_average <= 7) {
    list.push(movie.id);
  }
  return list;
}, []);

export {
  movieList,
  all,
  popular,
  unpopular,
};