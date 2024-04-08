import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots as besties } from './robots';
import 'tachyons';
import './App.css';

class App extends Component {
	constructor () {
		super()
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.cypress.io/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: besties.concat(users) }))
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render () {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.robots.length === 0) {
			return <div id="Loading">Loading...</div>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>HI BESTIES</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList robots={filteredRobots}/>
				</div>
			);
		}
	}
}

export default App
