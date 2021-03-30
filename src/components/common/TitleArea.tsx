import Breadcrumbs from "src/components/common/BreadCrumbs";

type Breadcrumb = {
  index: number;
  name: string;
  href: string;
};

type TitleAreaProps = {
  title: string;
  caption: string;
  // breadcrumbs: Breadcrumb[];
  // sampleId: string;
};

export const TitleArea = (props: TitleAreaProps) => {
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
