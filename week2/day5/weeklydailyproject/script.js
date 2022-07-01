let x = 1
let count = 100
function countDown (){
	while (count > 0 ) {
		count = count - x
		if (count <= 0){
			break;
		}

		x +=1
		console.log(count)
	}

	

	for(i = count - x;i < 0; i = count - x){
		console.log(`take _${x}_down, pass it around \n we have now ${count} bottles `)

	}

}countDown()
let add = 0;
function takeDown(add){
	for (let i = 1; i < 99; i+=1){
		console.log(i);
	}
}
let addResult = takeDown(add);
console.log(addResult);





