import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

class App extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=a941b96952ba6330c47874e72e8bc4b0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map((movie) => <Movie movie={movie} desc={movie.desc} key={movie.id} />)}
      </div>
    );
  }
}

export default App;
