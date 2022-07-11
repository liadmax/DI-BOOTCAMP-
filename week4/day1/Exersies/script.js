/ // let myArr = [10,11,12,15,20];
// // // const pair = myArr.forEach((number, index) => number % 2 == 0? `This numnber is pair ${number}` : `This number is not PAIR ${number}`;
// // :star2: Exercise 1 : Scope
// // Instructions
// // Analyse the code below, and predict what will be the value of a in all the following functions.
// // Write your prediction as comments in a js file.
// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
// // run in the console:
// q1()
// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }
// function q22() {
//     alert(a);
// }
// // run in the console:
// q22() //run first with taking first global variable
// q2()//run de funtion that change the global variable
// q22()//after changing the function q2, now number 5
// //#3
// function q3() {
//     window.a = "hello";
// }
// function q32() {
//     alert(a);
// }
// // run in the console:
// q3() //create function
// q32() //alert what is inside var q3
// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
// // run in the console:
// q4()//function that change the global var and alert after the change
// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);//if not invoked because if is not a function that could change a global var
// :star2: Exercise 2 : Ternary Operator
// Instructions
// Using the code below:
// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.
// function winBattle(){
//     return true;
// }
const winBattle = () => {
    true
    return ;
}
let experiencePoints1 = winBattle == true ? 10 : 1;
console.log(experiencePoints1)
//     :star2: Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
// Example:
let isString1 = (value) => typeof value === 'string';
isString1('hello');
isString1(1,2,3);
    // :star2: Exercise 4 : Colors
    // Instructions
    // Using this array :
    // Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
    // Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
    // Hint : Use the array methods taught in class. Look at the lesson Array Methods.
    let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
    colors.forEach((colors , index) =>{
        console.log(`${index + 1}# choice is ${colors}`);
    });
    let result = colors.some((color)=> color === 'Violet')
    if (result){
    })