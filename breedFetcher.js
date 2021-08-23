const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error,response,body) => {
  //defining the callback parameters
    let ActiveError;
    let desc;
    if (error !== null) {
      ActiveError = error;
    } else {
      ActiveError = false;
      const data = JSON.parse(body);
      desc = data[0].description;
    }
    //invoking the callback
    callback(ActiveError,desc);

  });
};

module.exports = { fetchBreedDescription };