
let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8,
		pear : 0.2
	}
};
//1
userCart['username']='John smith'
console.log(userCart);
//2

userCart.prices['pear'] *= 1.17;
console.log(userCart)
//3
let input = prompt("what fruit do you want? Apple, Banana, ot Pear?").toLowerCase();
console.log(`the price for that fruit is: ${userCart.prices[input]}`);

