import React, { useState } from 'react';
import './CharacterCounter.css';

const MAX_CHARS = 250;

const CharacterCounter = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_CHARS) {
      setText(e.target.value);
    }
  };

  const isMax = text.length === MAX_CHARS;

  return (
    <div className="character-container">
      <h2>Write your Message</h2>
      <textarea
        className={`message-box ${isMax ? 'limit-reached' : ''}`}
        placeholder="Start typing ..."
        value={text}
        onChange={handleChange}
      />
      <div className={`char-count ${isMax ? 'red-text' : ''}`}>
        {text.length} / {MAX_CHARS}
      </div>
    </div>
  );
};

export default CharacterCounter;
