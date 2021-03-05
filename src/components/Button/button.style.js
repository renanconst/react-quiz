import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: var(--blue);
  color: var(--white);

  padding: 10px 80px;

  border: none;
  border-bottom: 8px solid var(--dark-blue);
  border-radius: 5px;

  transition: 0.2s ease;

  :hover{
    filter: brightness(80%);
    transform: scale(0.98);
  }
`;

export default ButtonContainer;
