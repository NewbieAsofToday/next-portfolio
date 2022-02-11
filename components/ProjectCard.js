import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ item }) => {
  console.log(item);
  const { image, about, tags, demo } = item;
  return (
    <div className={styles.container}>
      <img className={styles.project_image} src={image} alt='' />
      <div className={styles.details_box}>
        {tags.map((item) => {
          return <span className={styles.tags}>{item}</span>;
        })}
        {/* <div className=''>{about}</div> */}
      </div>
      <a href={demo} target='_blank'>
        Live
      </a>
    </div>
  );
};

export default ProjectCard;
