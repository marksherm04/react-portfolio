import React from 'react';

function About() {
	return (
		<section>
			<div className="bg-gradient-to-r from-blue-200 via-yellow-300 to-blue-200 p-4" id="about">
				<h1 className="text-3xl font-bold text-blue-700">About Me</h1>
				<br></br>
			</div>
			<p className="text-xl font-bold bg-gradient-to-r from-blue-200 via-yellow-300 to-blue-200 text-blue-500">
					I am finishing up my MERN Full Stack certification from the Bulter Bootcamp in Indianapolis, Indiana.
					I have learned many technologies over the past 6 months and I'm ready to put them into practice for professional and personal projects.
					Please check out my Portfolio page to see some of my work.  Feel free to contact me at anytime to ask any questions or inquiries!
				</p>
			<div className="bg-gradient-to-r from-yellow-300 via-blue-200 to-yellow-300">
				<img
					src={process.env.PUBLIC_URL + '/assets/images/mark-headshot.jpg'}
					alt="mark-sherman"
					className="p-28 static"
				/>
			</div>
		</section>
	);
}

export default About;