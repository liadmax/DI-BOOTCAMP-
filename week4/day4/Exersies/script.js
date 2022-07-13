let myObj = {
  name : "John",
  lastName : "Doe",
  age : 25,
  friends : ["Mark", "Lucie", "Ana"]
}
const numOfKey =Object.keys(myObj);
const numOfValues =Object.values(myObj)
console.log(numOfValues.length);
console.log(numOfKey.length);


const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };
console.log(admin);

///expected output: {admin :true name lydia age 21}


//exercise:
//# Object destructuring
//## Exercise1
//### Part I
//What does the following code return/print?*/
let facts = {numPlanet: 8, yearNeptuneDiscovered: 1846};
let {numPlanet, yearNeptuneDiscovered} = facts;
console.log(numPlanet); // 8
console.log(yearNeptuneDiscovered); // 1846

//  prints num of plants , yearNeptuneDiscovered 1846
/*---
## Exercise2
1. Modify the code below, and destructure the object in the parameter
(ie. you should have 3 parameters : name, house and goodstudents)
*/
function getDetails(name ,house ,goodstudent) {
  console.log(name, house, goodstudent)
}

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})



let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};




// ## Exercise2
// 1. Modify the code below, and destructure the object in the parameter
// (ie. you should have 4 parameters : name, house, friendName and age)


function getMoreDetails(objCharacter) {
  const {name, house,friend:{friendName,age}} = objCharacter
  console.log(name, house, friendName, age)
}

function getMoreDetailsOther({name, house,friend:{friendName,age}}) {
  console.log(name, house, friendName, age)
}

getMoreDetails(
  {name: 'Hermione Granger', 
  house: 'Gryfindor', 
  friend :  {
    friendName : 'Harry Potter', 
    age : 20
  }
})


getMoreDetailsOther(
  {name: 'Hary poter', 
  house: 'Gryfindor', 
  friend :  {
    friendName : 'ron wizly', 
    age : 21
  }
})


// ## Exercise3
// 1. Modify the code below, and destructure the object in the parameter
// (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)

const elonPerson = {
  first: 'Elon',
  last: 'Musk',
  housesLocation : ["new york", "paris"],
  twitter: '@elonmusk',
  company: 'Space X',
  houses : {
    amount: 2,
    value : "5Million"
  }
}

function getElonMuskDetails(objElon){
  const {
    first:firstname, 
    last:lastname, 
    housesLocation:[locationOne, locationTwo],
    houses : {value : valueHouses}
  } = objElon

  console.log(firstname, lastname)
  console.log(locationOne, locationTwo, valueHouses)

}

/////exercise xp/////

const person = {
  name: 'John Doe',
  age: 25,
  location: {
    country: 'Canada',
    city: 'Vancouver',
    coordinates: [49.2827, -123.1207]
  }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//outputI am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


///exercise 1 

function displayStudentInfo(objUser ,first ,last){
  console.log(`your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

///exercise2

const users = { 
  user1: 18273,
  user2: 92833,
  user3: 90315 }
  console.log(users)







