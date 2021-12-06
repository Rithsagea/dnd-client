import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const LabeledInput = ({ label }) => {
  return (
    <div className="labeled-input">
      <input type="text" />
      <span className="label">{label}</span>
    </div>
  );
};

LabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
};

const Header = () => {
  return (
    <div className="header">
      <div className="name-container">
        <input type="text" />
        <span className="label">CHARACTER NAME</span>
      </div>
      <div className="header-info">
        <LabeledInput label="CLASS & LEVEL" />
        <LabeledInput label="BACKGROUND" />
        <LabeledInput label="PLAYER NAME" />
        <LabeledInput label="RACE" />
        <LabeledInput label="ALIGNMENT" />
        <LabeledInput label="EXPERIENCE POINTS" />
      </div>
      <span className="header-right-scroll" />
    </div>
  );
};

export default Header;
