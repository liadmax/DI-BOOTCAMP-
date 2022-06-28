let people = ['Greg', 'Mary', 'Devon', 'James'];
people.shift()
people[2]='jason'
people.push('liad');
let result = people.indexOf('Mary');
console.log(result)
console.log(people[0])
console.log(people.slice(1,3));
console.log(people.indexOf('Foo'));
//it returns -1 becuse the string dosent exists in the array so the return is -1.

let last = people[3]
console.log(last)
//part 1
for(let counter = 1;counter <= 4; counter ++){
	if (counter === 1) {
		console.log(people[0])
	}else if (counter === 2) {

		console.log(people[1])	

	}else if (counter === 3) {

		console.log(people[2])

	}else if (counter === 4) {

		console.log(people[3])	
	}
	
};
for(let count = 1; count <= 4;count ++){
	if (count === 1) {
		console.log(people[0])
	}else if (count === 2) {

		console.log(people[1])	

	}else if (count === 3) {

		console.log(people[2])

	}else if (count >= 4) break; {

	}
};
//part2
//exercise 1

let colors = ['blue','red','green','black','yellow'];
for(let num = 1;num <=5;num++){
	if (num === 1) {
		console.log(`my #1 choice is ${colors[0]}`)
	}else if (num === 2) {
		console.log(`my #2 choice is ${colors[1]}`)		
	}else if (num === 3) {
		console.log(`my #3 choice is ${colors[2]}`)	
	}else if (num === 4) {
		console.log(`my #4 choice is ${colors[3]}`)
	}else if (num === 5) {
		console.log(`my #5 choice is ${colors[4]}`)
		
	}
};
//exercise 2

/*let usernum = Number(prompt('select a number !'));
console.log(typeof usernum);
while (usernum < 10) {
	
	usernum =prompt('enter a new number')
};*/
//exercise 3

let building = {
	numberOfFloors : 4,
	numberOfAptByFloor : {
		firstFloor : 3,
		secondFloor : 4,
		thirdFloor : 9,
		fourthFloor : 2,
	},
	nameOfTenants : ["Sarah", "Dan", "David"],
	numberOfRoomsAndRent:  {
		sarah: [3, 990],
		dan :  [4, 1000],
		david : [1, 500],
	},
}
console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor['firstFloor'] + building.numberOfAptByFloor['thirdFloor'] )
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent['dan'] )//***
if () {}
