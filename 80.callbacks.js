// callback function 回呼函式

// https://medium.com/appxtech/%E4%BB%80%E9%BA%BC%E6%98%AFcallback%E5%87%BD%E5%BC%8F-callback-function-3a0a972d5f82

// https://www.w3schools.com/js/js_callback.asp

// 一個程式執行完之後再去執行另一個程式(有順序的)
// 把一個函式當作另一個函式的參數
// A callback is a function passed as an argument to another function.
// 讓函式控制參數函式的執行時機

// 下面是一個計算機ㄉ範例

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
}

myCalculator(5, 5);


// 也可以醬子寫

function myDisplayerS(something) {
    document.getElementById("demo").innerHTML = something;
}

function myCalculatorS(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculatorS(5, 5, myDisplayerS);
// 函式當參數使用不用加()
// 這邊的myCallback就是myDisplayerS


// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

// 所以才會說用AJAX的時候會很常用到回呼函式