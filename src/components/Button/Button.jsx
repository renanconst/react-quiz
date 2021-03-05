import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonContainer from './button.style';

export default function Button({ enderess, title }) {
  return (
    <ButtonContainer>
      <Link to={enderess}>
        <h2>
          {title}
        </h2>
      </Link>
    </ButtonContainer>
  );
}

Button.propTypes = {
  enderess: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
