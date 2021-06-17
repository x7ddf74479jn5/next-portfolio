import Link from "next/link";
import { useRouter } from "next/router";
import styles from "src/styles/components/common/BreadCrumbs.module.scss";
import { internalLinks } from "src/utils/paths";

const createRoutingMap = (links: typeof internalLinks): { [k: string]: string } => {
  return Object.fromEntries(
    Object.entries(links).map(([k, v]) => {
      return [v, k.toUpperCase()];
    })
  );
};

const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname.split("/").filter((element) => {
    return element.length > 0;
  });
  const asPath = router.asPath.split("/").filter((element) => {
    return element.length > 0;
  });
  const length = pathname.length;
  const links = [];
  const routingMap = createRoutingMap(internalLinks);
  let pathnameHierarchy = "/";
  let asPathHierarchy = "/";

  for (let i = 0; i < length; i += 1) {
    const target = routingMap[pathnameHierarchy];

    links.push(
      target ? (
        <Link href={asPathHierarchy} key={asPathHierarchy}>
          <a>{target}</a>
        </Link>
      ) : (
        <Link href={asPathHierarchy} key={asPathHierarchy}>
          <a>{asPath[i]}</a>
        </Link>
      )
    );

    pathnameHierarchy += `${pathname[i]}/`;
    asPathHierarchy += `${asPath[i]}/`;
  }

  const deepest = routingMap[pathnameHierarchy]; // 最下層=現在のルーティングはクリックできないように<Typography>でリストを作成

  links.push(
    deepest ? (
      <span aria-current="page" key={asPathHierarchy}>
        {deepest}
      </span>
    ) : (
      <div key={asPathHierarchy}>{asPathHierarchy}</div>
    )
  );

  return (
    <ul className={styles.textBreadcrumbs} aria-label="Breadcrumbs">
      {links.map((link, index) => {
        return (
          <li key={index}>
            {link} {index !== links.length - 1 && <span>＞</span>}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
