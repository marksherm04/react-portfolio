import React from 'react';

function Resume() {
	return (
		<section>
			<div className="align">
				<h1 className="header">My Resume</h1>
			</div>
			<div>
				<a href={require("../../assets/documents/Mark Sherman Resume.PDF")} download>
					<h4>Download Resume</h4>
				</a>
			</div>
			<div>
				<h5>Front-End Proficiencies</h5>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>Bootstrap</li>
					<li>Pure.css</li>
					<li>jQuery</li>
					<li>React</li>
				</ol>

				<br></br>

				<h5>Back-End Proficiencies</h5>
				<ol>
					<li>Node.js</li>
					<li>Express.js</li>
					<li>REST APIs</li>
					<li>JavaScript</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>

				<br></br>
				<ol>
					<h5>Database Technologies</h5>
					<li>Sequelize</li>
					<li>MySQL</li>
					<li>NoSQL</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;