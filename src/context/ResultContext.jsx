import PropTypes from 'prop-types';
import React from 'react';

const { createContext, useState } = require('react');

export const ResultContext = createContext({});

export function ResultProvider({ children }) {
  const [hit, setHit] = useState(0);

  function addHit() {
    setHit(hit + 1);
  }

  function resetHit() {
    setHit(0);
  }

  return (
    <ResultContext.Provider value={{
      addHit,
      resetHit,
      hit,
    }}
    >
      {children}
    </ResultContext.Provider>
  );
}

ResultProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
