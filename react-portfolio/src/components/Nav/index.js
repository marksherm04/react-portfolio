import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav() {

	const categories = [
		{ name: 'projects', description: 'Photos of different projects of mine' }
	];

	const handleClick = () => {
		console.log("click handled");
	};

	return (
		<header data-testid="header" className="flex-row px-1">
			<h1>
				<span role="img"> Mark Sherman </span>
			</h1>
			<nav>
				<ul className="flex-row">
					<li className="mx-2">
						<a href="#about" onClick={() => handleClick()}>
							About Me
						</a>
					</li>
					<li className={"mx-2"}>
						<a href="#contact" onClick={() => handleClick()}>
							Contact
						</a>
					</li>
					{categories.map((category) => (
						<li className="mx-1" key={category.name} >
							<a href="#projects" onClick={() => { handleClick(); }}>
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