import { createGlobalStyle } from 'styled-components';

import fontStandard from '../assets/fonts/Roboto-Regular.ttf';
import fontHeading from '../assets/fonts/RobotoCondensed-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url(${fontStandard});
  }
  @font-@font-face {
    font-family: RobotoCondensed;
    src: url(${fontHeading});
  }
  html {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: RobotoCondensed;
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
