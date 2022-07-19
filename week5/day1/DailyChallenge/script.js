function form(){
	let name = document.getElementsByTagName('form');
	console.log(name)
}
form()

const someVar = 'Cannot be reassigned';
try {
	someVar = 'Still going to try';
} catch(e) {
	console.log(e);
}
console.log("after")
