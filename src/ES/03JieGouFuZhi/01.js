//数组解构赋值
import 'babel-polyfill';
//数组中提取值，按照对应位置，对变量赋值。
let [a,b,c] = [1,2,3]
console.log('let [a,b,c] = [1,2,3] <br/> c')
console.log(1000,c)

//本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
let [foo,[[bar], baz]] = [1,[[2],3]]
console.log('let [foo,[[bar], baz]] = [1,[[2],3]]')
console.log("foo: "+foo)
console.log("bar: "+bar)
console.log("baz: "+baz)

let [m,n] = [1,[[2],3]]
console.log('let [m,n] = [1,[[2],3]]');
//(2) [Array(1), 3]
// 0: [2]
// 1: 3
// length: 2
console.log('n');
console.log(n);

//逗号间隔到指定位置，三点运算符，右边数组少于左边要赋值的变量
let [ , , third] = ["foo", "bar", "baz"];
console.log('third');
console.log(third); // "baz"

let [x, , y] = [1, 2, 3];
console.log('x,y');
console.log(x);  // 1
console.log(y);  // 3

let [head, ...tail] = [1, 2, 3, 4];
console.log('head, ...tail');
console.log(head); // 1
console.log(tail); // [2, 3, 4]

let [v, t, ...q] = ['a'];
console.log('v, t, ...q');
console.log(v); //'a'
console.log(t); //undefined
console.log(q); //[]

//下边解构不成功，k的值都会等于undefined
console.log('ku0.的值都会等于undefined');
let [ku01] = [];
console.log(ku01);
let [j, ku02] = [1];
console.log(ku02);


// 报错  .....is not iterable
//Invalid attempt to destructure non-iterable instance
//等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），要么本身就不具备 Iterator 接口（最后一个表达式）。
// let [foo01] = 1;
// let [foo02] = false;
// let [foo03] = NaN;
// let [foo04] = undefined;
// let [foo05] = null;
// let [foo06] = {};


//对于 Set 结构，也可以使用数组的解构赋值。
//事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
let [x01, y02, z03] = new Set(['a', 'b', 'c']);
console.log("let [x01, y02, z03] = new Set(['a', 'b', 'c'])");
console.log(x01);


//Generator函数原生具有Iterator接口，所以能够解构
// function* fibs(){
//   let a = 0;
//   let b = 1;
//   while(true){
//     console.log(100,a);
//     yield a;
//       console.log(200,a);
//     [a,b] = [b, a+b]
//       console.log(300,a);
//   }
// }
// let [first, second, third01, fourth, fifth, sixth] = fibs();
// console.log('sixth');
// console.log(sixth);
