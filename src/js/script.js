function randomQuote() {
  fetch('https://api-phrase.herokuapp.com/getPhrase?count=1')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  	let myString = JSON.stringify(data[0].text);
   document.getElementById('quotation').innerHTML=myString;
  }).catch(error =>{
  	console.log(error);
  })

}
randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)


