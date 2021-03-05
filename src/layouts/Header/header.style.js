import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px 5px 0 0;
  border-bottom: 12px solid var(--dark-blue);

  background-color: var(--blue);
  color: var(--white);
  font-size: 1.125rem;

  @media (max-width: 540px){
    border-radius: 0;
  }
`;

export default HeaderContainer;
