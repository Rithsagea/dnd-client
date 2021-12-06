import React from "react";
import "./style.css";

const CharacterHeader = () => {
  return (
    <div className="character-header">
      <div className="nametag">
        <input className="name" type="text" />
        <span className="label">CHARACTER NAME</span>
      </div>
      <div className="details">
        <div className="labeled-input">
          <input type="text" />
          <span className="label">CLASS & LEVEL</span>
        </div>
        <div className="labeled-input">
          <input type="text" />
          <span className="label">BACKGROUND</span>
        </div>
        <div className="labeled-input">
          <input type="text" />
          <span className="label">PLAYER NAME</span>
        </div>
        <div className="labeled-input">
          <input type="text" />
          <span className="label">RACE</span>
        </div>
        <div className="labeled-input">
          <input type="text" />
          <span className="label">ALIGNMENT</span>
        </div>
        <div className="labeled-input">
          <input type="text" />
          <span className="label">EXPERIENCE POINTS</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterHeader;
