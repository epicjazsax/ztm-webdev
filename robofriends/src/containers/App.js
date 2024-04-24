import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots as besties } from '../robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import 'tachyons';
import './App.css';

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
				this.setState({ robots: besties.concat(data) })
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
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);

	}
}

export default App
