// 正規表示法 regular expression
// https://5xruby.tw/posts/15min-regular-expression
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


// 有兩種方法可以產生 regex物件

// 1. literal: 使用兩條斜線 在script載入時就會被即時編譯 效能較好
const regexA = /some text/;

// 2. 呼叫 RegExp 物件 適合用在需要動態產生pattern的場合
const regexB = new RegExp('some text');

// Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.

// ----------------------------------------

// 加上flag設定 使比對的能力更強大

// i：不區分大小寫
const regexC = /some text/i;

// g：比對字串所有位置
const regexD = new RegExp('some text', 'g');

// 





