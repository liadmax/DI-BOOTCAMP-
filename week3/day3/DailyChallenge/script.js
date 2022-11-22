let input = document.querySelector('input');
let submit = document.querySelector('button');

submit.addEventListener("click", function(event){
    event.preventDefault()
    console.log(input.value);
    isNumber()
  });

  //checking if input contains a number

    function isNumber(input){
         /[0-9]/.test(input);
         console.log(input);
        
        }