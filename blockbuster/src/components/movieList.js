import { Component, createElement } from '../lib/react/index.js';
import styled from '../lib/styled-components.js';

import Wrapper from './wrapper.js';
import Movie from './movie.js';
import store from '../store.js';
import api from '../utils/api.js';


const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`;

class MovieList extends Component {
  async componentDidMount() {
    const page10 = await api.moviePage(10);
    console.log(page10);
  }

  render() {
    const state = store.getState();
    const filter = state.filter;
    const movies = state.list[filter].map(movieId => state.movieList.get(movieId));

    return Wrapper(
      null,
      MovieListStyled(null,
        movies.map(movie => new Movie({ poster_path: movie.poster_path, title: movie.title, movieId: movie.id, rate: movie.vote_average }))
      )
    );
  }
}

export default MovieList;
