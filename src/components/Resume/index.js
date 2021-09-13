import React from 'react';

function Resume() {
	return (
		<section>
			<div className="align">
				<h1 className="text-3xl font-bold text-blue-700 p-8 bg-gradient-to-r from-blue-200 via-yellow-300 to-blue-200">My Resume</h1>
			</div>
			{/* <div>
				<a href={require("../../assets/documents/mark-resume.PDF")} download>
					<h4>Download Resume</h4>
				</a>
			</div> */}
			<div className="p-8 bg-gradient-to-r from-yellow-300 via-blue-200 to-yellow-300">
				<h3 className="text-xl underline">Front-End Proficiencies</h3>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>Bootstrap</li>
					<li>Pure.css</li>
					<li>jQuery</li>
					<li>React</li>
				</ul>

				<br></br>

				<h3 className="text-xl underline">Back-End Proficiencies</h3>
				<ul>
					<li>Node.js</li>
					<li>Express.js</li>
					<li>REST APIs</li>
					<li>JavaScript</li>
					<li>Progressive Web Applications (PWA)</li>
				</ul>

				<br></br>
				<ul>
					<h3 className="text-xl underline">Database Technologies</h3>
					<li>Sequelize</li>
					<li>MySQL</li>
					<li>NoSQL</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ul>
			</div>
		</section>
	);
}

export default Resume;