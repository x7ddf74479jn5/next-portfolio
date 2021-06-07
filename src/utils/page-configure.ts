import type { PageConfig } from "./page-config";
import { pageConfigCollection } from "./page-config";

export const configPage = (pageId: string): PageConfig => {
  return pageConfigCollection[pageId];
};

import { sampleDetails } from "../contents/samples";

export const selectSample = (sampleId: string) => {
  return sampleDetails.find((sample) => {
    return sample.id === sampleId;
  });
};
