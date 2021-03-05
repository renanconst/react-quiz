import styled from 'styled-components';

const DescriptionCardContainer = styled.div`
  width: 100%;
  max-width: 480px;
  text-align: center;

  img{
    width: 160px;
    height: 160px;

    border: 4px solid var(--white);
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 50%;

    padding: 20px 0;

    margin-bottom: 15px;
  }

  p{
    color: var(--font);
    font-size: 1.25rem;
    margin-bottom: 25px;
  }
`;

export default DescriptionCardContainer;
