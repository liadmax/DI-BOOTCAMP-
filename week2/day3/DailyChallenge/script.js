for(let num = 1; num <= 6;num ++){
	if (num ===1) {
		console.log('*')
	}if (num ===2) {
		console.log('**')
	}if (num ===3) {
		console.log('***')
	}if (num ===4) {
		console.log('****')
	}if (num ===5) {
		console.log('*****')
	}if (num ===6) {
		console.log('******')
	}
}
for (let i = 1; i < 7; i++){
	let mark='';
	mark += '*';

	console.log(mark.repeat(i));

    // console.log(mark.repeat(2));

    // console.log(mark.repeat(3));
    
    // console.log(mark.repeat(4));
    
    // console.log(mark.repeat(5));
    
    // console.log(mark.repeat(6));
}
let mark='*';
for (let i = 1; i < 7; i++){
	let mark='';
    // console.log(i)
    for (let m = 0; m < 7 ; m++){
    	mark += '*';
    }
    console.log(mark);
}





