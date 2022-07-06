//Exercise1

// 1. Add inside the HTML file a div of id "container" (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that changes the background color of the document, to the color of the button (do it directly in the JS)

let colors = ["blue", "yellow", "green", "pink"];

function addButton(){//adding buttons acording to the number of strings in the array
	let div = document.getElementById("containerbtn")
	for (let i = 0; i<colors.length; i++){
		let btn = document.createElement("button");
		let text = document.createTextNode(colors[i]);
		btn.classList.add("btn-big");
		btn.addEventListener("click", changeBackground);
		btn.appendChild(text);
		div.appendChild(btn)
	}
}

addButton() //calling the function ton creat buttons


function changeBackground (ev){ //reading the color that is on the button so we can display said color on the backgruond
	let colorBtn = ev.target.textContent
	document.body.style.backgroundColor = colorBtn;
}

// Exercise 2

let pics = [
"https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
"https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

//1. retrieve the button
let btnImage = document.getElementById("btnimg");
let div = document.getElementById("container");

btnImage.addEventListener("click", addImages)
//2. creating the buttons for the exact amount of picturs
function addImages(){
	for (let i = 0; i<pics.length; i++) {
		let newimg = document.createElement("img");
		newimg.classList.add("img-small")
		newimg.setAttribute("src", pics[i]);

		//create a deletebutton
		let btndelete =  document.createElement("button");
		let textbtn = document.createTextNode(`delete pic ${i+1}`)
		btndelete.appendChild(textbtn)
		btndelete.addEventListener("click", deleteImg)

		div.appendChild(btndelete)
		div.appendChild(newimg);
	}
}


function deleteImg(ev){
	// console.log(ev.target) //button we clicked
	// console.log(ev.target.nextElementSibling) //image that is a next sibling of the button
	let imgsibling = ev.target.nextElementSibling;
	imgsibling.remove()
}