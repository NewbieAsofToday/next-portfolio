import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../components/Theme";

const StyledApp = styled.div``;

function MyApp({ Component, pageProps, router }) {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Layout themeToggler={themeToggler}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </StyledApp>
    </ThemeProvider>
  );
}

export default MyApp;
