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

describe('create real Cards with 3 fields each', () => {
	it('renders nothing when passed zero robots', () => {
		const zeroRobots = <CardList robots={[]} />
		render(zeroRobots);
	
		const numberOfFieldsOnScreen = screen.queryAllByText(/./).length;
	
		expect(numberOfFieldsOnScreen).toBe(0);
	})

	it('renders one card when passed one robot', () => {
		const oneRobot = <CardList robots={[mockRobotList[0]]} />
		render(oneRobot);
	
		const numberOfFieldsOnScreen = screen.queryAllByText(/./).length;
		const numberOfCardsOnScreen = numberOfFieldsOnScreen / 3;
	
		expect(numberOfCardsOnScreen).toBe(1);
	})

	it('renders two cards when passed two robots', () => {
		const twoRobots = <CardList robots={mockRobotList.slice(0,2)} />
		render(twoRobots);
	
		const numberOfFieldsOnScreen = screen.queryAllByText(/./).length;
		const numberOfCardsOnScreen = numberOfFieldsOnScreen / 3;
	
		expect(numberOfCardsOnScreen).toBe(2);
	})

	it('renders a card for each robot', () => {
		const allRobots = <CardList robots={mockRobotList} />
		render(allRobots);
	
		const numberOfFieldsOnScreen = screen.queryAllByText(/./).length;
		const numberOfCardsOnScreen = numberOfFieldsOnScreen / 3;
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