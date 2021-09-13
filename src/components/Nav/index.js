import React from 'react';

function Nav(props) {
	 const { currentLink, setCurrentLink } = props;
	
	 return (
		 <nav>
			 <ul className="text-2xl font-bold text-blue-500 flex py-10 px-4 font-serif cursor-pointer static">
				 <li className={currentLink === "about" ? "rounded bg-blue-200 hover:bg-yellow-300 navActive" : "m-8 md:my-8"}>
					 <span onClick={() => setCurrentLink('about')}>About Me</span>
				 </li>
				 <li className={currentLink === "portfolio" ? "rounded bg-blue-200 hover:bg-yellow-300 navActive" : "m-8 md:my-8"}>
					 <span onClick={() => setCurrentLink("portfolio")}>Portfolio</span>
				 </li>
				 <li className={currentLink === "contact" ? "rounded bg-blue-200 hover:bg-yellow-300 navActive" : "m-8 md:my-8"}>
					 <span onClick={() => setCurrentLink("contact")}>Contact</span>
				 </li>
				 <li className={currentLink === "resume" ? "rounded bg-blue-200 hover:bg-yellow-300 navActive" : "m-8 md:my-8"}>
					 <span onClick={() => setCurrentLink("resume")}>Resume</span>
				 </li>
				 <li className={currentLink === "name" ? "navActive" : "m-8"}>
					 <span onClick={() => setCurrentLink("about")}>Mark Sherman 👨‍💻</span>
				 </li>
			 </ul>
		 </nav>
	 );
}

export default Nav;