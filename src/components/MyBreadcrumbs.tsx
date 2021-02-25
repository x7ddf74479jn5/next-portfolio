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

  return <ul className="u-text__breadcrumbs">{breadcrumbsList}</ul>;
};
