import { React, useState } from 'react';
import './App.sass';

import Header from './components/Header.tsx'
import Title from './components/Title.tsx'
import TextArea from './components/TextArea.tsx'
import CheckedBox from './components/CheckedBox.tsx'
import Card from './components/Card.tsx'
import LetterDensity from './components/LetterDensity.tsx'

import purpleImage from "./assets/images/pattern-character-count.svg"
import yellowImage from "./assets/images/pattern-sentence-count.svg"
import orangeImage from "./assets/images/pattern-word-count.svg"

type AppProps = {
  totalCharacters: number;
  wordCount: number
};

const App: React.FC<AppProps> = () => {

  const [text, setText] = useState("")

  let totalCharacters = text.length
  
  const wordCount = text.trim().length > 0 
  ? text.trim().split(/\s+/).length 
  : 0;
  
  const sentenceCount = text.trim().length > 0 
  ? text
      .trim()
      .split(/[.!?]+/)
      .filter(sentence => sentence.trim().length > 0) // <-- Add this line
      .length
  : 0;
  
  const letterCounts = {}
  for (let char of text.toUpperCase()) {
    if (/[A-Z]/.test(char)) {
      if (letterCounts[char]) {
        letterCounts[char]++;
      } else {
        letterCounts[char] = 1
      }
    }
  }

  const letterDataArray = Object.entries(letterCounts).map(([letter, value]) => ({
    letter,
    value,
    percent: ((value / text.length) * 100).toFixed(2) + "%"
  }));

  const sortedLetterArray = letterDataArray.sort((a, b) => b.value - a.value);


  return (
    <div className="body-container">
      <Header />
      <Title />
      <TextArea 
        text={text}
        setText={setText}
      />
      <div className="checked-box-container">
        <CheckedBox 
          name="Exclude Spaces"
          id="exclude-spaces"
        />
        <CheckedBox 
          name="Set Character Limit"
          id="character-limit"
        />
      </div>
      <div className='card-container-1'>
        <Card 
          cardColor='card-container purple-background'
          cardTitle='Total Characters'
          image={purpleImage}
          cardNumber={totalCharacters}
        />
        <Card 
          cardColor='card-container yellow-background'
          cardTitle='Word Count'
          image={yellowImage}
          cardNumber={wordCount}
        />
        <Card 
          cardColor='card-container orange-background'
          cardTitle='Sentence Count'
          image={orangeImage}
          cardNumber={sentenceCount}
        />
      </div>
      <div className="letter-density-container">
        <LetterDensity 
          letterData={sortedLetterArray}
        />
      </div>
    </div>
  );
}

export default App;
