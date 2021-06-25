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

export const identity = <T extends Obj>(arg: T) => {
  return arg;
};

export const validateEmailFormat = (email: string) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(email);
};

export const validateRequiredInput = (...args: string[]) => {
  let isBlank = false;
  for (let i = 0; i < args.length; i = (i + 1) | 0) {
    if (args[i] === "") {
      isBlank = true;
    }
  }
  return isBlank;
};
