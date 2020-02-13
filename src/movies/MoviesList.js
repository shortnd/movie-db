import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { getMovies } from './actions';
import Movie from './Movie';


const MoviesList = ({ movies, isLoaded, getMovies }) => {
  useEffect(() => {
    if (!isLoaded) {
      getMovies();
    }
  }, [getMovies]);

  if (!isLoaded) return <h1>Loading</h1>;

  return (
    <MovieGrid>
      {movies.map((movie) => <Movie movie={movie} key={movie.id} />)}
    </MovieGrid>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMovies,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  grid-row-gap: 1rem;
`;
