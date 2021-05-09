import clsx from "clsx";
import React from "react";
import { WrapInSection } from "src/components/layouts/Section";
import useIntersection from "src/hooks/useIntersection";
import styles from "src/styles/components/home/Vision.module.scss";

const Vision = () => {
  const ref = React.useRef(null);
  const isIntersect = useIntersection(ref, { root: null, rootMargin: "0px", threshold: 0 });
  const animation = styles.fadeInUp;

  return (
    <WrapInSection>
      <div className={styles.gridVision} ref={ref}>
        <h2 className={clsx({ [animation]: isIntersect })} data-animate="fadeInUp">
          人性の善なるは、
          <br />
          猶水の下きに就くがごときなり。
        </h2>
        <p className={clsx("sub", { [animation]: isIntersect })} data-animate="fadeInUp">
          孟子 『性猶湍水也』
        </p>
        <div data-label="description">
          <p className={clsx({ [animation]: isIntersect })} data-animate="fadeInUp">
            私が生きる上で、
            <br />
            もっとも大切にしている言葉です。
          </p>
          <p className={clsx({ [animation]: isIntersect })} data-animate="fadeInUp">
            生涯学び、生涯価値を生み出し続ける。
            <br />
            そして、
          </p>
          <p className={clsx({ [animation]: isIntersect })} data-animate="fadeInUp">
            クライアントのために、
            <br />
            画面の向こうのユーザーのために、
          </p>
          <p className={clsx({ [animation]: isIntersect })} data-animate="fadeInUp">
            社会を豊かにするために技術を提供します。
          </p>
        </div>
      </div>
    </WrapInSection>
  );
};

export default Vision;
