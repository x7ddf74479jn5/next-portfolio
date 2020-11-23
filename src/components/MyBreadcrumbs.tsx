import Link from "next/link";

type Breadcrumb = {
  index: number;
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const breadcrumbsList = props.breadcrumbs.map((bc) => {
    return (
      <li key={bc.index}>
        <Link href={bc.href}>{bc.name}</Link>
        {bc.index !== props.breadcrumbs.length - 1 && <span>＞</span>}
      </li>
    );
  });

  return (
    <ul className="u-text__breadcrumbs">{breadcrumbsList}</ul>
    // <section className="c-section">
    //   <div className="c-section__area-title animated fadeInLeft">
    //     <div className="p-headline__sub animated fadeInUp fast delay-1s">
    //       <h2>About</h2>
    //       <p>自己紹介</p>
    //     </div>
    //   </div>
    // </section>
  );
};
