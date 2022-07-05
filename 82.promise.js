// promise

// https://www.w3schools.com/js/js_promise.asp

// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Using_promises

// 非同步函數呼叫

// 語法

let myPromise = new Promise(function (ifSuccess, ifReject) {
    // "Producing Code" (May take some time)
    ifSuccess(); // when successful
    ifReject();  // when error
})

// promise可以綁定兩個參數(callback function)
// 一個成功時執行 一個失敗時執行
// 也可以只綁一個 看要在什麼時候執行
