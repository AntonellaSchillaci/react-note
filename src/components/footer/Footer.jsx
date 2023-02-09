import { SiLinkedin, SiGithub} from 'react-icons/si';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer>
      <p>Made with ♡</p>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
      <div>
        <a href="https://www.linkedin.com/in/antonella-schillaci-frontend-dev/" target="_blanck">
          <SiLinkedin className={styles.icon}/>
        </a>
        <a href="https://github.com/AntonellaSchillaci" target="_blanck">
          <SiGithub className={styles.icon}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
