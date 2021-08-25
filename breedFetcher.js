const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error,response,body) => {
    let errorMsg = null;
    let desc = null;

    //Handle request errors .
    if (error) {
      errorMsg = error;
    } else if (error === null) {
      const data = JSON.parse(body);
      if (!data.length) {
        errorMsg = "Breed is unavailable";
      } else {
  
        desc  = data[0].description;
      }
  
    }
  
    //invoking the callback

    callback(errorMsg,desc);

  });
};

module.exports = { fetchBreedDescription };


