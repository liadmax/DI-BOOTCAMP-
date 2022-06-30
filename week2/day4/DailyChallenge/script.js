let word = prompt('say 5 words seperated by commas with "." between every word, and no more then 5 letters! ').split('.');
let star = word.length + 2

console.log(starUP) 
console.log('**********')
console.log(`*${word[0]}*`)
console.log(`*${word[1]}*`)
console.log(`*${word[2]}*`)
console.log(`*${word[3]}*`)
console.log(`*${word[4]}*`)
console.log('**********')
if(word[5] && word.length > 5){
	alert('too many words .only 5!')
}
console.log(word.length)

//my .words .are .thes .wby?