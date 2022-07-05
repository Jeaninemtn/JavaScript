<?php

// stristr() 用法

// The stristr() function searches for the first occurrence of a string inside another string. 找字串裡的字串(第一個出現ㄉ)，不區分大小寫

// https://www.w3schools.com/php/func_string_stristr.asp

echo stristr("Hello world!", "WORLD");
// 從hello world去找world
// 印出world!

// 語法: stristr(string, search, before_search)
// 1. string字串: 要找的字串列 (Specifies the string to search) 
// 2. search: 要找的目標字串 (Specifies the string to search for)
// 3. before_search: (optional) A boolean value whose default is "false". If set to "true", it returns the part of the string before the first occurrence of the search parameter. 預設值為false, 如果設定true，會回傳目標字串*之前*的字串

echo stristr("Hello world!", "WORLD", true);
// 印出Hello


// ---------------------------------------------------


// substr() 用法

// The substr() function returns a part of a string. 回傳部分字串

// https://www.w3schools.com/php/func_string_substr.asp

// 語法: substr(string, start, length)
// 1. string: 要找的字串列
// 2. start: 從哪邊開始(會是數字) 如果是0就是從第一個字開始算
// 3. length: (optional) 規定要回傳的字串長度

// Positive numbers:
echo substr("Hello world", 10)."<br>";  // d
echo substr("Hello world", 1)."<br>";  // ello world
// 記得點連接法ㄅ

// Negative numbers:
echo substr("Hello world", -1);  // d
echo substr("Hello world", -10);  // ello world


// ---------------------------------------------------


// foreach Loop 迴圈

// The foreach loop works only on arrays, and is used to loop through each key/value pair in an array.

// 語法
// foreach ($array as $value) {
//     code to be executed;
// }

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
// Use array() function to create an array
// Use count() function to get the length of an array

foreach($age as $x => $val) {
  echo "$x = $val<br>";
}

// https://www.w3schools.com/php/php_looping_foreach.asp
// https://www.w3schools.com/php/php_arrays.asp