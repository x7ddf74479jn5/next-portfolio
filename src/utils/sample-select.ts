import { sampleDetails } from "../contents/samples";

export const selectSample = (sampleId: string) => {
  return sampleDetails.find((sample) => {
    return sample.id === sampleId;
  });
};
