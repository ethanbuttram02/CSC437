import { css } from "lit";

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  ul,
  menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  svg {
    display: inline;
    vertical-align: top;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export default { styles };