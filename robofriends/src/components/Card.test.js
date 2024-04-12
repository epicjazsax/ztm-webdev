import { render } from '@testing-library/react';
import Card from './Card';

describe('simple card', () => {
	it('contains cardName, cardUsername and cardEmail elements', () => {
		const { getByText, queryAllByText } = render(
			<Card name='person1' username='user1' email='user1@foo.com' />
	  	);
		expect(getByText('person1')).toHaveProperty('className', 'cardName');
		expect(getByText('@user1')).toHaveProperty('className', 'cardUsername');
		expect(getByText('user1@foo.com')).toHaveProperty('className', 'cardEmail');
		expect(queryAllByText(/./)).toHaveLength(3);
	})
})

describe('partially constructed card', () => {
	it('initializes name, but not username or email', () => {
		const { getByText, queryByText, queryAllByText } = render(
			<Card name='person1'/>
	  	);
		expect(getByText('person1')).toHaveProperty('className', 'cardName');
		// Card should have one text field if only one is initialized
		expect(queryAllByText(/./)).toHaveLength(1);
	})
})

describe('test by role', () => {
	it('basic', () => {
		const { getAllByRole } = render(
			<Card name='person1' username='user1' email='user1@foo.com' />
	  	);
		// Card should have 3 text fields if fully initialized
		expect(getAllByRole('heading', {level: 2})).toHaveLength(1);
		// expect(getAllByRole('paragraph')).toHaveLength(1);
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

