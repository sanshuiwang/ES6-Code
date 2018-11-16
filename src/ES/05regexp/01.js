
//正确返回字符串长度
console.log('正确返回字符串长度');
function codePointLength(text) {
    var result = text.match(/[\s\S]/gu);
    console.log(100, result);
    return result ? result.length : 0;
}

var s = '𠮷𠮷ddd'

console.log(200, s.length);

console.log(300, codePointLength(s));

console.log('---------');
console.log('说明Y修饰符');
//lastIndex属性指定每次搜索的开始位置，g修饰符从这个位置开始向后搜索，直到发现匹配为止。
console.log('g-------');
const REGEX = /a/g;
REGEX.lastIndex = 2;
const match = REGEX.exec('xaya');
console.log(match.index);
console.log(REGEX.lastIndex);
console.log(REGEX.exec('xaya'));

//y修饰符同样遵守lastIndex属性，但是要求必须在lastIndex指定的位置发现匹配
//y修饰符的设计本意，就是让头部匹配的标志^在全局匹配中都有效
console.log('y-------');
const REGEX01 = /a/y;
REGEX01.lastIndex = 2;
console.log(REGEX01.exec('xaya'));
REGEX01.lastIndex = 3
const match01 = REGEX01.exec('xaya');
console.log(match01.index);
console.log(REGEX01.lastIndex);

//match
console.log('match() ----');
console.log('a1a2a3'.match(/a\d/y));    //跟感慨是学习正则一样，不带g就是一个返回值在数组里
console.log('a1a2a3'.match(/a\d/gy)); //返回所有匹配的值在数组中

//y确保了匹配之间不会漏掉字符，可以判断是否是像ABABAB这种字符串是否都为AB连词
console.log('token---y');
const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;




