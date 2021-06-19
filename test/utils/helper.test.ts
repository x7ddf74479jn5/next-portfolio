import { convertCrlfToBr, identity } from "src/utils/helper";

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
