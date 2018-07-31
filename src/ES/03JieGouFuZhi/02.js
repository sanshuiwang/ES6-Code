//对象解构

//数组，对象 混合解构
let obj = {
  p: ['hello',{y: 'world'}]
}

let {p,p: [x,{y}],p:[m,n]} = obj
console.log('let {p,p: [x,{y}],p:[m,n]} = obj');
console.log(x);
console.log(y);
console.log(p);
console.log(n);

//三次解构
const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
}
let {loc, loc: {start}, loc: {start: {line}}} = node
console.log('let {loc, loc: {start}, loc: {start: {line}}} = node');
console.log(loc);
// {
//   start: {
//     line: 1,
//     column: 5
//   }
// }
console.log(start);
// {
//   line: 1,
//   column: 5
// }
console.log(line); // 1

//嵌套赋值
let obj01 = {};
let arr01 = [];
({ foo: obj01.prop, bar: arr01[0] } = { foo: 123, bar: true });
console.log('({ foo: obj01.prop, bar: arr01[0] } = { foo: 123, bar: true });');
console.log(obj01);
console.log(arr01);


//默认值
var {x04 = 3} = {x04: undefined};
console.log('var {x04 = 3} = {x04: undefined};');
console.log(x04);

//属性x等于null，因为null与undefined不严格相等，所以是个有效的赋值，导致默认值3不会生效。
var {x05 = 3} = {x05: null};
console.log('var {x05 = 3} = {x05: null};');
console.log(x05);


// 报错
//Uncaught TypeError: Cannot read property 'bar00' of undefined
// let {foo00: {bar00}} = {baz00: 'baz00'};
console.log('let {foo00: {bar00}} = {baz00: "baz00"};');
console.log('let foo00 = {baz00: “baz00”};');
console.log('foo00.bar00');
// console.log(bar00);

//已经声明变量解构正确做法
//不加大括号：：
// let x09;
// {x09} = {x09: 1};
// console.log(x09);
//因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
let x09;
({x09} = {x09: 1});
console.log(x09);

//数组的对象解构
//由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构
let arrNew = ['m','n','v']
let {1: first, [arrNew.length -1]: last, length} = arrNew
console.log('数组的对象解构方式解构：：');
console.log(first);
console.log(length);
