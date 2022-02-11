import Layout from "../components/Layout";
import "../styles/globals.css";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
