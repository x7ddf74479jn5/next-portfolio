import { convertCrlfToBr, identity } from "src/utils/helper";

import { validateEmailFormat, validateRequiredInput } from "../../src/utils/helper";

describe("convertCrlfToBr", () => {
  it("passes through if an argument contains no CR/LF", () => {
    expect(convertCrlfToBr("")).toBe("");
    expect(convertCrlfToBr("test")).toBe("test");
  });
  it("converts CR/LF into a br tag", () => {
    expect(convertCrlfToBr("\r\n")).toBe("<br>");
    expect(convertCrlfToBr("\n")).toBe("<br>");
    expect(convertCrlfToBr("test\ntest\n")).toBe("test<br>test<br>");
  });
});

describe("identity", () => {
  const data = {
    a: "a",
    b: "b",
  };
  it("returns the same object", () => {
    expect(identity(data)).toEqual(data);
  });
});

describe("validateEmailFormat", () => {
  it("returns false when given an invalid argument", () => {
    expect(validateEmailFormat("email")).toBeFalsy();
  });
  it("returns true when given an valid argument", () => {
    expect(validateEmailFormat("email@test.com")).toBeTruthy();
  });
});

describe("validateRequiredInput", () => {
  it("returns true when given an invalid argument", () => {
    expect(validateRequiredInput("")).toBeTruthy();
  });
  it("returns false when given an valid argument", () => {
    expect(validateRequiredInput("test")).toBeFalsy();
  });
});
