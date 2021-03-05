import React from 'react';
import icon from '../../assets/images/icon.png';
import db from '../../data.json';
import Button from '../Button';
import DescriptionCardContainer from './descriptionCard.style';

export default function DescriptionCard() {
  return (
    <DescriptionCardContainer>
      <img src={icon} alt="icon" />
      <p>
        {db.description}
      </p>

      <Button title="Começar" enderess="/quiz" />
    </DescriptionCardContainer>
  );
}
