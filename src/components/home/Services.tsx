import React from "react";
import Headline from "src/components/home/Headline";
import { WrapInSection } from "src/components/layouts/Section";
import Spacer from "src/components/layouts/Spacer";
import ServiceItem from "src/components/projects/ServiceItem";
import type { Service } from "src/contents/services";
import { services } from "src/contents/services";
import styles from "src/styles/components/home/Services.module.scss";

import { NextArrowButton } from "../common/NextArrowButton";
import HorizontalRule from "./HorizontalRule";

type ServiceItem = {
  index: number;
  service: Service;
};

type ContainerProps = {
  index: number;
  service: Service;
};

const ServiceItemContainer: React.VFC<ContainerProps> = ({ index, service }) => {
  const animation = index % 2 === 0 ? "slideInLeft" : "slideInRight";

  return <ServiceItem animation={animation} service={service} />;
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
          return <ServiceItemContainer key={index} index={index} service={service} />;
        })}
      </div>
    </WrapInSection>
  );
};

export default Services;
