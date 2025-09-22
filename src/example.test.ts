import { add } from "./example";

describe("Premier Test TDD", () => {
  test("should fail initially", () => {
    expect(add(1, 2)).toBe(3); // Ça va fail car add n'existe pas !
  });
});
