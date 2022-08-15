
// form submission vs ajax

// 1 功能
// user輸入資料 透過瀏覽器將資料送到伺服器後台處理

// 2 差別
// form submit: submit表單後須刷新頁面 無法回傳結果
// ajax: 保持非同步特性 無須重新重整頁面就可以執行請求並更新部分頁面 並回傳後台處理結果到前台 (在同一個頁面加上動態的資訊)

// 如果不需重整全部頁面 for user experience 就使用ajax去處理
// 減少user等待頁面重新loading的時間

// 3 情境
// 情況一：送出表單並刷新當前頁面 或者提交後跳轉到其他頁面
// => 這個時候我會使用form submit去處理
// 情況二：提交數據並展示後台返回的處理結果 
// => 這個時候用ajax去處理

// 但現在大家好像比較傾向使用AJAX去處理

// When sending a form with AJAX, you generate the POST request and not the browser, so you have more control over it. Even if you don't need that control to begin with, in time it might become necessary.

// AJAX vs Form Submission
// https://stackoverflow.com/questions/13293375/ajax-vs-form-submission#:~:text=a%20form%20submission%20is%20synchronous,does%20not%20reload%20the%20page.

// https://code-question.com/developer-blog/some-differences-between-form-submission-and-ajax-form-submission


// How To Submit AJAX Forms with JQuery
// https://www.digitalocean.com/community/tutorials/submitting-ajax-forms-with-jquery


// GET vs POST
// https://www.geeksforgeeks.org/difference-between-http-get-and-post-methods/


// onsubmit用法
// https://www.w3schools.com/tags/ev_onsubmit.asp