import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav() {

	const categories = [
		{ name: 'portfolio', description: 'Photos of different projects of mine' }
	];

	const handleClick = () => {
		console.log("click handled");
	};

	return (
		<header className="flex-row px-1">
			<h1>
				<a data-testid="link">
					<span role="img"></span> Mark Sherman
				</a>
			</h1>
			<nav>
				<ul className="flex-row">
					<li className="mx-2">
						<a data-testid="about" href="#about" onClick={() => handleClick()}>
							About Me
						</a>
					</li>
					<li className={"mx-2"}>
						<a data-testid="contact" href="#contact" onClick={() => handleClick()}>
							Contact
						</a>
					</li>
					{categories.map((category) => (
						<li className="mx-1" key={category.name} >
							<a href="#portfolio" onClick={() => { handleClick(); }}>
								{capitalizeFirstLetter(category.name)}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Nav;