import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots as besties } from '../robots';
import Scroll from '../components/Scroll';
import 'tachyons';
import './App.css';


function assign_unique_ids(input_array) {
	let output_array = []
	for (let x = 0; x < input_array.length; x++) {
		let element = input_array[x]
		element.id = x;
		output_array.push(element)
	}
	return output_array
}

class App extends Component {
	constructor () {
		super()
		this.state = {
			robots: besties,
			searchfield: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.cypress.io/users')
			.then(res => res.json())
			.then(data => {
				this.setState({ robots: assign_unique_ids(besties.concat(data)) })
			})
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render () {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ?
			<div id="Loading">Loading...</div> :
			(
				<div className='tc container'>
					<div id='header'>
						<h1 className='f1'>HI BESTIES</h1>
						<SearchBox searchChange={this.onSearchChange}/>
					</div>
					<Scroll id='scroll'>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);

	}
}

export default App
