let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.pop(0);
fruits.sort();
fruits [3]='kiwi';
fruits[0]=''
fruits.reverse();

console.log(fruits);
console.log('check');
//exercise 1

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);