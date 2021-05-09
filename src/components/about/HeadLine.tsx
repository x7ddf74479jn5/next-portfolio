import styles from "src/styles/components/about/Headline.module.scss";

const HeadLine: React.FC = ({ children }) => {
  return <h2 className={styles.headlineAbout}>{children}</h2>;
};

export default HeadLine;
