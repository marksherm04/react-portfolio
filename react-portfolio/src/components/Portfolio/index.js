import React from 'react';
import Project from '../Project';

{/* PROJECTS IMPORTED */ }

function Portfolio() {
	const topProjects = [
		{
			name: 'Travel Bucket',
			description: 'This is a social application where bloggers and users can share their trips as well as ask and answer questions travel related.',
			image: 'travel-bucket.jpg',
			github: 'https://github.com/marksherm04/travel-bucket',
			deployed: 'https://travel-bucket.herokuapp.com/'
		},
		{
			name: 'International SpaceStation Tracker',
			description: 'An application that allows users to see where the International SpaceStation is located over the Earth.  There is also a section where you can quiz your knowledge on multiple subjects, as well as see the current spacestation occupants and click their names to learn more about them.',
			image: 'int-spacestation-tracker.jpg',
			github: 'https://github.com/marksherm04/IntSpaceStation-Tracker',
			deployed: 'https://marksherm04.github.io/IntSpaceStation-Tracker/'
		},
		{
			name: 'Budget Tracker',
			description: 'This is a progressive web application budget tracker.  A user that is traveling and may not have good service or be offline can add and subtract expenses.  This will keep a charge of net worth on the trip and allow the input to be published when the user is back online.',
			image: 'budget-tracker.jpg',
			github: 'https://github.com/marksherm04/pwa-budget-tracker',
			deployed: 'https://mark-pwa-budget-tracker.herokuapp.com/'
		},
		{
			name: 'Team Profile Generator',
			description: 'This project is a backend based Object Oriented Programming (OOP) application that will write a file and send the data to an HTML page.  Users can create a team page for their office or orgainization.',
			image: 'team-profile.jpg',
			github: 'https://github.com/marksherm04/team-profile',
			deployed: 'https://drive.google.com/file/d/1Kz1jARXAl5sh1otAgTjccSCbud6fHTRC/view'
		},
		{
			name: 'Work Day Scheduler',
			description: 'An application that allows a user to plan their activities or schedule on a daily basis.  Colors will change based on the current time of day and turn red if it is in the past.  The user can edit tasks on the scheudle at any time.',
			image: 'work-day-scheduler.jpg',
			github: 'https://github.com/marksherm04/work-day-schedule',
			deployed: 'https://marksherm04.github.io/work-day-schedule/'
		},
		{
			name: 'Code Quiz',
			description: 'An application that allows a user to take a quiz on their coding knowledge.  This involves a timer that subtracts 10 seconds with an incorrect answer, and keeps track of high scores.',
			image: 'code-quiz.jpg',
			github: 'https://github.com/marksherm04/code-quiz',
			deployed: 'https://marksherm04.github.io/code-quiz/'
		}
	];
	
	return (
		<section>
			<div className="align">
				<h1 className="page-header">Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project topProject={topProject[0]}></Project>
					</li>
					<li className="padding">
						<Project topProject={topProject[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project topProject={topProject[2]}></Project>
					</li>
					<li className="padding">
						<Project topProject={topProject[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project topProject={topProject[4]}></Project>
					</li>
					<li className="padding">
						<Project topProject={topProject[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;