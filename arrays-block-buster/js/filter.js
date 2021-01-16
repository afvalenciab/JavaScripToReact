import { renderMovieListFromMap } from './render.js';
import { popular as mostValued, unpopular as leastValued, all, movieList } from './normalize.js';

filter.addEventListener('change', function () {
  switch (this.value) {
    case 'most-valued':
      return renderMovieListFromMap(mostValued, movieList);

    case 'least-valued':
      return renderMovieListFromMap(leastValued, movieList);

    default:
      return renderMovieListFromMap(all, movieList);
  }
});
