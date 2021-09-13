import React from 'react';
import Nav from '../Nav';

function Header(props) {
	const { currentLink, setCurrentLink } = props;

	return (
		<header className="bg-yellow-400" >
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