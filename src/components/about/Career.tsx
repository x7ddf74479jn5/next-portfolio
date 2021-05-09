import HeadLine from "src/components/about/HeadLine";
import { timelines } from "src/contents/timelines";
import styles from "src/styles/components/about/Career.module.scss";

import { WrapInSection } from "../layouts/Section";

const Career: React.VFC = () => {
  return (
    <WrapInSection id="career">
      <HeadLine>Career</HeadLine>
      <ul className={styles.timeline}>
        {timelines.map((timeline, index) => {
          return (
            <li key={index}>
              <time dateTime={timeline.datetime}>{timeline.datetime}</time>
              <div className={styles.timelineIcon}></div>
              <div className={styles.timelineBox}>
                <h3> {timeline.title} </h3>
                <p> {timeline.description} </p>
              </div>
            </li>
          );
        })}
      </ul>
    </WrapInSection>
  );
};

export default Career;
