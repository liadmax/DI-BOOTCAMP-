let input = document.querySelector('input');
let submit = document.querySelector('button');

submit.addEventListener("click", function(event){
    event.preventDefault()
    console.log(input.value);
    isNumber(input);
  });

  //checking if input contains a number

    function isNumber(input){
       let check = /\d/.test(input.value);
       if (check == true){
        alert("pleas try another input we do not accept numbers");
        } else {
          alert("great! you can continue");
      
        }
       
       
    }


    