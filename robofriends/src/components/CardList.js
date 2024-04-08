import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<>
			{
				robots.map(user => {
					return (
						<Card
							key={user.id}
							name={user.name}
							username={user.username}
							email={user.email}
						/>
					);
				})
			}
		</>
	);
}

export default CardList;
