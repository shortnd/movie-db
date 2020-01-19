import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

const movies = [{
    id: 1,
    title: 'Star Wars',
    desc: 'A space movie'
  }, {
    id: 2,
    title: 'Spider Man'
  }, {
    id: 3,
    title: '36th Chamber of Shaolin'
  }
];

class App extends Component {

  async componentDidMount() {
    try {
      const res = await fetch()
    } catch (e) {
      //
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        {movies.map(movie => <Movie movie={movie} desc={movie.desc} key={movie.id} /> )}
      </div>
    )
  }
}

export default App;
