console.log('es6花括号解析码点');
//码点一般都是十六进制（0x0000-oxFFFF）
//花括号解析出现解决了什么？四个字节储存字符解析
console.log(100, '\u{41}');

//for of 循环得出每个字符的码点，此方法能够得到32位的UTF-16
let s = '𠮷a';
for (let ch of s) {
  console.log(ch + ' 十六进制:');
  console.log(ch.codePointAt(0).toString(16));
}

//测试字符有两个字节还是四个字节组成
function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
}
console.log('两个字节还是四个字节的字符验证：')
console.log(200,is32Bit("𠮷"))
console.log(300,is32Bit("a"))

//
let str = 'Hello World!'
console.log('startsWith : ');
console.log(str.startsWith('Hel'));
console.log('endsWith : ');
console.log(str.endsWith('!'));
console.log('includes : ');
console.log(str.includes('llo'));

//字符串重复
console.log('  .repeat():');
console.log('na'.repeat(2));

//补全字符串头部和尾部
console.log('123.12'.padStart(10));
console.log('123333.12'.padStart(10));
console.log('09-12'.padStart(10, 'YYYY-MM-DD'));
console.log('2018-09-12'.padStart(10, 'YYYY-MM-DD'));


//模板字符串
//模板字符串和传统字符串添加变量以及多行的不同,总结

let name = 'william';
let newName = 'Yan';
console.log('模板字符串');
console.log(`I am ${name}, I will rename ${newName}.`);

//模板字符串花括号中可以进行的操作[模板字符串的大括号内部，就是执行 JavaScript 代码]
// 1.变量
// 2.对象 toString()
// 3.function 
// 4.dom,携带map计算

//模板使用<%...%>




