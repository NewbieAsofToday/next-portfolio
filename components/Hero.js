import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className='container'>
      <h1>Hero Section</h1>
      <style jsx>{`
        .container {
          width: 50vw;
          margin: 0 auto;
          margin-top: 2rem;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Hero;
