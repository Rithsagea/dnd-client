import React from "react";
import PropType from "prop-types";
import "./Attributes.css";

const AttributeContainer = ({ className, label }) => {
	return (
		<div className={`attribute-container ${className}`}>
			<span className="label">{label}</span> <br />
			<span className="modifier">-69</span> <br />
			<span className="attribute">420</span>
		</div>
	);
};

AttributeContainer.propTypes = {
	className: PropType.string.isRequired,
	label: PropType.string.isRequired,
};

const Attributes = () => {
	return (
		<div className="attributes">
			<AttributeContainer className="str" label="STRENGTH" />
			<AttributeContainer className="dex" label="DEXTERITY" />
			<AttributeContainer className="con" label="CONSTITUTION" />
			<AttributeContainer className="int" label="INTELLIGENCE" />
			<AttributeContainer className="wis" label="WISDOM" />
			<AttributeContainer className="cha" label="CHARISMA" />
		</div>
	);
};

export default Attributes;
