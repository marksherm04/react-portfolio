import React from 'react';
import deskBackground from "../../assets/background/desk-background.jpg"

function Contact() {
	return (
		<section className="my-5">
			<h1 id="contact">Mark Sherman</h1>
			<img src={deskBackground} className="my-2" style={{ width: "100%" }} alt="background" />
		</section>
	);
}

export default Contact;