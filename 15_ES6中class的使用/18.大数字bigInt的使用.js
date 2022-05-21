// es11之前
const maxInt = Number.MAX_SAFE_INTEGER;
console.log(maxInt); //9007199254740991
console.log(maxInt + 1); //9007199254740992
console.log(maxInt + 2); //9007199254740992, 表示错误了

// es11之后： Bigint
const big = 9007199254740991n;
console.log(big + 19n); // 9007199254741010n

const num = 100;
console.log(big + BigInt(num));//9007199254741091n

// 大转小
const smallsum = Number(big);
console.log(smallsum);//9007199254740991
