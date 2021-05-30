import React from "react";
import HeadLine from "src/components/about/HeadLine";
import { WrapInSection } from "src/components/layouts/Section";
import ServiceItem from "src/components/projects/ServiceItem";
import styles from "src/styles/components/about/Skill.module.scss";

import { services } from "../../contents/services";
import type { Skill } from "../../contents/skills";
import { skills } from "../../contents/skills";

type Props = {
  skill: Skill;
};

export const SkillItem: React.VFC<Props> = ({ skill }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.head}>{skill.head}</h3>
      <div className={styles.data}>{skill.data}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <WrapInSection id="skills">
      <HeadLine>Skills</HeadLine>
      <p>技術と開発物は以下の通りです。</p>
      <div className={styles.gridList}>
        {services.map((service, index) => {
          return <ServiceItem service={service} key={index} />;
        })}
      </div>
      <ul className={styles.gridTable}>
        {skills.map((skill) => {
          return (
            <li key={skill.id}>
              <SkillItem skill={skill} />
            </li>
          );
        })}
      </ul>
    </WrapInSection>
  );
};

export default Skills;
