import styles from "src/styles/components/layouts/Grid.module.scss";

export const GridRow: React.FC = ({ children }) => {
  return <div className={styles.gridRow}>{children}</div>;
};
