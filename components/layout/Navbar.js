import React from "react";

const Navbar = ({ darkMode }) => {
  return (
    <div>
      <h1>Navbar</h1>
      <button onClick={() => darkMode()}>darkMode</button>
    </div>
  );
};

export default Navbar;
