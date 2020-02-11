import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movie from './Movie';


const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=a941b96952ba6330c47874e72e8bc4b0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
        const { results } = await res.json();
        setMovies(results);
      } catch (e) {
        console.log(e);
      }
    }
    getMovies();
  });

  return (
    <MovieGrid>
      {movies.map((movie) => <Movie movie={movie} key={movie.id} />)}
    </MovieGrid>
  );
};


export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
