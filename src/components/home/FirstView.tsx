import Image from "next/image";
import styles from "src/styles/components/home/FirstView.module.scss";

import { NextArrowButton } from "../common/NextArrowButton";

const FirstView = () => {
  return (
    <section>
      <div className={styles.gridFirstView} data-label="first-view">
        <Image src="/img/view/first-view.webp" alt="first-view" layout="fill" objectFit="cover" priority={true} />
        <div className={styles.textArea}>
          <div>
            <h2>Pandashark</h2>
            <p>Web Engineer</p>
            <NextArrowButton label="Contact" href="/contact/" onDark />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstView;
