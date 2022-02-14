import React from "react";
import styles from "./About.module.css";
import { BsSuitHeart } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { motion } from "framer-motion";
import Image from "next/image";
const About = () => {
  return (
    <div id='#about' className={styles.container}>
      {/* ================hero */}
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8 }}
        className={styles.hero}
      >
        <Image
          height={200}
          width={200}
          className={styles.cat1}
          src='/cat.gif'
          alt=''
        />
      </motion.div>

      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className={styles.heroTitle}
      >
        <div className={styles.heroText}>
          <h1 className={(styles.text, styles.t1)}>
            Hello there, I am a
            <span className={styles.textclass}> front-end developer.</span>
          </h1>
        </div>
      </motion.div>
      {/* ==================title */}
      <p className={styles.title}>About me</p>
      {/* ================desc */}
      <p className={styles.desc}>
        I am Euger Bonete. I am passionate about coding and I am constantly
        learning more about web development. I am currently learning
        <strong> NextJS, strapi </strong>
        and some concepts like authentication and state management tools.
      </p>
      <div>
        <p className={styles.desc}>
          So far I'm enjoying the journey but sometimes I struggle and encounter
          problems hard for me to solve but I try my best and not procastinate.
        </p>
      </div>
      {/* ===================hobbies */}
      <p className={styles.title}>
        I <BsSuitHeart />
      </p>
      <p className={styles.desc}>Music, Drawing, Cats, Anime and Guitar. </p>
      {/*================================== tech stack */}
    </div>
  );
};

export default About;
