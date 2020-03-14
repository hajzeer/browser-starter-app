import React, {Component} from 'react';
import './App.css';
import Weather from './Weather';
import SearchBar from './search-bar'

class  App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <Weather/>
      </div>
    );
  }
}

export default App;
