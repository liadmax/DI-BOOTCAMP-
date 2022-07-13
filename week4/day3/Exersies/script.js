const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
///result bread, carrot, potato, chicken, apple, orange
//------2------
const country = "USA";
console.log([country]);
//result "usa"

//------Bonus------
let newArray = [...[,,]];
console.log(newArray);
///result indifined 

///exercise 1
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const firstNameUser =users.map((person) => `hello ${person['firstName']}`)
console.log(firstNameUser)

const justFullStack =users.filter((person) =>person['role'] === 'full stack resident')
console.log(justFullStack)


/// exercise 2 \


let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];




///exeercise 3

