import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ResultContext } from '../../context/ResultContext';
import db from '../../data.json';
import QuestionCardContainer from './QuestionCard.style';

export default function QuestionCard() {
  const { addHit } = useContext(ResultContext);
  const [question, setQuestion] = useState(0);
  const history = useHistory();
  const letters = ['a', 'b', 'c', 'd'];

  function handleQuestion(opt) {
    const { solve } = db.questions[question];
    const wrong = document.querySelector(`.${opt}`);
    const correct = document.querySelector(`.${solve}`);

    if (opt === solve) addHit();

    if (opt !== solve) wrong.classList.add('wrong');
    correct.classList.add('correct');

    if (question < db.questions.length - 1) {
      setTimeout(() => {
        wrong.classList.remove('wrong');
        correct.classList.remove('correct');
        setQuestion(question + 1);
      }, 200);
    } else {
      setTimeout(() => {
        history.push('/result');
      }, 200);
    }
  }

  const alternatives = letters.map((letter) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      key={letter}
      tabIndex={0}
      role="button"
      onClick={(e) => handleQuestion(e.target.value)}
    >
      <button type="button" value={letter} className={letter}>
        {letter}
      </button>
      <button type="button" id={`btn-${letter}`} value={letter}>
        {db.questions[question].alternatives[letter]}
      </button>
    </div>
  ));

  return (
    <QuestionCardContainer>
      <header>
        <span>
          Question
          {' '}
          {question + 1}
          {' '}
          of
          {' '}
          {db.questions.length}
        </span>
        <hr />
        <h2>{db.questions[question].question}</h2>
        <hr />
      </header>
      {alternatives}
    </QuestionCardContainer>
  );
}
