import ls from "lodash";

const arr = [1, [2, [3, [4]], 5]];

const arrFlat = ls.flatten(arr); // [1, 2, [3, [4]], 5]

const deepArrFlat = ls.flattenDeep(arr); // [1, 2, 3, 4, 5]

console.log({ arrFlat, deepArrFlat });

const sum = ls.sum(deepArrFlat);

console.log({ sum });

const { snakeCase, kebabCase, capitalize, omit, get, difference } = ls;
const str = "Hello world";
const obj = {
  name: "John",
  age: 25,
  city: "Delhi",
  country: "India",
};

const snakeStr = snakeCase(str);
const kebabStr = kebabCase(str);
const capStr = capitalize(str);
console.log({ snakeStr, kebabStr, capStr });

const newObj = omit(obj, ["city", "country"]);
console.log({ newObj });

const age = get(obj, "age");
console.log({ age });

const diff = difference([2, 1], [2, 3]);
console.log({ diff });
