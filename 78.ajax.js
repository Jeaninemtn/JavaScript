// AJAX

// https://tw.alphacamp.co/blog/ajax-asynchronous-request

// An event occurs 當有事件被觸發(例如點選按鈕)

// 客戶端透過瀏覽器(browser)向伺服器端(server)發送request resource(create an XMLHttpRequest Object by JavaScript and send request to the server)


// Http傳輸協定
// https://medium.com/pierceshih/%E7%AD%86%E8%A8%98-%E4%BD%95%E8%AC%82-http-%E5%82%B3%E8%BC%B8%E5%8D%94%E5%AE%9A-1d9b5be3fd24


// 伺服器端收到request後 處理完request後回應所要求的資源給瀏覽器(create a response and send data back to the browser)

// 瀏覽器端收到data後 由JavaScript去讀取並更新網頁內容

// AJAX其中一個優點是 可以部份更新網頁內容 只更新需要更新的部分就好 不用重新載入整個html檔

// 但現在也會使用 Fetch API instead of XMLHttpRequest Object

// 那非同步的意思就是:
// 不知道事件什麼時候會發生 但可以先把要發生的函式準備好 等到事件發生時就進行處理

// 當我們在串接第三方API時 由於要等待遠端伺服器回應 等待的時候有可能會大幅影響到使用者的體驗(會一直loading) 所以非同步請求變得更加重要

// 比較

// 同步請求(Synchronous request)：客戶端對伺服器端送出request並且在收到伺服器端的response之後才會繼續下一步的動作 等待的期間無法處理其他事情 這個作法並不理想 因為通常伺服器端的運算速度比本地電腦慢上好幾倍

// 非同步請求(Asynchronous request)：客戶端對伺服器端送出request之後 不需要等待結果 仍可以持續處理其他事情 甚至繼續送出其他request 待Responese傳回之後 就被融合進當下頁面或應用中

function loadDoc() {
    const xhttp = new XMLHttpRequest();  // create an XMLHttpRequest 物件
    xhttp.onload = function() {  // onload event 等頁面載入完成後就執行function(callback function)
      document.getElementById("demo").innerHTML = this.responseText;
      }
    xhttp.open("GET", "ajax_info.txt", true);  // true=非同步; false=同步
    xhttp.send();
  }

// 四步驟
// Create an XMLHttpRequest object  建立了一個XMLHttpRequest物件
// Define a callback function
// Open the XMLHttpRequest object   用open開啟一個URL
// Send a Request to a server       用send發出request給server
