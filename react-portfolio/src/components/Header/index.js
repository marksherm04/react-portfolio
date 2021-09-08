import React from 'react';
import Nav from '../Nav';

function Header(props) {
	const { currentLink, setCurrentLink } = props;

	return (
		<header>
			<div>
				<h1 className="header">Mark Sherman</h1>
			</div>
			<div>
				<Nav
					currentLink={currentLink}
					setCurrentLink={setCurrentLink}
				></Nav>
			</div>
		</header>
	);
}

export default Header;