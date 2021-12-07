import React from "react";
import PropType from "prop-types";
import "./Attributes.css";

const AttributeContainer = ({ className, label, score, mod }) => {
	return (
		<div className={`attribute-container ${className}`}>
			<span className="label">{label}</span>
			<span className="modifier">{(mod > 0 ? "+" : "") + mod}</span>
			<span className="attribute">{score}</span>
		</div>
	);
};

AttributeContainer.propTypes = {
	className: PropType.string.isRequired,
	label: PropType.string.isRequired,
	score: PropType.number.isRequired,
	mod: PropType.number.isRequired,
};

const Attributes = () => {
	return (
		<div className="attributes">
			<AttributeContainer className="str" label="STRENGTH" score={8} mod={-1} />
			<AttributeContainer className="dex" label="DEXTERITY" score={14} mod={2} />
			<AttributeContainer className="con" label="CONSTITUTION" score={10} mod={0} />
			<AttributeContainer className="int" label="INTELLIGENCE" score={15} mod={2} />
			<AttributeContainer className="wis" label="WISDOM" score={14} mod={2} />
			<AttributeContainer className="cha" label="CHARISMA" score={14} mod={2} />
		</div>
	);
};

export default Attributes;
