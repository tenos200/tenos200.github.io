// src/components/Starter.js
import ScrollButton from "./ScrollButton"
import "./styling/Starter.css"

export default function Starter() {
	return (
		<section className="Starter" id="Starter">
			<h1 className="MainHeader">Tim Enos</h1>
			<h2 className="SubHeader">MSc Computer Science student <br />
at the University of Edinburgh</h2>
			<ScrollButton/>
		</section>
	);
}
