
// MATH

Math.sign(-10); // znak +/-
Math.trunc(1.234);
Math.log10(1);

// NUMBER (static)

Number.isInteger(123) // true
Number.isInteger(1.23) // false

Number.isNaN(parseInt('www')) // true

Number.isFinite(123/0) // false
Number.isFinite(123) // true
Number.isFinite(1/3) // true !


const str = 'Ala ma kota';

str.startsWith('Ala') // true
str.startsWith('Alx') // false
str.startsWith('') // true !

str.endsWith('a'); // true
str.endsWith(''); // true !

str.includes('a ma k') // true
str.includes('a ma x') // false
str.includes('') // true !

'*'.repeat(10) // '**********'
