import { React, useState } from "react";
import "./LetterDensity.sass";

type LetterData = {
  letter: string;
  value: number;
};

type LetterDensityProps = {
  letterData: LetterData[];
};

const LetterDensity: React.FC<LetterDensityProps> = ({ letterData }) => {
  
  const totalLetters = letterData.reduce((sum, letter) => sum + letter.value, 0);

  const [showAll, setShowAll] = useState(false);

  const lettersToDisplay = showAll ? letterData : letterData.slice(0, 5);

  return (
    <div className="letter-density" data-testid="letter-density">
      <h2>Letter Density</h2>
      <div className="bar-container">
        {lettersToDisplay.map(({ letter, value }) => (
          <div key={letter} className="bar">
            <span className="label">{letter}</span>
            <div className="measure">
              <div
                className="fill"
                style={{ width: `${(value / totalLetters) * 100}%` }}
              ></div>
              <div className="rest"></div>
            </div>
            <span className="value">
              {`${value} (${((value / totalLetters) * 100).toFixed(2)}%)`}
            </span>
          </div>
        ))}
      </div>
      {letterData.length > 5 && (
        <button className="show-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Hide More ▲" : "See More ▼"}
        </button>
      )}
    </div>
  );
};

export default LetterDensity;