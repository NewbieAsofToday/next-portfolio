import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Navbar />
      {children}
      <Footer />
      <style jsx>{`
        .container {
          margin: 0 50px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
