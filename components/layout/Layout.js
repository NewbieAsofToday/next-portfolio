import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, themeToggler }) => {
  const [white, setWhite] = useState(false);
  return (
    <div className='container'>
      <Navbar themeToggler={themeToggler} white={white} setWhite={setWhite} />
      {children}
      <Footer />
      <style jsx>{`
        .container {
          color: ${white ? "#fff" : "#000"};
        }
      `}</style>
    </div>
  );
};

export default Layout;
