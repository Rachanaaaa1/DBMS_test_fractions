const Fraction = require('fraction.js');
const frac1 = new Fraction(3, 4);
const frac2 = new Fraction(1, 2);
const result = frac1.sub(frac2);
console.log(`The result of subtracting ${frac2} from ${frac1} is: ${result}`);
