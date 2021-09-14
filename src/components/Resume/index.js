import React, { Component } from 'react';

function Resume() {
	return (
		<section>
			<div className="resume">
				<h1 className="text-3xl font-bold text-blue-700 p-8 bg-gradient-to-r from-blue-200 via-yellow-300 to-blue-200">My Resume</h1>
				<div className="text-xl underline font-bold text-blue-700 p-4 bg-gradient-to-r from-blue-200 via-yellow-300 to-blue-200">
				<a href={require("../../components/files/mark-resume.pdf")} download>
					<h5>Download Resume</h5>
				</a>
				</div>
			</div>
			
				
			
			<div className="p-8 bg-gradient-to-r from-yellow-300 via-blue-200 to-yellow-300">
				<h3 className="text-xl underline text-blue-700">Front-End Proficiencies</h3>
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

				<h3 className="text-xl underline text-blue-700">Back-End Proficiencies</h3>
				<ul>
					<li>Node.js</li>
					<li>Express.js</li>
					<li>REST APIs</li>
					<li>JavaScript</li>
					<li>Progressive Web Applications (PWA)</li>
				</ul>

				<br></br>
				<ul>
					<h3 className="text-xl underline text-blue-700">Database Technologies</h3>
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