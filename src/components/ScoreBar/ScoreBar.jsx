import React, { useContext } from 'react';
import ScoreBarContainer from './scoreBar.style';
import { ResultContext } from '../../context/ResultContext';
import db from '../../data.json';

export default function ScoreBar() {
  const { hit } = useContext(ResultContext);
  const percentHits = (100 / db.questions.length) * hit;
  const score = Math.floor(db.questions.length / 3);
  let color;

  if (hit > (score * 2) + 1) {
    color = 'green';
  } else if (hit <= score) {
    color = 'red';
  } else {
    color = 'yellow';
  }

  return (
    <ScoreBarContainer>
      <div style={{ width: `${percentHits}%`, backgroundColor: `var(--${color})` }} />
    </ScoreBarContainer>
  );
}
