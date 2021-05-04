import { Component, createElement } from '../lib/react/index.js';
import styled from '../lib/styled-components.js';

import Wrapper from './wrapper.js';
import Movie from './movie.js';
import store from '../store.js';
import api from '../utils/api.js';
import { ADD_MOVIES } from '../actions/index.js';


const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`;

class MovieList extends Component {
  state = {
    page: 1,
  }

  getPage = async (page) => {
    const { results } = await api.moviePage(page);

    store.dispatch({
      type: ADD_MOVIES,
      payload: results
    });
  }

  handleIntersection= (entries) => {
    if (entries[0].isIntersecting) {
      this.getPage(this.state.page);
      this.setState({ page: this.state.page +1 });
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState();
    })

    const observer = new IntersectionObserver(this.handleIntersection);
    observer.observe(window.intersector);
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
