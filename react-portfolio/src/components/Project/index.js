import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

// imports the current projects
function Project({topProjects}) {
	
	
	return(
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={process.env.PUBLIC_URL + '/assets/images/' + topProjects.image}
				className="card-image"
			/>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title">{topProjects.name}</Card.Title>
					<Card.Text className="card-text">{topProjects.description}</Card.Text>
					<Card.Link href={topProjects.deployed} target="_blank" className="card-link">
						{topProjects.name} Application
					</Card.Link>
					<br></br>
					<Card.Link href={topProjects.github} target="_blank" className="card-link">
						{topProjects.name} Github Repository
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
	}

	export default Project;