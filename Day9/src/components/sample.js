// const api_key= await fetch("https://type.fit/api/quotes");
// const api_json= await api_key.json()
// console.log(api_json)


// let a=fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });

//   console.log(a)

fetch("https://official-joke-api.appspot.com/random_joke")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log("Quotes:", data); // ✅ This is correct
  });
