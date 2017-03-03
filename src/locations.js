/*
Next, create a page on which the locations for your company are listed. 
Create an array in which the name and coordinates for an office are located,
 as well as if they are open on weekends as a boolean value. 
As above, loop through the information (using a different type of loop this time) 
and display the entries for each location. If the office is open on weekends, also 
display that information via a nice text or image.
 */

var locations = [
    ["Austria", "../images/austria.jpg", "austria@example.com"],
    ["Italy", "../images/italy.jpg", "italy@example.com"],
    ["Spain", "../images/spain.jpg", "spain@example.com"]
    ["France", "../images/france.jpg", "france@example.com"]
    ["Germany", "../images/germany.jpg", "germany@example.com"]
]
function LocationConstructor(args) {
	
	// unpack args
	var name = args[0];
	var imageURL = args[1];
	var email = args[2];
	console.log('name: '+name);
	console.log('imageURL: '+imageURL);
	console.log('email: '+email);
	// items containing stuff
	this.name = $("<h3>")
	.addClass('item--header')
	.addClass('location--name').append(name);
	this.image = $("<div>")
	.addClass('item--image')
	.addClass('location--image').css('background-image', 'url(' + imageURL + ')');
	this.email = $("<a>")
	.addClass('item--link')
	.append(email)
	.addClass('location--email').attr('href', 'mailto:'+email);
	this.item = $('<div>').addClass('item').addClass('location');
	
	// sections to place items in
	var imageSection = $("<section>").addClass('image');
	var headerSection = $("<section>").addClass('header');
	var linkSection = $("<section>").addClass('link');

	this.image.appendTo(imageSection);
	this.name.appendTo(headerSection);
	this.email.appendTo(linkSection);

	this.item.append(imageSection).append(headerSection).append(linkSection);
	
}

function load() {
	// using for loop for each one
	for (var i=0; i<locations.length; i++) {
		var location = new LocationConstructor(locations[i]);
        $(location.item).appendTo('#locations')
	}
}

load();