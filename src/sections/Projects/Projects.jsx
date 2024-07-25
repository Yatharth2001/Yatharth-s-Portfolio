import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import sitescripter from "../../assets/sitescripter.png";
import cinechum from "../../assets/cinechum.png";
import githubfinder from "../../assets/github-finder-repo.png";
import feedbackproject from "../../assets/feedback-project.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={sitescripter}
          link="https://sitescripter-ul.netlify.app/"
          h3="SiteScripter"
          p="eBook Store"
        />
        <ProjectCard
          src={cinechum}
          link="https://yatharthshah-cinechum.netlify.app/"
          h3="CineChum"
          p="Movie Recommendation App"
        />
        <ProjectCard
          src={githubfinder}
          link="https://yatharth-githubfinder.netlify.app/"
          h3="Github Finder"
          p="Github User Search App"
        />
        <ProjectCard
          src={feedbackproject}
          link="https://github.com/Yatharth2001/Feedback-Project-Repo"
          h3="Feedback Project"
          p="Feedback Collection Repo"
        />
      </div>
    </section>
  );
}

export default Projects;
