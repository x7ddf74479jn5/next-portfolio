import Image from "next/image";

import { NextArrowButton } from "../common/NextArrowButton";

const FirstView = () => {
  return (
    <section>
      <div className="p-grid__view-first" data-label="first-view">
        <Image src="/img/view/first-view.webp" alt="first-view" layout="fill" priority={true} />
        <div className="child">
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
