export const convertCrlfToBr = (text: string) => {
  if (text === "") {
    return text;
  } else {
    return text.replace(/\r?\n/g, "<br>");
  }
};
