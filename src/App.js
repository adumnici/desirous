import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList'
import SearchBar from './components/SearchBar/SearchBar'
import Business from './components/Business/Business'

const business = { 
	imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
	name: 'MarginOtto Pizzeria',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zipCode: '10101',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90}

const businesses = [business, business, business, business, business, business];

class App extends Component {
	searchYelp(term, location, sortBy){
		console.log(`You are searching for ${term}, ${location} and ${sortBy}`)
	}

	render() {
    	return (
	      <div className="App">
	        <h1>desirous</h1>
	        <SearchBar searchYelp={this.searchYelp}/>
	        <BusinessList businesses={businesses}/>
	      </div>
	    );
	  }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;