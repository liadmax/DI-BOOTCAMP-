 sum = (a, b) => {
 	return(a+b)
 }
 end = sum(4,8)
 console.log(end)
 

 // exercise 1


 kgToGram = (kg) => {return (kg*1000)}

 //gram =kgToGram(prompt('write a number in kg to convert to grams'))
 //console.log(` your kg equals to ${gram} grams`);
 

 ///exercise 2



 (function userDetails(name , userNumOfChidern ,partnerName,location,jobTitel){

 	let div = document.getElementById('containerOut');
 	let hth = document.createElement('h1')
 	let text =document.createTextNode(`You will be a ${jobTitel} in ${location}, and married to ${partnerName} with ${userNumOfChidern} kids.`);
 	console.log(text.data)
 })('john',4 ,'anat' ,'haifa','freelancer');
 /*another option is !
 userDetails(  prompt('how many children do you have?')
 	prompt('what is your wifes name?')
 	prompt('where do you work?')
 	prompt('what do you d for a living'),
 	)*/
 	//EXERCISE 3
 	


 	(function userName (nameUser){

 		let dive = document.getElementById('container');
 		let divImg = document.createElement('div')
 		let htw = document.createElement('h1')
 		let textWord =document.createTextNode(nameUser)
 		let newImg = document.createElement("img")

 		htw.appendChild(textWord)
 		dive.appendChild(htw)
 		
 		newImg.classList.add("d-inline-block", "align-top");
 		newImg.setAttribute("src","https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png")
 		divImg.appendChild(newImg)
 		newImg.setAttribute('style','width:30px; height:40px;')

 	})
 	('john');
// exercise 4 



function makeJuice (){
	function addIngredients (){
		let size = 'medium'
		let ingredientOne = 'orange'
		let ingredientTwo =''
		let ingredientThree = ''

	}

}




