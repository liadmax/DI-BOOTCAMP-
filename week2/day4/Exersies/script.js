/*let myAge = prompt('what is your age?');
let momAge = myAge * 2;
let dadAge = momAge * 1.2
function Age (prompt) {
	console.log(`my moms age is ${momAge} and my ada is ${dadAge} years old.`)
}
Age()
//EXERCISE 1
let myAge = prompt('what is your age ?');
let momAge = myAge * 2;
function age (prompt){
	let result = 'my moms age is ' + momAge;
	return result
}
console.log(age())*/
//exercise 2



///-------exercise xp !!!!-------\\\
function infoAboutMe(){
	let name = 'liad'
	let age = 23
	let hobbies ='surfing'
	return infoAboutMe

}
//console.log(infoAboutMe());
//part 1
function About(name, Age, color){
	console.log(`your name is ${name} you are ${Age} years old and your favorite color is ${color}`)
}

//About('David', 45, 'blue')
//About('Josh', 12, 'yellow')



//part 2
//exercis 1



function calculateTip(){
	let bill = prompt("enter your amount")
	let less = bill * 1.2
	let between = bill * 1.15
	let more = bill * 1.1 
	if (bill <= 50){
		console.log("your charged 20%tip included " + Math.floor(less));
	}else if(bill > 50 || bill < 200){
		console.log("your charged 15% tip included " + Math.floor(between));
	}else if (bill > 200) {
		console.log("your charged 10% tip included " + Math.floor(more));
	}
}
//calculateTip()
//exercise 2 
function isDivisible (){
	for(let num =1; num <= 500;num ++){
		if(num % 23 == 0){
			console.log(num)
			
		}
	}
}
//isDivisible()





//exercise 3
let stock = { 
	"banana": 6, 
	"apple": 0,
	"pear": 12,
	"orange": 32,
	"blueberry":1
}  

let prices = {    
	"banana": 4, 
	"apple": 2, 
	"pear": 1,
	"orange": 1.5,
	"blueberry":10
}

let shoppingList = ['banana', 'orange' ,'apple']
function myBill(){
	

}

myBill()
//exercise 4

function hotelCost(){
	let howManyNights = prompt('how many nights are you planning to stay?')
	if(howManyNights > 0){
		
	}else {
		alert('you need to input a number,refresh the page and try again.')

	}
	return console.log(`great! it will be 140 $ per night so in total  for ${howManyNights} nights it will be ${howManyNights * 140} dollars`)
}



function planeRideCost(){
	let flyTo = prompt('where are you flying to?').toLowerCase()
	if(flyTo === 'london'){
		console.log(`great your flight to london will cost 183 $`)
	} else if( flyTo === 'paris'){
		console.log(`great your flight to paris will cost 220 $`)
	}else if (flyTo !='paris' !='london') {
		console.log(`your flight will cost 300$`)

		
	}
}


function rentalCarCost(){
	let carDay = prompt('for how many days whold you like to rent a car?')
	if (carDay > 0 && carDay <= 10) {
		console.log(`great! your total is ${carDay * 40} dollars`)	
	}else if (carDay > 10) {
		console.log(`great you get a discount so insted ${carDay * 40} your total is ${(carDay * 40) *0.95} dollars (5% off)`)
		
	}else {
		alert('refresh the page and insert a number!')
	}

}
hotelCost()
planeRideCost()
rentalCarCost()
let totalCost = function totalVacationCost(){

	alert(`your total for this vecation is a lot`)
}

totalCost()


























//exercise 6



