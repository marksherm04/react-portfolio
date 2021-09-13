import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

// imports the current projects
function Project({ topProjects }) {

	return (
		<div className="by-white shadow-lg rounded m-8 p-8 flex border-style: solid border-4 border-white-500">
		<Card style={{ width: "24rem" }}>
			<Card.Img
				variant="top"
				src={process.env.PUBLIC_URL + '/assets/images/' + topProjects.image}
				className="shadow-lg rounded object-cover h-56"
			/>
			<div className="font-bold">
				<Card.Body>
					<Card.Title className="text-xl">{topProjects.name}</Card.Title>
					<Card.Link href={topProjects.deployed} target="_blank" className="underline text-blue-500 hover:text-yellow-800 visited:text-purple-600">
						Application Link
					</Card.Link>
					<br></br>
					<Card.Link href={topProjects.github} target="_blank" className="underline text-blue-500 hover:text-yellow-800 visited:text-purple-600">
						Github Repository
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
		</div>
	);
}

export default Project;