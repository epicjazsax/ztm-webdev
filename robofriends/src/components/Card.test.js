import { render, screen, cleanup } from '@testing-library/react';
import Card from './Card';

const mockRobot = {
	name: 'Nea Karlsson',
	username: 'Mashtyx',
	email: 'urbanevader@dbd.bhvr',
};

describe('complete card', () => {
	const completeCard = <Card name={mockRobot.name} username={mockRobot.username} email={mockRobot.email} />

	it('renders Name', () => {
		render(completeCard);
		const renderedName = screen.getByText(mockRobot.name);
		expect(renderedName).toBeInTheDocument();
	})

	it('renders Username', () => {
		render(completeCard);
		const renderedUsername = screen.getByText('@' + mockRobot.username);
		expect(renderedUsername).toBeInTheDocument();
	})

	it('renders Email', () => {
		render(completeCard);
		const renderedEmail = screen.getByText(mockRobot.email);
		expect(renderedEmail).toBeInTheDocument();
	})

	it('renders exactly three text fields', () => {
		render(completeCard);
		const numberOfFieldsOnCard = screen.queryAllByText(/./);
		expect(numberOfFieldsOnCard).toHaveLength(3);
	})

	it('renders profile picture', () => {
		render(completeCard);
		const profilePicture = screen.getByRole('img');
		expect(profilePicture).toBeInTheDocument();
	})
})

describe('card with only Name', () => {
	const cardWithOnlyName = <Card name={mockRobot.name}/>

	it('renders Name', () => {
		render(cardWithOnlyName);
		const renderedName = screen.getByText(mockRobot.name);
		expect(renderedName).toBeInTheDocument();
	})

	it('renders only one text field', () => {
		render(cardWithOnlyName);
		const numberOfFieldsOnCard = screen.queryAllByText(/./);
		expect(numberOfFieldsOnCard).toHaveLength(1);
	})

	it('renders profile picture', () => {
		render(cardWithOnlyName);
		const profilePicture = screen.getByRole('img');
		expect(profilePicture).toBeInTheDocument();
	})
})

describe('card with only Username', () => {
	const cardWithOnlyUsername = <Card name={mockRobot.username}/>

	it('renders Username', () => {
		render(cardWithOnlyUsername);
		const renderedUsername = screen.getByText(mockRobot.username);
		expect(renderedUsername).toBeInTheDocument();
	})

	it('renders only one text field', () => {
		render(cardWithOnlyUsername);
		const numberOfFieldsOnCard = screen.queryAllByText(/./);
		expect(numberOfFieldsOnCard).toHaveLength(1);
	})

	it('renders profile picture', () => {
		render(cardWithOnlyUsername);
		const profilePicture = screen.getByRole('img');
		expect(profilePicture).toBeInTheDocument();
	})
})

describe('card with only Email', () => {
	const cardWithOnlyEmail = <Card name={mockRobot.email}/>

	it('renders Email', () => {
		render(cardWithOnlyEmail);
		const renderedEmail = screen.getByText(mockRobot.email);
		expect(renderedEmail).toBeInTheDocument();
	})

	it('renders only one text field', () => {
		render(cardWithOnlyEmail);
		const numberOfFieldsOnCard = screen.queryAllByText(/./);
		expect(numberOfFieldsOnCard).toHaveLength(1);
	})

	it('renders profile picture', () => {
		render(cardWithOnlyEmail);
		const profilePicture = screen.getByRole('img');
		expect(profilePicture).toBeInTheDocument();
	})
})

// // Uncomment below to show debug printout of rendered output
// describe('experiment with debug', () => {
// 	it('basic', () => {
// 		const { debug } = render(
// 			<Card name='person1' username='user1' email='user1@foo.com' />
// 	  	);
// 		debug();
// 	})
// })

