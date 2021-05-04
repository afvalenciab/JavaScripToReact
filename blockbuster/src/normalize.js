
const movieListAsMap = (movieList, oldList = new Map()) => movieList.reduce((list, movie) => list.set(movie.id, movie), oldList);

const getAllIds = (list, oldList = []) => oldList.concat(list.map(movie => movie.id)) ;

const getMostValuedIds = (list, oldList = []) => list.reduce((list, movie) => {
  if (movie.vote_average >= 7) {
    list.push(movie.id);
  }
  return list;
}, oldList);

const getLeastValuedIds = (list, oldList = []) => list.reduce((list, movie) => {
  if (movie.vote_average < 7) {
    list.push(movie.id);
  }
  return list;
}, oldList);

export {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValuedIds,
};