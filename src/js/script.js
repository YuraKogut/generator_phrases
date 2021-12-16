function randomQuote() {
	//зчитуємо дані з сервера(ссилка)
  fetch('https://api-phrase.herokuapp.com/getPhrase?count=1')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  	//звернення до масива(об"єкта")
  	let myString = JSON.stringify(data[0].text);
  	//звертаємось до параграфа
   document.getElementById('quotation').innerHTML=myString;
  })//для помилки
  .catch(error =>{
  	console.log(error);
  })

}
// виводимо функцію
randomQuote();
//клік обробляємо
document.querySelector("button").addEventListener('click', randomQuote)


