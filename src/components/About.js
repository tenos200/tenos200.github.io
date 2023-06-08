// src/components/About.js
// maybe rethink how the text is phrased about me.
import "./styling/About.css"

export default function About() {
	return (
		<section id="About" className="AboutContainer">
			<h2 id="HeaderScrollTo"></h2>
			<br />
			<h2 className="AboutmeHeader" id="AboutmeHeader">About Me</h2>
			<p>Borned and raised in Stockholm, Sweden, moved to Glasgow in 2018 to proceed with higher education. Some quick facts about me, I enjoy speedcubing and have been doing that since the age of 10, my current best time is 13.45 seconds. I enjoy spending time working on personal programming projects learning new technologies, currently working on learning more about pytorch and implementing this into a number recognition software.</p>
		</section>
	);
}
