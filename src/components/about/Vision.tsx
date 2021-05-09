import HeadLine from "src/components/about/HeadLine";
import styles from "src/styles/components/about/Vision.module.scss";

import { WrapInSection } from "../layouts/Section";

const Vision: React.VFC = () => {
  return (
    <WrapInSection id={"vision"}>
      <HeadLine>Vision</HeadLine>
      <div className={styles.gridAbout}>
        <div className={styles.left}>
          <h3>
            人性の善なるは、
            <br />
            猶水の下きに就くがごときなり。
          </h3>
          <p className={styles.sub}>孟子 『性猶湍水也』</p>
          <p>
            孟子は人の生き様を川の流れに喩え、外部の不可抗力によって悪を為すと説明します。
            <br />
            手前の解釈ですが、人生の過程をどのように生きていきたいのか、それを考えさせられる言葉です。
          </p>
          <p>
            <b>生涯学習。</b>
            <br />
            たとえば、私がプログラミングの勉強を始めた契機でもあります。
            <br />
            一生を通して何かを学び続けていたい。
          </p>
          <p>
            失敗と挫折を繰り返してきました。
            <br />
            中には途中でやめてしまったものも少なくありません。
            <br />
            それでも、どこかの方角に向かって日々学びを欠かさずに過ごしています。
          </p>
          <p>
            私は私の人生の過程において学んだこと、その結果から生み出された価値を周りの誰かに提供できる人間になりたいと思っています。
            <br />
            私は直接お取引させていただくクライアント様だけでなく、
            画面の向こう側にいるエンドユーザーのためにサービスを作ります。
            <br />
            調理職として厨房で働いていたときから、お客様の顔は見えませんがずっと心掛けてきました。
          </p>
        </div>
      </div>
    </WrapInSection>
  );
};

export default Vision;
