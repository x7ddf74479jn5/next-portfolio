import clsx from "clsx";
import React from "react";
import Headline from "src/components/home/Headline";
import { WrapInSection } from "src/components/layouts/Section";
import Spacer from "src/components/layouts/Spacer";
import type { Service } from "src/contents/services";
import { services } from "src/contents/services";
import styles from "src/styles/components/home/Services.module.scss";

import useIntersection from "../../hooks/useIntersection";
import { NextArrowButton } from "../common/NextArrowButton";
import HorizontalRule from "./HorizontalRule";

type ServiceItem = {
  index: number;
  service: Service;
};

const ServiceItems: React.VFC<ServiceItem> = ({ service, index }) => {
  const ref = React.useRef(null);
  const isIntersect = useIntersection(ref, { root: null, rootMargin: "0px", threshold: 0 });
  const styleSlideInLeft = clsx(styles.gridListItemFloatedLeft, { [styles.slideInLeft]: isIntersect });
  const styleSlideInRight = clsx(styles.gridListItemFloatedRight, { [styles.slideInRight]: isIntersect });

  return (
    <article
      key={index}
      className={index % 2 === 0 ? styleSlideInLeft : styleSlideInRight}
      data-animate={index % 2 === 0 ? "slideInLeft" : "slideInRight"}
      ref={ref}
    >
      <h3>{service.title}</h3>
      <small>{service.caption}</small>
      <img className={styles.mediaThumb} src={service.img.src} alt={service.img.alt} width={512} height={288} />
      <p>{service.description}</p>
    </article>
  );
};

const Services: React.VFC = () => {
  return (
    <WrapInSection background="primary">
      <Headline>Services</Headline>
      <HorizontalRule />
      <Spacer size="sm" />
      <NextArrowButton label="事業内容" href="/about/#skills" />
      <Spacer size="md" />
      <div className={styles.gridList}>
        {services.map((service, index) => {
          return <ServiceItems service={service} index={index} key={index} />;
        })}
      </div>
    </WrapInSection>
  );
};

export default Services;
