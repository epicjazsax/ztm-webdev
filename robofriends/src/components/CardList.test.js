import { render, screen } from '@testing-library/react';
import CardList from './CardList';

const mockRobotList = [
	{
		name: 'Nea Karlsson',
		username: 'Mashtyx',
		email: 'urbanevader@dbd.bhvr',
	},
	{
		name: 'Athena Springs',
		username: 'TheGladiator',
		email: 'xiphosandaspis@bl.gbx',
	},
	{
		name: 'Caleb Widogast',
		username: 'TheMightiestNein',
		email: 'fireball@crit.role',
	},
];

describe('create one card for each robot', () => {
	it('renders zero cards when passed zero robots', () => {
		const zeroRobots = <CardList robots={[]} />
		render(zeroRobots);
		const numberOfCardsOnScreen = screen.queryAllByTestId('card').length;
		expect(numberOfCardsOnScreen).toBe(0);
	})

	it('renders one card when passed one robot', () => {
		const oneRobot = <CardList robots={[mockRobotList[0]]} />
		render(oneRobot);
		const numberOfCardsOnScreen = screen.queryAllByTestId('card').length;
		expect(numberOfCardsOnScreen).toBe(1);
	})

	it('renders two cards when passed two robots', () => {
		const twoRobots = <CardList robots={mockRobotList.slice(0,2)} />
		render(twoRobots);
		const numberOfCardsOnScreen = screen.queryAllByTestId('card').length;
		expect(numberOfCardsOnScreen).toBe(2);
	})

	it('renders a card for each robot', () => {
		const allRobots = <CardList robots={mockRobotList} />
		render(allRobots);
		const numberOfCardsOnScreen = screen.queryAllByTestId('card').length;
		const numberOfRobots = mockRobotList.length;
		expect(numberOfCardsOnScreen).toEqual(numberOfRobots);
	})
})


// // Uncomment below to show debug printout of rendered output
// describe('experiment with debug', () => {
// 	it('basic', () => {
// 		const { debug } = render(
// 			<CardList robots={mockRobotList} />
// 	  	);
// 		debug();
// 	})
// })