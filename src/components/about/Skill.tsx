import { WrapInSection } from "src/components/layouts/Section";
import styles from "src/styles/components/about/Skill.module.scss";

import type { Service } from "../../contents/services";
import { services } from "../../contents/services";
import { skills } from "../../contents/skills";

type ServiceItemProps = {
  service: Service;
};

const ServiceItem: React.VFC<ServiceItemProps> = ({ service }) => {
  return (
    <article className={styles.gridListItemFloated}>
      <h3>{service.title}</h3>
      <small>{service.caption}</small>
      <img className={styles.mediaThumb} src={service.img.src} alt={service.img.alt} />
      <p>{service.description}</p>
    </article>
  );
};

const ServiceList: React.VFC = () => {
  return (
    <div>
      <div className={styles.gridList}>
        {services.map((service, index) => {
          return <ServiceItem service={service} key={index} />;
        })}
      </div>
    </div>
  );
};

const SkillTable: React.VFC = () => {
  return (
    <ul className={styles.gridTable}>
      {skills.map((skill) => {
        return (
          <li key={skill.id}>
            <h3 className={styles.head}>{skill.head}</h3>
            <div className={styles.data}>{skill.data}</div>
          </li>
        );
      })}
    </ul>
  );
};

const Skill = () => {
  return (
    <WrapInSection id={"skills"}>
      <h2 className={styles.headlineAbout}>Skills</h2>
      <p>技術と開発物は以下の通りです。</p>
      <ServiceList />
      <SkillTable />
    </WrapInSection>
  );
};

export default Skill;
