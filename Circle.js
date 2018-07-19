var circle=require('./Mod_Circle')
const sqquare=require('./Mod_Square');
const mySquare=new sqquare(6);

console.log(`Area of the square is ${mySquare.area()}`);
console.log(`Area of the circle is ${circle.area(1)}`);
