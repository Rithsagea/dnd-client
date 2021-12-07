import React from "react";
import "./Body.css";

import SkillSaves from "./SkillSaves";
import Attributes from "./Attributes";

// Left
const AttributesCol = () => {
	return (
		<div className="attributes-column">
			<Attributes />
			<SkillSaves />
		</div>
	);
};

// Middle

const StatusCol = () => {
	return <div></div>;
};

const LoreCol = () => {
	return <div></div>;
};

const Body = () => {
	return (
		<div className="body">
			<AttributesCol />
			<StatusCol />
			<LoreCol />
		</div>
	);
};

export default Body;
