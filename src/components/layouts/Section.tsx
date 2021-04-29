import styles from "src/styles/layouts/Section.module.scss";

type Props = {
  children: React.ReactNode;
  id?: string;
};

export const WrapInSection: React.FC<Props> = ({ children, id }) => {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.sectionWrapIn}>{children}</div>
    </section>
  );
};

export const WrapInWideSection: React.FC<Props> = ({ children, id }) => {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.sectionWrapInWide}>{children}</div>
    </section>
  );
};
