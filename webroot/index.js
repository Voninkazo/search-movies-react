import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './components/SearchMovies';


class Main extends React.Component {
  render() {
    return (
    <div className="container">
        <h1 className="title">Movies search</h1>
        <SearchMovies/>
    </div>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));