//var作用域
var a = []
for(var i = 0; i < 10; i++){
  a[i] = function(){
    console.log('a')
    console.log(1000+i,i)
  }
}
a[6]()
a[7]()

//let作用域
let b = []
for(let j = 0; j < 10; j++){
  b[j] = function(){
    console.log('b')
    console.log(1000+j,j)
  }
}
b[6]()
b[7]()


//放在浏览器 console 直接运行会是输出三次
for(let m = 0; m < 3; m++){
  let m = 'abc'
  console.log(m)
}

//变量提升
// var 的情况
console.log('foo');
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况，不会变量提升
console.log('bar');
console.log(bar); // 报错ReferenceError，Uncaught ReferenceError: bar is not defined
let bar = 2;

//暂时性死区 temporal deed zone
if (true) {
  // TDZ开始
  console.log('tmp');
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
function barTwo(x = y, y = 2) {
  //参数x默认值等于另一个参数y，而此时y还没有声明，属于”死区“
  console.log('barTwo()');
  return [x, y];
}
console.log(barTwo())

//块级作用域
function f1(){
  let n = 5;
  if(true){
    let n = 10;
  }
  console.log('f1() --- n');
  console.log(n);
}
f1()

function f2() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f2() { console.log('I am inside!'); }
  }

  f2();
}());
