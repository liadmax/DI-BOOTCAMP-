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





//----------exercise xp----------\\


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