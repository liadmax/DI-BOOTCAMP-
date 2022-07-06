let div =document.querySelector('artical,h1');
console.log(div);
let p =document.querySelectorAll('P')
p[p.length - 1].remove()

function mYfunction(){
	document.getElementById('reel').style.backgroundColor = 'red'
}
function hide(){
	document.getElementById('demo').style.display = 'none'
}
function bold(){
	document.getElementById("bold").style.fontWeight = "bold";
}
////exercise 1

let myForm = document.forms[0];

myForm.addEventListener("submit", userInputs);

function userInputs(ev){
	ev.preventDefault();
	if(firstInputs.value.length > 0 || lastInputs.value.length > 0){
		let firstValue = myForm.elements.fname.value;
		let firstText = document.createTextNode(firstValue);
		let lastValue = myForm.elements.lname.value;
		let lastText = document.createTextNode(lastValue)
		let ulId = document.getElementsByClassName('usersAnswer')[0];

		let firstNameLi = document.createElement('li');
		firstNameLi.appendChild(firstText);

		let lastli = document.createElement('li');
		lastli.appendChild(lastText);

		ulId.appendChild(firstNameLi);
		ulId.appendChild(lastli);
	}
	firstInputs.value = "";
	lastInputs.value = "";
};
///exercise 2
//// exercise 3
//volum of a sphear



