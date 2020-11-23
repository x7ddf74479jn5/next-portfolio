import Link from "next/link";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";

// type RouteMapping = [
//   [s: string]: { title: string }];

type RouteMapping = {
  [s: string]: { title: string };
};
const routingMapping: RouteMapping = {
  "/": { title: "HOME" },
  "/about": { title: "ABOUT" },
  "/samples": { title: "SAMPLES" },
  "/samples/[sampleId]": { title: "" },
  "/contact": { title: "CONTACT" },
  "/terms": { title: "TERMS" },
  "/privacy": { title: "PRIVACY" },
};

// const routingMapping: RouteMapping = {
//   "/": { title: "Home" },
//   "/about": { title: "About" },
//   "/samples": { title: "Samples" },
//   "/samples/[sampleId]": { title: ""} ,
//   "/contact": { title: "Contact" },
//   "/terms": { title: "Terms" },
//   "/privacy": { title: "Privacy" },
// };

// type Props = {
//   sampleId?: string;
// } & WithRouterProps;

const Breadcrumbs: React.FC<WithRouterProps> = ({ router }) => {
  const pathname = router.pathname.split("/").filter((element) => element.length > 0);
  const asPath = router.asPath.split("/").filter((element) => element.length > 0);
  const length = pathname.length;

  // const routingMapping: RouteMapping = [
  //   "/": { title: "Home" },
  //   "/about": { title: "About" },
  //   "/samples": { title: "Samples" },
  //   "/samples/[sampleId]": { title: `${sampleId}` },
  //   "/contact": { title: "Contact" },
  //   "/terms": { title: "Terms" },
  //   "/privacy": { title: "Privacy" },
  // ]

  console.log(routingMapping["/"]);

  const links = [];
  let pathnameHierarchy = "/";
  let asPathHierarchy = "/";
  for (let i = 0; i < length; i += 1) {
    const target = routingMapping[pathnameHierarchy];
    links.push(
      target ? (
        <Link href={asPathHierarchy} key={asPathHierarchy}>
          <a>{target.title}</a>
        </Link>
      ) : (
        <Link href={asPathHierarchy} key={asPathHierarchy}>
          <a>{asPath[i]}</a>
        </Link>
      )
    );

    pathnameHierarchy += pathnameHierarchy.endsWith("/") ? pathname[i] : `/${pathname[i]}`;
    asPathHierarchy += asPathHierarchy.endsWith("/") ? asPath[i] : `/${asPath[i]}`;
  }
  console.log(pathnameHierarchy, asPathHierarchy);
  let deepest;

  if (pathnameHierarchy === "/samples/[sampleId]") {
    const sample = asPath[pathname.indexOf("[sampleId]")];
    const sampleTitle = sample.toUpperCase();
    deepest = { title: sampleTitle };
  } else {
    deepest = routingMapping[pathnameHierarchy]; // 最下層=現在のルーティングはクリックできないように<Typography>でリストを作成
  }

  links.push(
    // deepest ? <Link href={asPathHierarchy} key={asPathHierarchy}>{deepest.title}</Link> : <Link href={asPathHierarchy} key={asPathHierarchy}>{asPathHierarchy}</Link>
    deepest ? <span key={asPathHierarchy}>{deepest.title}</span> : <div key={asPathHierarchy}>{asPathHierarchy}</div>
  );

  return (
    <ul className="u-text__breadcrumbs">
      {links.map((link, index) => (
        <li key={index}>
          {link} {index !== links.length - 1 && <span>＞</span>}
        </li>
      ))}
    </ul>
  );
};

export default withRouter(Breadcrumbs);

// import React from 'react';

// import { withRouter } from 'next/router';

// const routingMapping = {
//   '/': { title: 'トップページ' },

//   '/users': { title: 'ユーザー一覧' },
//   '/users/[userId]': { title: 'ユーザー詳細' },
//   '/users/[userId]/orders': { title: '注文一覧' },
//   '/users/[userId]/orders/[orderId]': { title: '注文詳細' },

//   '/items': { title: '商品一覧' },
//   '/items/[itemId]': { title: '商品詳細' },
//   '/items/[itemId]/edit': { title: '商品編集' },

//   '/about': { title: 'このサイトについて' },
// };

// const Breadcrumbs = props => {
//   const classes = useStyles(props);
//   const pathname = props.router.pathname
//     .split('/')
//     .filter(element => element.length > 0);
//   const asPath = props.router.asPath
//     .split('/')
//     .filter(element => element.length > 0);
//   const length = pathname.length;

//   const links = [];
//   let pathnameHierarchy = '/';
//   let asPathHierarchy = '/';
//   for (let i = 0; i < length; i += 1) {
//     const target = routingMapping[pathnameHierarchy];
//     links.push(
//       target ? (
//         <Link color="inherit" className={classes.link} href={asPathHierarchy} key={asPathHierarchy} >
//           {target.title}
//         </Link>
//       ) : (
//         <Link color="inherit" className={classes.link} href={asPathHierarchy} key={asPathHierarchy} >
//           {asPath[i]}
//         </Link>
//       ),
//     );
//     pathnameHierarchy += pathnameHierarchy.endsWith('/') ? pathname[i] : `/${pathname[i]}`;
//     asPathHierarchy += asPathHierarchy.endsWith('/') ? asPath[i] : `/${asPath[i]}`;
//   }
//   const deepest = mapping[pathHierarchy]; // 最下層=現在のルーティングはクリックできないように<Typography>でリストを作成
//   links.push(
//     deepest ? (
//       <Typography color="textPrimary" className={classes.link} key={asPathHierarchy} >
//         {deepest.title}
//       </Typography>
//       ) : (
//       <Typography color="textPrimary" key={asPathHierarchy}>
//         {asPathHierarchy}
//       </Typography>
//     ),
//   );
//   return (
//     <Paper elevation={0} >
//       <Breadcrumbs separator="/" aria-label="breadcrumb">
//         {links.map(link => (link))}
//       </Breadcrumbs>
//     </Paper>
//   );
// };

// export default withRouter(Breadcrumbs);
