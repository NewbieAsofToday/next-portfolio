import React, { useState } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    setDark(!dark);
  };
  return (
    <body>
      <Navbar darkMode={darkMode} />

      {children}
      <footer>
        <h1>this is footer</h1>
      </footer>
      <style jsx>{`
        body {
          background: ${dark ? "#fff" : "#000"};
          color: ${dark ? "#000" : "#fff"};
          width: 100%;
          height: 100%;
        }
      `}</style>
    </body>
  );
};

export default Layout;
