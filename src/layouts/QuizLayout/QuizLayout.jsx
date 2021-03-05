import PropTypes from 'prop-types';
import React from 'react';
import Header from '../Header';
import QuizContainer, { Wrapper } from './quizLayout.style';

export default function QuizLayout({ title, children }) {
  return (
    <QuizContainer>
      <Header title={title} />
      <Wrapper>
        {children}
      </Wrapper>
    </QuizContainer>
  );
}

QuizLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
