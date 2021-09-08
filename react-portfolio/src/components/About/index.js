import React from 'react';

function About() {
	return (
		<section>
			<div className="align" id="about">
				<h1 className="header">About Me</h1>
			</div>
			<div className="align">
				<img
					src={require('../../assets/images/mark-headshot.jpg')}
					alt="mark-sherman"
					className="my-photo"
				/>
			</div>
			<div>
				<p>
					I am finishing up my MERN Full Stack certification from Bulter Bootcamp 6 month program.
					I have learned many technologies over the past 6 months and ready to put them into practice.
					Please check out my Portfolio page to see some of my work.  Feel free to contact me at anytime to ask any questions or any discuss projects!
				</p>
			</div>

		</section>
	);
}

export default About;