import styles from "./HeroStyles.module.css";
import img1 from "../../assets/img1.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedLight from "../../assets/linkedin-light.svg";
import linkedDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import cv from "../../assets/Yatharth_Shah_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedInIcon = theme === "light" ? linkedLight : linkedDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={img1}
          alt="Profile Picture of Yatharth Shah"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Yatharth <br />
          Shah
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/yatharth-shah15/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/Yatharth2001" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Creative Frontend Developer skilled in <br /> React JS, HTML5,
          CSS3/SASS, Redux, and Node JS for responsive UIs.
        </p>
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
