import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
*{
  margin: 0;
  padding: 0;
  outline: o;
  box-sizing: border-box;
}

html, body, #root{
  height: 100%;
}

body,input button {
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration:none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}
`;
