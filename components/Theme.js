import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  body: "rgb(32, 32, 35)",
};
export const darkTheme = {
  body: "rgb(240, 231, 219)",
};
export const GlobalStyles = createGlobalStyle`
body{
 background-color: ${(props) => props.theme.body};
 transition: .1s all;
}
`;
