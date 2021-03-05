import styled from 'styled-components';

const QuestionCardContainer = styled.section`
  width: 100%;
  height: 100%;

  header{
    span{
      font: 700 1rem 'Roboto', sans-serif;
      color: var(--blue);
    }

    h2{
      font-size: 1.25rem;
      font-weight: 400;
      height: 48px;
    }

    hr{
      margin: 10px 0;
    }
  }

  div{
    height: 48px;

    display: flex;
    align-items: center;

    border-radius: 5px;
    overflow: hidden;

    margin-bottom: 15px;

    transition: filter 0.2s ease;

    cursor: pointer;

    .a, .b, .c, .d{
      width: 64px;
      height: 48px;

      border: none;
      border-bottom: 8px solid var(--dark-blue);
      color: var(--font);

      background-color: var(--blue);

      display: flex;
      align-items: center;
      justify-content: center;


      font-size: 1.25rem;
      font-weight: 600;
    }

    .wrong{
      border-bottom: 8px solid var(--dark-red);
      background-color: var(--red);
    }

    .correct{
      border-bottom: 8px solid var(--dark-green);
      background-color: var(--green);
    }

    button:last-child{
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;

      background-color: var(--gley);

      border: none;
      border-bottom: 8px solid var(--dark-gley);

      padding: 0 20px;

      font-size: 1rem;

      transition: 0.2s ease;
    }

    :hover{
      filter: brightness(95%);
      transform: scale(0.98);
    }
  }

  @media (max-width: 540px){
    header{
      h2{
        height: 100%;
      }

      hr:last-child{
        margin-bottom: 30px;
      }
    }
  }
`;

export default QuestionCardContainer;
