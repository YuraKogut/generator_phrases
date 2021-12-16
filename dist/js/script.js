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


$( document ).ready(function(){
	  $( ".button" ).click(function(){ // задаем функцию при нажатиии на элемент с классом button
	    $( ".block-generator" ).fadeOut(); // плавно изменяя прозрачность скрываем все элементы <div>
	  });
	  $( ".button" ).click(function(){ // задаем функцию при нажатиии на элемент с классом button
	    $( ".block-generator" ).fadeIn(2000); // плавно изменяя прозрачность отображаем все элементы <div>
	  });
	});

$( document ).ready(function(){
	  $( ".button" ).click(function(){ // задаем функцию при нажатиии на элемент с классом button
	      $( ".lds-ring" ).removeClass('active').delay(100).fadeOut(300) // плавно изменяя прозрачность скрываем все элементы <div>
	  });
	   $( ".button" ).click(function(){ // задаем функцию при нажатиии на элемент с классом button
	      $( ".lds-ring" ).addClass('active').delay(100).fadeIn(300) // плавно изменяя прозрачность скрываем все элементы <div>
	  });
	    $( ".button" ).click(function(){ // задаем функцию при нажатиии на элемент с классом button
	      $( ".lds-ring" ).removeClass('active').delay(100).fadeOut(300) // плавно изменяя прозрачность скрываем все элементы <div>
	  });
	});
