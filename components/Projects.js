import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import { ProjectData } from "./data";
const Projects = () => {
  const data = ProjectData;
  return (
    <>
      <div className='container'>
        <div className={styles.title}>
          <p>My Work</p>
        </div>
        <div className={styles.grid}>
          {data.map((item) => {
            return <ProjectCard item={item} />;
          })}
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 55vw;
          margin: 0 auto;
          min-width: 400px;
        }
      `}</style>
    </>
  );
};

export default Projects;
