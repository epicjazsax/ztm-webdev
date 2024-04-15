import { render, screen } from '@testing-library/react';
import Card from './Card';

const mockRobot = {
	name: 'Nea Karlsson',
	username: 'Mashtyx',
	email: 'urbanevader@dbd.bhvr',
};

describe('complete card', () => {
	const completeCard = <Card name={mockRobot.name} username={mockRobot.username} email={mockRobot.email} />

	it('renders Name, Username, and Email', () => {
		render(completeCard);

		const findText = (text) => screen.getByText(text)
		const renderedName = findText(mockRobot.name);
		const renderedUsername = findText('@' + mockRobot.username);
		const renderedEmail = findText(mockRobot.email);

		expect(renderedName).toBeInTheDocument();
		expect(renderedUsername).toBeInTheDocument();
		expect(renderedEmail).toBeInTheDocument();
	})

	it('renders exactly three fields', () => {

		render(completeCard);

		const numberOfFieldsOnCard = screen.queryAllByText(/./);

		expect(numberOfFieldsOnCard).toHaveLength(3);
	})
})

describe('card with only Name', () => {
	it('renders only name, with no username or email', () => {
		render(<Card name={mockRobot.name}/>);

		const renderedName = screen.getByText(mockRobot.name);
		const numberOfFieldsOnCard = screen.queryAllByText(/./); 

		expect(renderedName).toBeInTheDocument();
		expect(numberOfFieldsOnCard).toHaveLength(1);
	})
})

describe('card with only Username', () => {
	it('renders only username, with no name or email', () => {
		render(<Card name={mockRobot.username}/>);

		const renderedUsername = screen.getByText(mockRobot.username);
		const numberOfFieldsOnCard = screen.queryAllByText(/./); 

		expect(renderedUsername).toBeInTheDocument();
		expect(numberOfFieldsOnCard).toHaveLength(1);
	})
})

describe('card with only Email', () => {
	it('renders only email, with no name or username', () => {
		render(<Card name={mockRobot.email}/>);

		const renderedEmail = screen.getByText(mockRobot.email);
		const numberOfFieldsOnCard = screen.queryAllByText(/./); 

		expect(renderedEmail).toBeInTheDocument();
		expect(numberOfFieldsOnCard).toHaveLength(1);
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

