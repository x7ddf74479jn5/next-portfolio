import styles from "src/styles/components/home/Headline.module.scss";

const Headline: React.FC = ({ children }) => {
  return <h2 className={styles.headlineTop}>{children}</h2>;
};

export default Headline;
