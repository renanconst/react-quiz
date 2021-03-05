import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root{
    --background: #E4E5E6;
    --font: #2C2C3F;
    --white: #FFF;
    --blue: #10A1E3;
    --dark-blue: #1091DC;
    --gley: #F5F6F7;
    --dark-gley: #E5E6E7;
    --green: #30cc50;
    --dark-green: #30ba50;
    --yellow: #FECE20;
    --red: #ee2010;
    --dark-red: #dd2010;
  }

  body, input, button{
    font: 400 1rem 'Noto Sans', sans-serif;
  }

  body{
    background-color: var(--background);
  }

  h1, h2, h3{
    font-family: 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;
