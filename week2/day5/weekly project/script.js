
/*function playTheGame(){
	let ask = confirm("do you want to play a game?\nEither OK or Cancel.");
	if (ask === true){
		alert('cool lets start');
		let num = prompt('select a  number between 1-10!');
		console.log(num);
		num=Number(num);
		if(num > 0 && num <=10 ){
			alert('great!')
			let computerNumber = Math.floor(Math.random()* 11)

			compareNumbers(num,computerNumber)
		}else if(num < 0 && num > 10) {
			alert('Sorry it’s not a good number, Goodbye')
			return
		}else {
			alert('Sorry Not a number, Goodbye')
			return
		}
	}else {
		alert('no problem goodby!')
		return
	}
	
}

function compareNumbers(num,computerNumber){
	console.log(num , computerNumber)

	if(num === computerNumber){
		alert('great sucsses ! WINNER!!!')	
	}else if (num > computerNumber) {
		alert('Your number is bigger then the computer’s, guess again')
		num =prompt('guess again');
		compareNumbers(num,computerNumber)	
	}else if (num < computerNumber) {
		alert('Your number is smaller then the computer’s, guess again');
		num = prompt('guess again')
		compareNumbers(num,computerNumber)	
	} else {
		console.log('how did you do it?')
	}

}*/


//second option!

function playTheGame(){
	let question = "Would you like to play the game?\n Press OK to continue or Cancel to go out.";
	if(confirm(question) == false){
		alert(question = "No problem, Goodbye.."); 
	}
	return askForNumber()
}

function askForNumber() {
	let userNumber = prompt("Please enter a number from 1 to 10");
	userNumber = Number(userNumber);
	

	if (isNaN(userNumber)) {
		alert("I asked for a NUMBER. Goodbye.");
		return
	}
	else if (userNumber < 0 || userNumber > 10) {
		alert("I asked for a number from 1-10. Goodbye");
		return
	}
	else {
		var computerNumber = Math.floor((Math.random() * 11) + 0);
	}
	console.log(userNumber, computerNumber);
	let tries = 1
	while(compareNumbers(userNumber, computerNumber)){
		userNumber = Number(prompt("Try again"))
		tries++
		if (tries == 3) {
			return alert("Too many attempts")
		}
	}
}

function compareNumbers(userNumber, computerNumber) {
	if (userNumber===computerNumber) {
		alert("WINNER");
		return false
	}
	else if(userNumber > computerNumber) {
    //    userNumber = Number(prompt(askForNumber("Your number is bigger then the computer's, guess again"))
    alert("too big")
    return true

}

else if(userNumber < computerNumber) {
        // userNumber = Number(prompt("Your number is smaller then the computer's, guess again"))
        alert("too small")
        return true
        
    }
}
