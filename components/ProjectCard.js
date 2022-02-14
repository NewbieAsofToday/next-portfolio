import React from "react";
import styles from "./ProjectCard.module.css";
const ProjectCard = ({ item }) => {
  // const
  console.log(item);
  return (
    <div>
      <p className={styles.title}>Proejct card</p>
    </div>
  );
};

export default ProjectCard;
