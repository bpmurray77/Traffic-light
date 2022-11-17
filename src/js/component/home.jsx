import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [ selectedColor, setColor ] = useState("");
	console.log(selectedColor);
  
	return (
	<div>
	<div id="trafficTop"></div>
	<div id="container">
		<div onClick={() => setColor("red")} class={"light red"+((selectedColor === "red") ? " selected" : "" )}></div>
		<div onClick={() => setColor("yellow")} class={"light yellow"+((selectedColor === "yellow") ? " selected" : "" )}></div>
		<div onClick={() => setColor("green")} class={"light green"+((selectedColor === "green") ? " selected" : "" )}></div>
	</div>
	</div>
	);
  };
  
export default Home;
