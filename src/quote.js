/*
Lastly, create an input-page where a customer can ask for an insurance-quote. 
Create a form that takes the users name, age, gender, country of origin and 
horse-power of their car.
To reverence the data for the quote, use input fields for text and numbers, 
as well as one for select to offer a small range of countries. 
Upon clicking the button of the form, run a named function that does the following:
Create a JavaScript Object out of this data and save it in a variable.
Draw data from this object and run a calculation-logic of your choice,  
to arrive at a monthly insurance-offer. (For example men pay 20% more, but people 
from Italy get 10% discount).
Display the offer on the page.
It is wise to split concerns in your code in separate functions, so you might 
want to place an anonymous self-executing function within your main-function to 
for each of those steps.
Hint: to process the country of origin into numerical values, you can use a switch.
 */


function getContents() {
	return {
		firstName: document.getElementsByName('firstname')[0].value,
		lastName: document.getElementsByName('lastname')[0].value,
		age: document.getElementsByName('age')[0].value,
		gender: document.getElementsByName('gender')[0].value,
		origin: document.getElementsByName('origin')[0].value,
		horsepower: document.getElementsByName('horsepower')[0].value,
		residence: document.getElementsByName('residence')[0].value
	}
}

// fix page refresh
$("#quote--form").submit(function(e) {
    e.preventDefault();
});
$('#quote--submit')[0].addEventListener("click", function() {
	var contents = getContents();
	console.log(contents);
	// fix page refresh
	return false;
})

