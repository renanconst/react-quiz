import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 720px;
  max-height: 480px;

  background-color: var(--white);

  border-radius: 5px;

  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  @media (max-width: 540px){
    max-height: 100%;
    border-radius: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 30px;
`;

export default QuizContainer;
