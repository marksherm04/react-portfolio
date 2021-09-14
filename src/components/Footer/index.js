import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

function Footer() {
	return (
		<footer className="footer">
			<div className="flex justify-around bg-gradient-to-r from-yellow-300 via-blue-200 to-yellow-300">
				<SocialIcon url="https://twitter.com/marksherman6" />

				<SocialIcon url="https://github.com/marksherm04" />

				<SocialIcon url="https://www.linkedin.com/in/mark-sherman-82a072208/" />
			</div>
		</footer>
	);
}

export default Footer;