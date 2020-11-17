import Link from "next/link";

import { Breadcrumbs } from "./Breadcrumbs";

type Breadcrumb = {
  index: number;
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};

export const AriaTitle = (props: BreadcrumbsProps) => {
  return (
    <section className="c-section">
      <div className="c-section__area-title animated fadeInLeft">
        <div className="p-headline__sub animated fadeInUp fast delay-1s">
          <h2>About</h2>
          <p>自己紹介</p>
          <Breadcrumbs breadcrumbs={props.breadcrumbs} />
        </div>
      </div>
    </section>
  );
};
