import React, { Components } from 'react';

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/marksherm04"
					target="_blank"
					rel="noopener norefferer"
				>
					<img
						src={require("../../components/icons/github-icon.jpg")}
						alt="Github"
						className="icon"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/mark-sherman-82a072208/"
					target="_blank"
					rel="noopener norefferer"
				>
					<img
						src={require("../../components/icons/linkedin-icon.jpg")}
						alt="Linkedin"
						className="icon"
					></img>
				</a>
			</div>

			<div>
				<a
					href="https://twitter.com/marksherman6"
					target="_blank"
					rel="noopener norefferer"
				>
					<img
						src={require("../../components/icons/twitter-icon.jpg")}
						alt="Twitter"
						className="icon"
					></img>
				</a>
			</div>

		</footer>
	);
}

export default Footer;