import React from 'react';

const Card = ({ name, username, email }) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${name}?200x200`} alt='robots' />
			<div>
				<h2 className='cardName'>{name}</h2>
				<h4 className='cardUsername'>
					{username ? '@' + username : ''}
				</h4>
				<p className='cardEmail'>{email}</p>
			</div>
		</div>
	);
}

export default Card;
