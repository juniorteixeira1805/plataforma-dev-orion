
import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

:root {
  --teal-50: #E6FFFA;
  --teal-100: #B2F5EA;
  --teal-200: #81E6D9;
  --teal-300: #4FD1C5;
  --teal-400: #38B2AC;
  --teal-500: #319795;
  --teal-600: #2C7A7B;
  --teal-700: #285E61;
  --teal-800: #234E52;
  --teal-900: #1D4044;
}
*{
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
}
*:focus {
    outline: 0;
}
html {
  font-size: 93.75%; /* 15px */

  @media (min-width: 800px) {
    html {
        font-size: 87.5%;
    }
  }
}
body {
  background: var(--teal-50);
  font-family:'Poppins', sans-serif}
a {
  text-decoration: none;
}

ul {
  list-style: none;
}
button {
  cursor: pointer;
}
`