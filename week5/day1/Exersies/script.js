// const fromjson = '{"result":true , "count":42}';///json
// const toobj =JSON.parse(fromjson);
// console.log(toobj.count);

// const fromobj = {username:"jon" ,age:42};
// const tojson = JSON.stringify(fromobj)

// console.log(tojson) 



let marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
    },
    bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
    },
    princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
    }
},
};
let tojson =JSON.stringify(marioGame,null,4);
console.log(tojson)