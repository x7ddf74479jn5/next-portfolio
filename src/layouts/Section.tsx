import styles from "src/styles/layouts/Section.module.scss";

export const WrapInWideSection: React.FC = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionWrapInWide}>{children}</div>
    </section>
  );
};
