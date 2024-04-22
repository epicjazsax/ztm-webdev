import React from 'react';
import Card from './Card';

const createCardFor = (user) => {
	return (
		<Card
			key={user.id}
			name={user.name}
			username={user.username}
			email={user.email}
		/>
	);
}

const CardList = ({ robots }) => {
	return (
		<>
			{
				robots.map(user => createCardFor(user))
			}
		</>
	);
}

export default CardList;
