// JSON=JavaScript Object Notation
// 是一種用來儲存跟傳遞資料的格式


JSON.parse()
// JavaScript has a built in function for converting JSON strings into JavaScript objects

JSON.stringify()
// JavaScript also has a built in function for converting an object into a JSON string


// ----------------------------------


obja = {
    name: "John",
    age: 30,
    car: null,
  };
  // JavaScript Objects
  // name/key : value
  // name/key不一定要是字串
  // 但是在JSON格式裡name/key一定是字串

  let personName = obja.name;
  let personAge = obja.age;

  console.log(personName, personAge);

  // ----------------------------------

  const txt = '{"name":"John", "age":30, "city":"New York"}';
  const objb = JSON.parse(txt);
  document.getElementById("demob").innerHTML = objb.name + ", " + objb.age;