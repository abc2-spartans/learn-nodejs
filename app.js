import ls from "lodash";
import moment from "moment";

console.log("********** lodash **********\n");
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
  address: {
    street: "123",
    pincode: "110001",
  },
};

const snakeStr = snakeCase(str); // hello_world
const kebabStr = kebabCase(str); // hello-world
const capStr = capitalize(str); // Hello world
console.log({ snakeStr, kebabStr, capStr });

const newObj = omit(obj, ["city", "country"]);
console.log({ newObj });

const street = get(obj, "address.street");
console.log({ street });

const diff = difference([2, 1], [2, 3]);
console.log({ diff });

console.log("\n\n********** moment **********\n");
const now = moment();
console.log({ now });
const nowFormat = now.format("DD/MM/YYYY");
console.log({ nowFormat });

const date = moment("2021-01-01");
console.log({ date });

const date2 = moment("2021-01-01", "YYYY-MM-DD");
console.log({ date2 });

const date3 = moment("2021-01-01", "YYYY-MM-DD", true);
console.log({ date3 });

const date4 = moment("2021-01-01", "YYYY-MM-DD", true).format("DD/MM/YYYY");
console.log({ date4 });

const date5 = moment("2021-01-01", "YYYY-MM-DD", true).format(
  "DD/MM/YYYY hh:mm:ss"
);
console.log({ date5 });

const date6 = moment("2021-01-01", "YYYY-MM-DD", true).format(
  "DD/MM/YYYY hh:mm:ss A"
);
console.log({ date6 });

const date7 = moment("2021-01-01", "YYYY-MM-DD", true).format(
  "DD/MM/YYYY hh:mm:ss a"
);
console.log({ date7 });

const date8 = moment("2021-01-01", "YYYY-MM-DD", true).format(
  "DD/MM/YYYY hh:mm:ss a Z"
);
console.log({ date8 });

const date9 = moment("2021-01-01", "YYYY-MM-DD", true).format(
  "DD/MM/YYYY hh:mm:ss a ZZ"
);
console.log({ date9 });

const date10 = moment("2021-01-01", "YYYY-MM-DD", true).format(
  "DD/MM/YYYY hh:mm:ss a ZZZ"
);
console.log({ date10 });

// find date comparison

const date11 = moment("2021-11-01", "YYYY-MM-DD", true);
const date12 = moment("2021-05-01", "YYYY-MM-DD", true);

console.log(date11.isSame(date12));
console.log(date11.isSame(date12, "month"));

console.log(date11.isBefore(date12));
console.log(date11.isAfter(date12));

console.log(date11.isSameOrBefore(date12));
console.log(date11.isSameOrAfter(date12));

console.log(date11.isBetween("2020-01-01", "2022-01-01"));

console.log(date11.diff(date12));
console.log(date11.diff(date12, "days"));
console.log(date11.diff(date12, "months"));
