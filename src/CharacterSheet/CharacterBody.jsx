import React from "react";

const CharacterBody = () => {
  return (
    <div className="character-body">
      <div className="stats-column">
        <div className="attributes-container">
          <div className="attribute-container str">
            <button>STRENGTH</button>
            <span className="mod">0</span>
            <div>
              <input className="score" value="10" />
            </div>
          </div>
          <div className="attribute-container dex">
            <button>DEXTERITY</button>
            <span className="mod">0</span>
            <div>
              <input className="score" value="10" />
            </div>
          </div>
          <div className="attribute-container con">
            <button>CONSTITUTION</button>
            <span className="mod">0</span>
            <div>
              <input className="score" value="10" />
            </div>
          </div>
          <div className="attribute-container int">
            <button>INTELLIGENCE</button>
            <span className="mod">0</span>
            <div>
              <input className="score" value="10" />
            </div>
          </div>
          <div className="attribute-container wis">
            <button>WISDOM</button>
            <span className="mod">0</span>
            <div>
              <input className="score" value="10" />
            </div>
          </div>
          <div className="attribute-container cha">
            <button>CHARISMA</button>
            <span className="mod">0</span>
            <div>
              <input className="score" value="10" />
            </div>
          </div>
        </div>
        <div className="skill-saves-container">
          <div className="inspiration">
            <div className="value">
              <input type="checkbox" />
              <span />
            </div>
            <div className="label">
              <span className="label">INSPIRATION</span>
            </div>
          </div>
          <div className="proficiency">
            <div className="value">
              <span>0</span>
            </div>
            <div className="label">
              <span className="label">PROFICIENCY BONUS</span>
            </div>
          </div>

          <div className="saving-throw-container">
            <span>asdf</span>
            <br />
            <span>asdf</span>
            <br />
            <span>asdf</span>
            <br />
            <span>asdf</span>
            <br />
            <span>asdf</span>
            <br />
            <span>asdf</span>
            <br />
          </div>
        </div>
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

export default CharacterBody;
