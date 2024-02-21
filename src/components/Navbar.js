import React, {useEffect, useState} from "react"
import "./styling/Navbar.css"

export default function Navbar() {

	const [navbar, setNavBar] = useState(false);

	const changeBackground = () => {
		if(window.scrollY >= 1) {
			setNavBar(true);
		} else {
			setNavBar(false);
		}
	};

	window.addEventListener('scroll', changeBackground);

		return (
			<nav className={navbar ? 'Navbar active' : 'Navbar'}>
			<a className="NavBarText" href="/">Tim Enos</a>
			</nav>
		);
}
