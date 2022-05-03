import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Starter from "./components/Starter";

function App() {

	return (
	<main style={{
		width : '100vw',
		overflow: 'hidden',
		}}> 
	<Navbar /> 
	<Starter />
	<About /> 
	<Projects /> 
	<Skills /> 
	</main > 
		);
}

export default App;
