import React from "react";

import CharacterHeader from "./CharacterHeader";
import CharacterBody from "./CharacterBody";

const CharacterSheet = () => {
  return (
    <div className="character-sheet">
      <CharacterHeader />
      <CharacterBody />
    </div>
  );
};

export default CharacterSheet;
