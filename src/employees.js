var employees = [
    ["Bill", "../images/bill.jpg", "bill@example.com"],
    ["Jill", "../images/jill.jpg", "jill@example.com"],
    ["Gill", "../images/gill.jpg", "gill@example.com"]
]
function EmployeeConstructor(args) {
	
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
	.addClass('employee--name').append(name);
	this.image = $("<div>")
	.addClass('item--image')
	.addClass('employee--image').css('background-image', 'url(' + imageURL + ')');
	this.email = $("<a>")
	.addClass('item--link')
	.append(email)
	.addClass('employee--email').attr('href', 'mailto:'+email);
	this.item = $('<div>').addClass('item').addClass('employee');
	
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
    employees.map(function(elem, index) {
    	var employee = new EmployeeConstructor(elem);
        $(employee.item).appendTo('#employees')
    })

}

load();