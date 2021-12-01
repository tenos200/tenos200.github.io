// src/components/ScrollButton.js 
import "./styling/Starter.css"

const ScrollButton = () => {

	const scrollToSection = () =>{ 
		let nextElement = document.getElementById('HeaderScrollTo');
		nextElement.scrollIntoView({behavior : 'smooth'});
		
	};

	return (
		<button className="AboutMeButton" onClick={scrollToSection}>About me &#8592;</button>
	);

}

export default ScrollButton;
