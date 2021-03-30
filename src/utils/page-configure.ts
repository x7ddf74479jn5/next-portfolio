import { PageConfig, pageConfigCollection } from "./page-config";

export const configPage = (pageId: string): PageConfig => {
  return pageConfigCollection[pageId];
};
