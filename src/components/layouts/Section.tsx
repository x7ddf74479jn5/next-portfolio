import clsx from "clsx";
import styles from "src/styles/components/layouts/Section.module.scss";

type Props = {
  children: React.ReactNode;
  background?: "primary" | "secondary" | "light";
  id?: string;
  wide?: boolean;
};

export const WrapInSection: React.FC<Props> = ({ children, background, wide = false, ...rest }) => {
  const outerClassName = clsx(styles.section, {
    [styles.bgPrimary]: background === "primary",
    [styles.bgSecondary]: background === "secondary",
    [styles.bgLight]: background === "light",
  });
  const innerClassName = wide ? styles.sectionWrapInWide : styles.sectionWrapIn;
  return (
    <section className={outerClassName} {...rest}>
      <div className={innerClassName}>{children}</div>
    </section>
  );
};
