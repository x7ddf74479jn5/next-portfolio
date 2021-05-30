import clsx from "clsx";
import React from "react";
import type { Service } from "src/contents/services";
import useIntersection from "src/hooks/useIntersection";
import styles from "src/styles/components/projects/ServiceItem.module.scss";

type Props = {
  animation?: "slideInLeft" | "slideInRight" | "";
  service: Service;
};

const ServiceItem: React.VFC<Props> = ({ animation, service }) => {
  const ref = React.useRef(null);
  const isIntersect = useIntersection(ref, { root: null, rootMargin: "0px", threshold: 0 });
  const className = animation
    ? clsx(styles.gridListItemFloated, { [styles[animation]]: isIntersect })
    : styles.gridListItemFloated;

  return (
    <article className={className} ref={ref}>
      <h3>{service.title}</h3>
      <small>{service.caption}</small>
      <img className={styles.mediaThumb} src={service.img.src} alt={service.img.alt} width={512} height={288} />
      <p>{service.description}</p>
    </article>
  );
};

export default ServiceItem;
