import React from 'react';

function Nav() {

	return (
		<header>
			<h2>
				<a href="/">
					<span role="img" aria-label="camera"> </span> Mark Sherman
				</a>
			</h2>
			<nav>
				<ul className="flex">
					<li className="mx-2">
						<a href="#about">
							About Me
						</a>
					</li>
					<li>
						<span>Contact</span>
					</li>
					{categories.map((category) => (
						<li
							className="mx-1"
							key={category.name}
							>
								<span>
									{category.name}
								</span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Nav;