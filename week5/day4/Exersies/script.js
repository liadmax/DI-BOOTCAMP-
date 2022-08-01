// fetch(url) // passing the url of the API as a parameter
// .then(function() {
//     // Handle the data from the API
// })
// .catch(function() {
//     // Handle any errors
// });


// console.log("Starting ...")


// const func = () => {
//   console.log("Working ...")
//   fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
//         .then((resp) => resp.json()) //return a promise
//         .then((resp) => 
//           console.log(`The hour of the sunrise in Tel Aviv is:
//             ${resp.results.sunrise}`))
//         .catch(function (error) {
//           console.log(`We got the error ${error}`)
//         });
//         console.log("Work Done ...")
//       }


//       func()


// let goodGrades = 88;

// let endSemester = new Promise((resolve, reject) => {
//   if (goodGrades > 90) {
//     resolve("Computer");
//   } else if ( goodGrades >= 80 && goodGrades <= 89) {
//     resolve("Phone");
//   } else {
//     reject("I won't get the gift");
//   }
// })

// const checkRequest = () => {
//   console.log('test 2')
//   endSemester
//   .then(value =>
//     console.log("I got an amazing gift : A ", value));
// }

// console.log('test 1')
// checkRequest()
// console.log('test 3')
// const fetchSunRise = async (endpoint) => {
//   const response = await fetch(endpoint);
//   if (response.status == 400) {
//     throw new Error("API - wrong link ")
//   } else {
//     console.log("response", response)
//         hey // undefined variable
//         let data = await response.json();
//         console.log("data", data)
//         let sunrise = data.results.sunrise
//         console.log(`The hour of the sunrise in Tel Aviv is: ${sunrise}`)
//       }
//     }


//     fetchSunRise("https://api.sunrise-sunset.org/json?lat=0.0853&lng=0.7818")
//     .catch((err) => console.log("Error", err))





// Exercise
// # Async Await
// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user -
// if the names are not a string -> reject
// else - resolve with the name of the 2 ppl
// 2. The 2nd function, receives a noun
// if the noun is less than 3 letters - reject
// else - resolve with the noun
// 3. The 3rd function, receives a city
// if the city doesn't start with an uppercase letter -> reject
// else - resolve with the city name
// 4. The 4st function, receives a verb (finishing with "ing")
//  if it doesn't end with "ing" -> reject (use the endWith string method)
// else resolve with the verb
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"
// ---
// 6. Part II. BONUS
// Instead of waiting for the promises to come back resolved, look at Promise.all method
// --> running the promises in Parallel
// --> check the difference of performance with performance.now()
// white_check_mark
// eyes
// raised_hands

// let nameone = 'kil'
// let nametwo = 'nate'
// async function famName(){
//   if(typeof nameone === "string" && typeof nametwo === "string"){
//     return 'good'

//   }else{
//     throw new Error('no numers only letters')
//   }
// };
// famName()
// let noun = 'dsf'

// async function newnoun(){
//  let result =await famName(nameone , nametwo)
//  if( noun.length <= 3 && noun.length > 0){
//   return 'good'
// }else if (noun.length > 3) {

//   throw new Error('to manny letters')
// }else{
//   throw new Error('no letters')
// }

// };newnoun()
// let city = 'London'
// async function cityuper(){

// }



// async function getname (fnOne, fnTwo){
//   if (typeof fnOne !== 'string' && typeof fnTwo !=='string'){
//     throw new Error('not a string')

//   }else{
//     return[fnOne,fnTwo]
//   }
// }


// async function getNoun(noun){
//  if( noun.length <= 3 ){
//   throw new Error (' too small')

// }else {
//   return noun
// }
// };

// async function getCity (city){
//   if(city.charAt(0) === city.charAt(0).toUpperCase()){
//     return city
//   }else{
//     throw new Error ('first letter is not UpperCase')

//   }

//   async function getVerb(verb){
//     if(verb.endswith('ing')){
//       return verb
//     }else {
//       throw new Error ('verb not good ')
//     }
//   }
// }
// async function getSentence() {
//   let names = await getname('guy', 'batak')
//   let noun = await getNoun('football')
//   let city = await getCity('Paris')
//   let verb = await getVerb('playing')
//   return (`${names[0]}is${verb} ${noun} with ${names[1]} in ${city}${verb}`)
// }
// getSentence()
// .then(result => console.log(result))










// //----------exercise xp----------\\


//original
// fetch("https://www.swapi.tech/api/starships/9/")
// .then(response => response.json())
// .then(result => console.log(result));

//async

async function newfun() {
  let response =  await fetch("https://www.swapi.tech/api/starships/9/")
  let result = await response.json()
  console.log(result)
}
newfun()

///exercise 1


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);//-step 4 the function finishes its timer and runs the promis
  });
}


async function asyncCall() {
    console.log('calling');//step 2 the function console logs 'calling' to the console.
    let result = await resolveAfter2Seconds();//step3 -resolveAfter2Seconds function is called and start runing (in 2 sec becus its on setTimeout) 
    console.log(result);// step 5 - the console log waits for the function to finish runing so it can print the value of result -'resolve'
  }///step 6 - end!

  asyncCall();
//step 1 -asyncCall is caled and activates the function.

