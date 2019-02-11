import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList'
import SearchBar from './components/SearchBar/SearchBar'
import Business from './components/Business/Business'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>desirous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;