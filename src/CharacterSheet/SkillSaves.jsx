import React from "react";
import PropType from "prop-types";
import "./SkillSaves.css";

const Inspiration = () => (
	<div className="inspiration">
		<span className="label">INSPIRATION</span>
	</div>
);

const Proficiency = () => (
	<div className="proficiency-bonus">
		<span className="label">PROFICIENCY BONUS</span>
	</div>
);

const SavingThrow = ({ label }) => (
	<div className="saving-throw">
		<input type="checkbox" />
		<span> 0 </span>
		<span className="label">{label}</span>
	</div>
);
SavingThrow.propTypes = {
	label: PropType.string.isRequired,
};

const SavingThrows = () => (
	<div className="saving-throws-container">
		<SavingThrow label="Strength" />
		<SavingThrow label="Dexterity" />
		<SavingThrow label="Constitution" />
		<SavingThrow label="Intelligence" />
		<SavingThrow label="Wisdom" />
		<SavingThrow label="Charisma" />

		<span className="label">SAVING THROWS</span>
	</div>
);

const Skill = ({ label }) => (
	<div className="skill">
		<input type="checkbox" />
		<span> 0 </span>
		<span className="label">{label}</span>
	</div>
);
Skill.propTypes = {
	label: PropType.string.isRequired,
};

const Skills = () => (
	<div className="skills-container">
		<Skill label="Acrobatics" />
		<Skill label="Animal Handling" />
		<Skill label="Arcana" />
		<Skill label="Athletics" />
		<Skill label="Deception" />
		<Skill label="History" />
		<Skill label="Insight" />
		<Skill label="Intimidation" />
		<Skill label="Investigation" />
		<Skill label="Medicine" />
		<Skill label="Nature" />
		<Skill label="Perception" />
		<Skill label="Performance" />
		<Skill label="Persuasion" />
		<Skill label="Religion" />
		<Skill label="Sleight of Hand" />
		<Skill label="Stealth" />
		<Skill label="Survival" />

		<span className="label">SKILLS</span>
	</div>
);

const SkillSaves = () => (
	<div className="skill-saves-container">
		<Inspiration />
		<Proficiency />
		<SavingThrows />
		<Skills />
	</div>
);

export default SkillSaves;
