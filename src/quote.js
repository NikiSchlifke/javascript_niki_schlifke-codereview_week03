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
    var price = getPrice(10, contents);
    console.log('Price: €' + price);

    $('#quote').append($('<p>').append('Price: €' + price));
    // fix page refresh
    return false;
})

function getCountryFactor(country) {

    switch (country) {
        case "Austria":
            return 1;

        case "Italy":
            return 0.8;

        case "Spain":
            return 0.9;

        case "France":
            return 1.2;

        case "Germany":
            return 1.3;

    }

}

function horsePowerFactor(horsepower) {
    var factor = 1 + Math.log(Number(horsepower));
    console.log(factor);
    return factor;
}

function ageFactor(age) {
    var factor = 1+Math.log(1+ Math.abs((30 - Number(age))));
    console.log(factor);
    return factor;
}

function getPrice(basePrice, parameterObj) {
    return basePrice * ageFactor(parameterObj.age) * horsePowerFactor(parameterObj.horsepower);
}
