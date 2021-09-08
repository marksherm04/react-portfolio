import React from 'react';
import Nav from '../Nav';

function Header(props) {
	const { currentLink, setCurrentLink } = props;

	return (
		<header>
			<div>
				<h3>Mark Sherman</h3>
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