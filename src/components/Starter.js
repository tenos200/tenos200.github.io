// src/components/Starter.js
import ScrollButton from "./ScrollButton"
import "./styling/Starter.css"

export default function Starter() {
	return (
		<section className="Starter" id="Starter">
			<h1 className="MainHeader">Tim Enos</h1>
			<h2 className="SubHeader">4th year Computer Science student <br />
at the University of Strathclyde</h2>
			<ScrollButton/>
		</section>
	);
}
