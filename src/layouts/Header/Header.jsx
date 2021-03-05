import PropTypes from 'prop-types';
import React from 'react';
import HeaderContainer from './header.style';

export default function Header({ title }) {
  return (
    <HeaderContainer>
      {title}
    </HeaderContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
