import React from "react";
import styles from "./Work.module.css";
import ProjectCard from "./ProjectCard";
import { projectContent } from "./data/data";
const Work = () => {
  const data = projectContent;
  return (
    <div id='works' className={styles.container}>
      <p className={styles.title}>See my work</p>
      <div>
        {data.map((item, index) => {
          return <ProjectCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Work;
