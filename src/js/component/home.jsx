import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [selectedColor, setColor] = useState("red");

	return (
		<div id="trafficTop">
			<div id="container">
				<div class={"red light"+((selectedColor === "red") ? "selected" : "" )} onClick={() => setColor('red')}></div>
				<div class={"yellow light"+((selectedColor === "yellow") ? "selected" : "" )} onClick={() => setColor('yellow')}></div>
				<div class={"green light"+((selectedColor === "green") ? "selected" : "" )} onClick={() => setColor('green')}></div>
			</div>
		</div>
	);
};

export default Home;
