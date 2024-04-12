import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('complete card', () => {
	it('renders Name, Username, and Email, and no other fields', () => {
		const robot = {
			id: 1,
			name: 'Nea Karlsson',
			username: 'Mashtyx',
			email: 'urbanevader@dbd.bhvr',
		};
	
		render(<Card name={robot.name} username={robot.username} email={robot.email} />);

		const findText = (text) => screen.getByText(text)
		const renderedName = findText(robot.name);
		const renderedUsername = findText('@' + robot.username);
		const renderedEmail = findText(robot.email);
		const numberOfFieldsOnCard = screen.queryAllByText(/./); 

		expect(renderedName).toHaveProperty('className', 'cardName');
		expect(renderedUsername).toHaveProperty('className', 'cardUsername');
		expect(renderedEmail).toHaveProperty('className', 'cardEmail');
		expect(numberOfFieldsOnCard).toHaveLength(3);
	})
})

describe('card with only Name', () => {
	it('initializes name, but not username or email', () => {
		render(<Card name='person1'/>);

		const renderedName = screen.getByText('person1');
		const numberOfFieldsOnCard = screen.queryAllByText(/./); 

		expect(renderedName).toHaveProperty('className', 'cardName');
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

