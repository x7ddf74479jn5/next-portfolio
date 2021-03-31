import { Timeline, timelines } from "src/contents/timelines";
import styles from "src/styles/components/about/Career.module.scss";
import { WrapInSection } from "../../layouts/Section";

const Career: React.VFC = () => {
  return (
    <WrapInSection id={"career"}>
      <h2 className={styles.headlineAbout}>Career</h2>
      <ul className={styles.timeline}>
        {timelines.map((timeline, index) => {
          return <TimelineItem timeline={timeline} key={index} />;
        })}
      </ul>
    </WrapInSection>
  );
};

type TimeLineItemProps = {
  timeline: Timeline;
};

const TimelineItem: React.VFC<TimeLineItemProps> = ({ timeline }) => {
  return (
    <li>
      <time dateTime={timeline.datetime}>{timeline.datetime}</time>
      <div className={styles.timelineIcon}></div>
      <div className={styles.timelineBox}>
        <h3> {timeline.title} </h3>
        <p> {timeline.description} </p>
      </div>
    </li>
  );
};

export default Career;
