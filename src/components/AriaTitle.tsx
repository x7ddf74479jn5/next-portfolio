import Link from "next/link";

// import { Breadcrumbs } from "./MyBreadcrumbs";
import Breadcrumbs from "src/components/BreadCrumbs";

type Breadcrumb = {
  index: number;
  name: string;
  href: string;
};

type AriaTitleProps = {
  title: string;
  caption?: string;
  breadcrumbs?: Breadcrumb[];
  sampleId?: string;
};

export const AriaTitle = (props: AriaTitleProps) => {
  console.log(props);
  return (
    <section className="c-section">
      <div className="c-section__area-title animated fadeInLeft">
        <div className="p-headline__sub animated fadeInUp fast delay-1s">
          <h2>{props.title}</h2>
          <p>{props.caption}</p>
          <Breadcrumbs />
        </div>
      </div>
    </section>
  );
};
