let url = ('http://www.omdbapi.com/?i=tt3896198&apikey=8d140873');

fetch('url')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });