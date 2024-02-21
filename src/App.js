import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Starter from "./components/Starter";

function App() {

	return (
	<main style={{
		overflow: 'hidden',
		}}> 
	<Navbar /> 
	<Starter />
	<About /> 
	<Skills /> 
	<Projects /> 
	</main > 
		);
}

export default App;
