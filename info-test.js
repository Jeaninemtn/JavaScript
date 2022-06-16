

let items = document.querySelectorAll('.buy-list-item');

items = [...items];

for(let i of items){
    console.log(i.querySelector('a').getAttribute('href'));
    console.log(i.querySelector('.LongInfoCard_Type_Name').innerText);
    console.log(i.querySelector('.LongInfoCard_Type_Address span').innerText);

}

// https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/rest_spread.html