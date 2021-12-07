import React from "react";
import "./Body.css";

import SkillSaves from "./SkillSaves";
import Attributes from "./Attributes";
import Proficiencies from "./Proficiencies";

// Left
const PassiveWisdom = () => (
	<div className="passive-wisdom-container">
		<span className="label">PASSIVE WISDOM (PERCEPTION)</span>
	</div>
);

const AttributesCol = () => {
	return (
		<div className="attributes-column">
			<Attributes />
			<SkillSaves />
			<div className="footer">
				<PassiveWisdom />
				<Proficiencies />
			</div>
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
