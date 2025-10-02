let a = 10,b=20;
let temp = 0;

temp = a;
a = b;
b = temp;

console.log(a,b);

let c = 10,d = 20;
c = c + d;
d = c - d;
c = c - d;
console.log(c,d);

let e = 10,f = 20;
[e,f] = [f,e];

console.log(e,f);