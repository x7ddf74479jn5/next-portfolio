import styles from "src/styles/layouts/Section.module.scss";

export const WrapInSection: React.FC = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionWrapInWide}>{children}</div>
    </section>
  );
};

export const WrapInWideSection: React.FC = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionWrapInWide}>{children}</div>
    </section>
  );
};
