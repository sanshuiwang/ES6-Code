//函数参数解构
//带默认值解构，参数对象无值（解构失败，就等于默认值）
function move({x = 0, y = 0} = {}){
  return [x,y]
}
console.log('move({x: 3, y: 3})');
console.log(move({x: 3, y: 3}));
console.log('move({x: 3})');
console.log(move({x: 3}));
console.log('move({})');
console.log(move({}));
console.log('move()');
console.log(move());

//无默认值解构，参数对象有值 （无默认值解构失败，就等于undefined）
function move01({x , y } = {x:0,y:0}){
  return [x,y]
}
console.log('move01({x: 3, y: 3})');
console.log(move01({x: 3, y: 3}));
console.log('move01({x: 3})');
console.log(move01({x: 3}));
console.log('move01({})');
console.log(move01({}));
console.log('move01()');
console.log(move01());

//有默认值，无参数
function move02({x = 0,y = 0}){
  return [x,y]
}
console.log();
console.log('move02()');
console.log(move02({x: 100,y:200}));
//console.log(move02());这个会报错说 x 没定义
console.log(move02({}));

//undefined就会触发函数参数的默认值
console.log('undefined就会触发函数参数的默认值');
let m = [1, undefined, 3].map((x = 'yes') => {
  console.log(x)
  return x
});
console.log(m);
// [ 1, 'yes', 3 ]
