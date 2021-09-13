import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Contact() {
	return (
		<section>
			<h1 className="text-3xl font-bold text-blue-700 p-8 bg-gradient-to-r from-blue-200 via-yellow-300 to-blue-200">Contact Me</h1>
			<div className="p-8 bg-gradient-to-r from-yellow-300 via-blue-200 to-yellow-300">
			<form id="contact-form">
				<div class="mb-4">
					<label htmlFor="name">Name</label>
					<br></br>
					<input type="text" name="name" />
				</div>
				<div class="mb-4">
					<label htmlFor="email" >Email</label>
					<br></br>
					<input type="email" name="email" />
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<br></br>
					<textarea name="message" rows="5" />
				</div>
				<br></br>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
			</form>
			</div>
		</section>
	);
}

export default Contact;