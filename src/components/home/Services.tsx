import Spacer from "src/components/layouts/Spacer";
import { services } from "src/contents/services";

import { NextArrowButton } from "../common/NextArrowButton";

const Services = () => {
  const slideInLeft = {
    class: "p-grid__list-item-floated animated slow slideInLeft",
    dataAnimate: "slideInLeft",
  };
  const slideInRight = {
    class: "p-grid__list-item-floated animated slow slideInRight",
    dataAnimate: "slideInRight",
  };
  return (
    <section className="c-section c-bg-primary">
      <div className="c-section-wrapin">
        <h2 className="p-headline__top">Services</h2>
        <hr className="c-section__line" />
        <Spacer size="sm" />
        <NextArrowButton label="事業内容" href="/about/#skills" />
        <Spacer size="md" />
        <div className="p-grid__list">
          {services.map((service, index) => {
            return (
              <article
                key={index}
                className={index % 2 === 0 ? slideInLeft.class : slideInRight.class}
                data-animate={index % 2 === 0 ? slideInLeft.dataAnimate : slideInRight.dataAnimate}
              >
                <h3>{service.title}</h3>
                <small>{service.caption}</small>
                <img className="p-media__thumb" src={service.img.src} alt={service.img.alt} />
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
