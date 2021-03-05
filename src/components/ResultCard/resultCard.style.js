import styled from 'styled-components';

const ResultCardContainer = styled.div`
  width: 100%;
  max-width: 260px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  span{
    h1{
      margin-bottom: 15px;
    }

    h3{
      margin-top: 15px;
    }
  }

  p{
    margin-top: 30px;
  }
`;

export default ResultCardContainer;
