import React from "react";
import { FaWrench } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { BsPhone } from "react-icons/bs";
import { SiMaterialui } from "react-icons/si";
import styles from "./Skills.module.css";
const Skills = () => {
  return (
    <div id='skills' className={styles.container}>
      <p className={styles.title}>
        Skills <FaWrench />
      </p>

      <div className={styles.stack}>
        <div className={styles.skill}>
          <FaHtml5 className={styles.skillIcon} />
          HTML
        </div>
        <div className={styles.skill}>
          <FaCss3Alt className={styles.skillIcon} />
          CSS
        </div>
        <div className={styles.skill}>
          <SiJavascript className={styles.skillIcon} />
          Javascript
        </div>
        <div className={styles.skill}>
          <FaReact className={styles.skillIcon} />
          React
        </div>

        <div className={styles.skill}>
          <DiGit className={styles.skillIcon} />
          Git
        </div>
        <div className={styles.skill}>
          <BsPhone className={styles.skillIcon} />
          Responsive Design
        </div>
        <div className={styles.skill}>
          <SiMaterialui className={styles.skillIcon} />
          Material Ui
        </div>
        <div className={styles.skill}>
          <SiNextdotjs className={styles.skillIcon} />
          NEXT
        </div>
      </div>
    </div>
  );
};

export default Skills;
