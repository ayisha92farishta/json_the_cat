const request = require('request');

//console.log("it works")
const entry = process.argv.slice(2);
//console.log(entry)

request(`https://api.thecatapi.com/v1/breeds/search?q=${entry}`,(error,response,body) => {
  
  //Handle request errors and print the error details to the screen.
  if (error) {
    return console.log("error: ", error);
  }
  
  const data = JSON.parse(body);
  
  //appropriate message if the requested breed is not found.
  if (!data.length) {
    return console.log("Breed is unavailable");
  }
  
  console.log(data[0].description);
 
});



