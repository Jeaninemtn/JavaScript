// 正規表示法 regular expression

// A regular expression is a sequence of characters that forms a search pattern.

// 正規表示法: 一種用來描述字串符合某個語法規則的模型(pattern)
// 可以用來做文字的搜尋 比對 萃取 替代 轉換等等
// 在許多的程式語言中都支援正規表達式的使用

// https://5xruby.tw/posts/15min-regular-expression
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://medium.com/joelifestory/regexp-%E6%AD%A3%E8%A6%8F%E8%A1%A8%E7%A4%BA%E6%B3%95%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-9e5cb95cf9f#:~:text=%E6%98%AF%E9%9B%BB%E8%85%A6%E7%A7%91%E5%AD%B8%E7%9A%84%E4%B8%80%E5%80%8B,%E6%9F%90%E5%80%8B%E6%A8%A1%E5%BC%8F%E7%9A%84%E6%96%87%E5%AD%97%E3%80%82


// 有兩種方法可以產生 regex物件

// 1. literal: 使用兩條斜線 在script載入時就會被即時編譯 效能較好
const regexA = /some text/;

// 2. 呼叫 RegExp 物件 適合用在需要動態產生pattern的場合
const regexB = new RegExp('some text');

// Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.

// ----------------------------------------

// 加上flag設定 使比對的能力更強大
// modifier

// i：不區分大小寫(case-insensitive)
const regexC = /some text/i;

// g：比對字串所有位置
const regexD = new RegExp('some text', 'g');

// ----------------------------------------

const regexE = /hello world/i;

// 使用test去比對字串是否符合pattern 回傳布林值
regexE.test('hello');  // false
regexE.test('hello world');  // true

// 使用exec取得比對的詳細資訊 比對失敗時回傳null

regexE.exec('hello');  // null
regexE.exec('hello world');  // ['hello world', index: 0, input: 'hello world', groups: undefined] 

// ----------------------------------------

// using string method

// search(): search for a match, and returns the position of the match
// 回傳位置

let textA = "Hello world!";
textA.search("world");  // 回傳6 
textA.search("hell");  // 回傳-1 代表找不到

textA.search(/HELL/i);  // 回傳0 h的位置?**

// replace(): returns a modified string where the pattern is replaced
// 回傳取代字串

textA.replace(/world/i, "stupid"); // 'Hello stupid!'

// ----------------------------------------

// https://www.w3schools.com/jsref/jsref_obj_regexp.asp


