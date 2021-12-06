import React from "react";
import "./Attributes";
import Attributes from "./Attributes";

import "./Body.css";

const AttributesCol = () => {
	return (
		<div className="attributes-column">
			<Attributes />
		</div>
	);
};

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
