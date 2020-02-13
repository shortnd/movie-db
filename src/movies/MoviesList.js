import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { getMovies } from './actions';
import Movie from './Movie';


const MoviesList = ({
 movies, isLoaded, getMovies, moviesLoadedAt,
}) => {
  useEffect(() => {
    const oneHour = 60 * 60 * 1000;
    if (!isLoaded || ((new Date() - new Date(moviesLoadedAt)) > oneHour)) {
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
  moviesLoadedAt: state.movies.moviesLoadedAt,
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
