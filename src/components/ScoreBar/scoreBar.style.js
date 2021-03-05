import styled from 'styled-components';

const ScoreBarContainer = styled.div`
  width: 260px;
  height: 24px;
  border-radius: 12px;
  background-color: var(--gley);
  overflow: hidden;

  div{
    height: 100%;
    background-color: var(--blue);
  }
`;

export default ScoreBarContainer;
