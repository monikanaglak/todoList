import {adding} from "./app.js";

test("adds two to two", () => {
  expect(adding(2 + 2)).toBe(4);
});

test("adds 1 + 2 to equal 3", () => {
  expect(adding(1, 2)).toBe(3);
});
