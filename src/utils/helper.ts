export const convertCrlfToBr = (text: string): string => {
  if (text === "") {
    return text;
  } else {
    return text.replace(/\r?\n/g, "<br>");
  }
};

type Value = any;
type Obj = Record<string, Value>;

export const objectToArray = <T extends Obj>(object: T): Array<{ value: any; label: string }> => {
  const newArray = [];
  for (const [key, value] of Object.entries(object)) {
    newArray.push({ value: value, label: key });
  }
  return newArray;
};

export const identity = <T extends Obj>(arg: T) => arg;
