// 1、导出方式一：
// import { add, sub } from "./math.js";
// import { priceFormat, timeFormat } from "./format.js";

// export {
//   add,
//   sub,
//   priceFormat,
//   timeFormat
// }

// 2、导出方式二：
// export { add, sub } from "./math.js";
// export { priceFormat, timeFormat } from "./format.js";

// 2、导出方式三：
export * from "./math.js";
export * from "./format.js";
