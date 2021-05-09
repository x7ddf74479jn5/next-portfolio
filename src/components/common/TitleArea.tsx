import clsx from "clsx";
import Breadcrumbs from "src/components/common/BreadCrumbs";
import styles from "src/styles/components/common/TitleArea.module.scss";

type TitleAreaProps = {
  title: string;
  caption: string;
};

export const TitleArea = (props: TitleAreaProps) => {
  const wrapperStyle = clsx(styles.sectionTitleArea, styles.fadeInLeft);
  const headlineStyle = clsx(styles.headlineSub, styles.fadeInUp);
  return (
    <section className={styles.section}>
      <div className={wrapperStyle}>
        <div className={headlineStyle}>
          <h2>{props.title}</h2>
          <p>{props.caption}</p>
          <Breadcrumbs />
        </div>
      </div>
    </section>
  );
};
