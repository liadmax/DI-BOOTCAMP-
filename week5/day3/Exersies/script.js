// let chuckNorris = new Promise(function (resolve, reject) {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'json'

//     xhr.onload = function () {
//         if (xhr.status != 200) {
//             reject(xhr);
//         } else {
//             resolve(xhr);
//         }
//     };

//     xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);
//     xhr.send();
// })

// chuckNorris.then(x => console.log(`Joke :  ${x.response.value}`))
// chuckNorris.catch(error => console.log(`Error ${error.status}`))
// chuckNorris.finally(() => console.log(`I love Chuck Norris!`))


// console.log(chuckNorris)



// exercise xp

function compareToTen(num){

    const pro = new Promise((resolve, reject) =>{
        if(num <= 10){
            resolve('good')
        }else {
            reject('bad')
        }

    }

    )}



    // compareToTen(15)
    // .then(result => console.log(result))
    // .catch(error => console.log(error))

//In the example, the promise should resolve
// compareToTen(8)
// .then(result => console.log(result))
// .catch(error => console.log(error))


//exercise 1

function newfunc(input){

    let pro = new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (typeof input === 'string') {
                resolve("success");
            } else {
                reject("fail");
            }
        }, 4000);
    })

    return pro
};



newfunc('this is a string')
.then((message)=>{
    console.log( message +' successful')
});
newfunc('this test was').catch((message) =>{
    console.log('oops somthing went wrong ' )

}); 


//exercise 2


let promise = Promise.resolve(1);

promise.then(function(val) {
    if(val == 3){
        console.log(val)
    }else {
        console.log('fail')
    };
})
promise.catch(function(){
    console.log('oops error not found 404')
});
//Output: 17468



///exercise 3














// // # EXERCISE 1
// // Create a function that takes in a single parameter
// // and returns a new promise.
// // Using setTimeout, after 5000 milliseconds, the promise will either
// // resolve or reject.
// // If the input is a string, the promise resolves with that same string
// // uppercased.
// // If the input is anything but a string it rejects with that same input.
// // Use `then` to repeat the string twice
// // use `catch` to console.log the error
// // finally call a function that console.log ("congratulation")


// function newfunc(input){

//     let pro = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             if (typeof input === 'string') {
//                 resolve("success");
//             } else {
//                 reject("fail");
//             }
//         }, 5000);
//     })

//     return pro
// };



// newfunc('then')
// .then((message)=>{
//     console.log(`success ` + message)
// });
// newfunc('then').catch((message) =>{
//     console.log('fail ' + message)

// }); 
