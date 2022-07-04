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

	

	for(i = count - x;i > 0; i = count - x){
		if(x = 1){
			console.log(`take _${x}_down, pass it around \n we have now ${count} bottles `)
		}
	}if(x > 1){
		console.log(`take _${x}_down, pass them around \n we have now ${count} bottles `)

	}

}countDown()


function takeDown(count){
	for (let i = 1; i < 99; i+=1){
		console.log(i);
	}
}
takeDown()

