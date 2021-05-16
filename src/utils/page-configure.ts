import type { PageConfig } from "./page-config";
import { pageConfigCollection } from "./page-config";

export const configPage = (pageId: string): PageConfig => {
  return pageConfigCollection[pageId];
};
