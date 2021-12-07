import React from "react";
import Body from "./Body";
import Header from "./Header";

import "./CharacterSheet.css";

const CharacterSheet = () => {
	return (
		<div className="character-sheet">
			<Header />
			<Body />
		</div>
	);
};

export default CharacterSheet;
