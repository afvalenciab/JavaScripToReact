
const movieListAsMap = (movieList) => movieList.reduce((list, movie) => list.set(movie.id, movie), new Map);

const getAllIds = (list) => list.map(movie => movie.id);

const getMostValuedIds = (list) => list.reduce((list, movie) => {
  if (movie.vote_average > 7) {
    list.push(movie.id);
  }
  return list;
}, []);

const getLeastValuedIds = (list) => list.reduce((list, movie) => {
  if (movie.vote_average <= 7) {
    list.push(movie.id);
  }
  return list;
}, []);

export {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValuedIds,
};