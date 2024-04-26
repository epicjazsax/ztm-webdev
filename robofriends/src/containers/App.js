import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots as besties } from '../robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import 'tachyons';
import './App.css';

function App() {
	const [robots, setRobots] = useState(besties);
	const [searchfield, setSearchfield] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.cypress.io/users')
			.then(res => res.json())
			.then(data => {
				setRobots(besties.concat(data))
			})
	}, [])

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})

	return !robots.length ?
		<div id="Loading">Loading...</div> :
		(
			<div className='tc container'>
				<div id='header'>
					<h1 className='f1'>HI BESTIES</h1>
					<SearchBox searchChange={onSearchChange}/>
				</div>
				<Scroll id='scroll'>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
}

export default App
