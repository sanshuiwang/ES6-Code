
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



