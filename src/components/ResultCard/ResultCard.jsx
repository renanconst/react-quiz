import React, { useContext } from 'react';
import { ResultContext } from '../../context/ResultContext';
import db from '../../data.json';
import ScoreBar from '../ScoreBar';
import ResultCardContainer from './resultCard.style';

export default function ResultCard() {
  const { hit } = useContext(ResultContext);
  const score = Math.floor(db.questions.length / 3);
  let mensage;

  if (hit > (score * 2) + 1) {
    mensage = db.mensage.good;
  } else if (hit <= score) {
    mensage = db.mensage.bad;
  } else {
    mensage = db.mensage.normal;
  }

  return (
    <ResultCardContainer>
      <span>
        <h1>Congratulations!</h1>
        <ScoreBar />
        <h3>
          {' '}
          You got
          {' '}
          {hit}
          {' '}
          questions right
          {' '}
        </h3>
      </span>
      <p>
        {mensage}
      </p>
    </ResultCardContainer>
  );
}
