import { Component, createElement } from '../lib/react/index.js';

class Movie extends Component {
  render() {
    const { poster_path, title, movieId, rate } = this.props;

    return createElement(
      'article',
      { class: `movie ${rate >= 7 ? 'recommended' : ''}`},
      createElement('img', { class: 'movie-poster', src: `//image.tmdb.org/t/p/w220_and_h330_face${poster_path}` }),
      createElement('p', { class: 'movie-title'}, title),
      createElement('p', { class: 'movie-id'}, movieId),
      createElement('span', { class: 'movie-rate' }, rate),
    );
  }
}

export default Movie;
