import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154/';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280/';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovie() {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a941b96952ba6330c47874e72e8bc4b0&language=en-US`);
        const resMovie = await res.json();
        setMovie(resMovie);
      } catch (e) {
        console.log(e);
      }
    }
    getMovie();
  }, [id]);

  return (
    <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
      <MovieInfo>
        <Overdrive id={String(movie.id)}>
          <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        </Overdrive>
        <div>
          <h1>{movie.title}</h1>
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  );
};

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
