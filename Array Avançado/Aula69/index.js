// concatenando array

const a1 = [1,2,3];
const a2 = [4,5,6];

// concat
const a3 = a1.concat(a2, [7,8,9], 'array');

//...rest / ...spread
const a4 = [...a1, 'array',...a2,...[7,8,9]];
console.log(a3)