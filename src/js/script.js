
function randomQuote() {
  fetch('https://api-phrase.herokuapp.com/getPhrase')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
   document.getElementById('quotation').innerHTML=JSON.stringify(data)
  }).catch(error =>{
  	console.log(error);
  })

}

randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)


