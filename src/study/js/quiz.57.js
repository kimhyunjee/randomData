// (57) What's the output?
// counter.js
let counter = 10;
export default counter;
// index.js
import myCounter from './counter';

myCounter += 1;

console.log(myCounter);


// A | 10B | 11C | ErrorD | NaN

/** 읽기전용 어떻게 구분하는지? */