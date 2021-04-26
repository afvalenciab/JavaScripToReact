import { Component, createElement } from '../lib/react/index.js';
import styled from '../lib/styled-components.js';

import Wrapper from './wrapper.js';
import Movie from './movie.js';

import movies from '../movies.js';

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`;

class MovieList extends Component {
  render() {
    return Wrapper(
      null,
      MovieListStyled(null,
        movies.map(movie => new Movie({ poster_path: movie.poster_path, title: movie.title, movieId: movie.id, rate: movie.vote_average }))
      )
    );
  }
}

export default MovieList;
