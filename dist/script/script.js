
function studentDetails(){
    fetch('http://localhost:3000/lineDetails')
    .then(function(response) {
        console.log('response', response)
        return response.text();
      }).then(function(data) {
        console.log(data); // this will be a string
      });
}