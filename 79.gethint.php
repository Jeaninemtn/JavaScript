<?php
// https://www.w3schools.com/js/js_ajax_php.asp
// Array with names
$a[] = "Anna";
// array_push($a,"Brittany"); 寫法一樣
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";

// get the q parameter from URL
$q = $_REQUEST["q"];
// request 用來收集送出表單後的資料
// 在這邊指的應該是input的value吧

$hint = "";
// hint預設空字串

// lookup all hints from array if $q is different from ""
if ($q !== "") {  // 如果$q不是空字串 那就執行以下
  $q = strtolower($q);  // Make a string lowercase 先把input的值轉為小寫
  $len = strlen($q);  // Get string length 抓input值的長度
  foreach ($a as $name) {  // 跑迴圈 去找有沒有符合的字串
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "no suggestion" : $hint;


// stristr() 用法

// The stristr() function searches for the first occurrence of a string inside another string. 找字串裡的字串(第一個出現ㄉ)，不區分大小寫

// https://www.w3schools.com/php/func_string_stristr.asp

// echo stristr("Hello world!", "WORLD");
// 從hello world去找world
// 印出world!

// 語法: stristr(string, search, before_search)
// 1. string字串: 要找的字串列 (Specifies the string to search) 
// 2. search: 要找的目標字串 (Specifies the string to search for)
// 3. before_search: (optional) A boolean value whose default is "false". If set to "true", it returns the part of the string before the first occurrence of the search parameter. 預設值為false, 如果設定true，會回傳目標字串*之前*的字串

// echo stristr("Hello world!", "WORLD", true);
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
// echo substr("Hello world", 10)."<br>";  // d
// echo substr("Hello world", 1)."<br>";  // ello world
// 記得點連接法ㄅ

// Negative numbers:
// echo substr("Hello world", -1);  // d
// echo substr("Hello world", -10);  // ello world