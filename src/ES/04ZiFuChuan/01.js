
console.log("\uD842\uDFB7");
console.log("\u20BB7");
console.log("\u{20BB7}");
console.log("\u{20BB7}" === "\uD842\uDFB7");
console.log('es6花括号解析码点');
//码点一般都是十六进制（0x0000-0xFFFF） 码点：32位UTF-16
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

//对字符串含有字符的判断
let str = 'Hello World!'
console.log('startsWith : ');
console.log(str.startsWith('Hel'));
console.log('endsWith : ');
console.log(str.endsWith('!'));
console.log('includes: ');
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
console.log(1000, `Hello, ${{"a": 2}}`); //"Hello, [object Object]"
console.log(2000, {"a": 2}.toString()) //2000 "[object Object]"
// 3.function 
// 4.模板字符串嵌套（dom,携带map计算）
// 5.以func声明去引用模板字符串本身

//模板使用<%...%>


//标签模板
alert`123`

let a = 5;
let b = 10;

function tag(stringArr, ...values) {
  console.log(40000, stringArr);
  console.log(40001, values);
}

function tag01(stringArr, value1, value2){
  console.log(41000, stringArr);
  console.log(41001, value1);
  console.log(41002, value2);
  console.log(41003, stringArr.raw[0]);
  
}

tag`Hello ${ a + b } world ${ a * b }`

tag(['Hello ',' world ', ''], 15, 50)

tag01`Hello ${ a + b } world ${ a * b }`

//将各个参数按照原来位置拼合回去
let total = 30;
let msg = passthru`The total is ${total} (${total * 1.05} with tax)`
let msg01 = passthru01`The total is ${total} (${total * 1.05} with tax)`
function passthru(literals) {
  
  let result = ''
  let i = 0
  while (i < literals.length) {
    
    result += literals[i++]
    if(i < arguments.length){
      
      result += arguments[i]
    }
  }
  return result
}

console.log(42000, msg);

//采用rest参数还原位置拼合
function passthru01(literals, ...values) {
  let output = ""
  let index
  for (index = 0; index < values.length; index++) {
    output += literals[index] + values[index]
  }
  
  output += literals[index]
  return output
}

console.log(42001, msg01);

//标签模板作用;
//1.过滤html字符串
//2.i18n国际化处理(暂时不做重点)

//过滤字符串,防止用户恶意输入
let sender = '<script>alert("abc")</script>'
let message = SafeHTML`<p>${sender} has sent you a message.</p>`
function SafeHTML(templateData) {
  let s = templateData[0]
  for(let i = 1; i < arguments.length; i++){
    let arg = String(arguments[i])

    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")

    s += templateData[i]
  }
  return s
}
console.log(43000, message);

//i18n


//标签模板，传入数组参数具备raw属性,raw属性作用：这是为了方便取得转义之前的原始模板而设计的。
console.log`123`
tag02`First line\nSecond line`
function tag02(strings) {
  console.log(44000, strings);
  console.log(44001, strings[0]); //换行符
  console.log(44002, strings.raw); //不是换行符,是\\n
  console.log(44003, strings.raw[0]);
}
//限制：
// function tag03(strs){
//   debugger
// }
// tag03`\unicode and \u{55}` //js编译报错，实质是\unicode = undefind

//String对象raw属性
//String.raw方法，往往用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串。
//作用：：
//该属性会替换所有变量，对斜杠进行转义。
console.log(50000, String.raw`Hi\n{2+3}!`);
//转义过的会进行二次转义
console.log(50001, String.raw`Hi\\n`);
//作为正常的函数使用
console.log(50002, String.raw({raw: 'test'}, 0, 1, 2, 3));
console.log(500022, String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2, 3));
//raw实现代码
String.raw01 = function (strings, ...values) {
  let output = '';
  let index;
  for (index = 0; index < values.length; index++) {
    output += strings.raw[index] + values[index];
  }

  output += strings.raw[index]
  return output;
}
console.log(50003, String.raw01({ raw: 'test' }, 0, 1, 2));
console.log(500033, String.raw01({ raw: ['t','e','s','t'] }, 0, 1, 2));





