import React from 'react';
import Project from '../Project';

{/* PROJECTS IMPORTED */ }

function Portfolio() {
	const topProjects = [
		{
			name: 'Travel Bucket',
			image: 'travel-bucket.jpg',
			github: 'https://github.com/marksherm04/travel-bucket',
			deployed: 'https://travel-bucket.herokuapp.com/'
		},
		{
			name: 'International SpaceStation Tracker',
			image: 'int-spacestation-tracker.jpg',
			github: 'https://github.com/marksherm04/IntSpaceStation-Tracker',
			deployed: 'https://marksherm04.github.io/IntSpaceStation-Tracker/'
		},
		{
			name: 'Budget Tracker',
			image: 'budget-tracker.jpg',
			github: 'https://github.com/marksherm04/pwa-budget-tracker',
			deployed: 'https://mark-pwa-budget-tracker.herokuapp.com/'
		},
		{
			name: 'Team Profile Generator',
			image: 'team-profile.jpg',
			github: 'https://github.com/marksherm04/team-profile',
			deployed: 'https://drive.google.com/file/d/1Kz1jARXAl5sh1otAgTjccSCbud6fHTRC/view'
		},
		{
			name: 'Work Day Scheduler',
			image: 'work-day-scheduler.jpg',
			github: 'https://github.com/marksherm04/work-day-schedule',
			deployed: 'https://marksherm04.github.io/work-day-schedule/'
		},
		{
			name: 'Code Quiz',
			image: 'code-quiz.jpg',
			github: 'https://github.com/marksherm04/code-quiz',
			deployed: 'https://marksherm04.github.io/code-quiz/'
		}
	];
	
	return (
		<section>
				<h1 className="text-3xl font-bold text-blue-700 p-8 bg-gradient-to-r from-blue-200 via-yellow-300 to-blue-200">Portfolio</h1>
				<div>
			<div className="p-8 bg-gradient-to-r from-yellow-300 via-blue-200 to-yellow-300">
				<ul className="flex justify-around">
					<li className="padding">
						<Project topProjects={topProjects[0]}></Project>
					</li>
					<li className="padding">
						<Project topProjects={topProjects[1]}></Project>
					</li>
				</ul>
				<ul className="flex justify-around">
					<li className="padding">
						<Project topProjects={topProjects[2]}></Project>
					</li>
					<li className="padding">
						<Project topProjects={topProjects[3]}></Project>
					</li>
				</ul>
				<ul className="flex justify-around">
					<li className="padding">
						<Project topProjects={topProjects[4]}></Project>
					</li>
					<li className="padding">
						<Project topProjects={topProjects[5]}></Project>
					</li>
				</ul>
			</div>
			</div>
		</section>
	);
}

export default Portfolio;