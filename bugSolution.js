function foo(a, b) {
  return Number(a) + Number(b);
}

console.log(foo(1, '1')); // Output: 2

function foo(a,b){
  if(typeof a === 'string') a = Number(a);
  if(typeof b === 'string') b = Number(b);
  return a + b;
}
console.log(foo(1,'1')); //Output:2
console.log(foo('1','1')); //Output:2