const home: Route = { index: 0, name: "Home", href: "/" };
const about: Route = { index: 1, name: "About", href: "/about/" };
const contact: Route = { index: 1, name: "Contact", href: "/contact/" };
const samples: Route = { index: 1, name: "Samples", href: "/samples/" };
const portfolio: Route = { index: 2, name: "Portfolio", href: "/samples/portfolio/" };
const terms: Route = { index: 1, name: "Terms", href: "/terms/" };
const privacy: Route = { index: 1, name: "Privacy", href: "/privacy/" };

export const aboutRoute: Array<Route> = [home, about];
export const contactRoute: Array<Route> = [home, contact];
export const sampleRoute: Array<Route> = [home, samples];
export const portfolioRoute: Array<Route> = [home, samples, portfolio];
// export const sampleDetailRoute: Array<Route> = [home, samples,[id]];
export const termsRoute: Array<Route> = [home, terms];
export const privacyRoute: Array<Route> = [home, privacy];

type Route = {
  index: number;
  name: string;
  href: string;
};

// const dynamicRoute = (params) => {

// }
