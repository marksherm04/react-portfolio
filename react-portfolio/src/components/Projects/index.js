import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/background/desk-background.jpg";

// {/* NEED TO IMPORT PROJECTS HERE ABOVE */}

function Projects(props) {
	const currentProject = {
		name: "Travel Bucket",
		description: "This is a social application where bloggers and users can share their trips as well as ask and answer questions travel related.",
	};
	return (
		<section>
			<h1>{capitalizeFirstLetter(currentProject.name)}</h1>
			<p>{currentProject.name}</p>
			{/* NEED TO IMPORT PROJECTS HERE */}
			<div className="flex-row">
				<img 
				src={photo}
				alt="Travel Bucket"
				className="img-thumbnail mx-1" 
				/>  
			</div>
		</section>
	);
} 

export default Projects;