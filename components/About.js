import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <img className={styles.cat1} src='./cat.gif' alt='' />
      </div>
      <p className={styles.title}>About me</p>
      <p>
        I am a Front-End Developer based in the Phillippines. I am passionate
        about coding and I am constantly learning more about web development.
        I'm currently learning
        <strong> NextJS, strapi </strong>
        and some concepts like authentication and state management tools.
      </p>
      <div>
        <div className={styles.hero}>
          <img className={styles.cat2} src='./struggle.gif' alt='' />
        </div>
        <p>
          So far I'm enjoying the journey but sometimes I struggle and encounter
          problems hard for me to solve but I try my best and not procastinate.
        </p>
      </div>
    </div>
  );
};

export default About;
