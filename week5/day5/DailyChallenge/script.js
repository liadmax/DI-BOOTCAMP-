//select elements in dom
const input_currency = document.querySelector('#input_currency');
const output_currency = document.querySelector('#output_currency');
const input_amount = document.querySelector('#input_amount');
const output_amount = document.querySelector('#output_amount');
const exchange = document.querySelector('#exchange');
const rate = document.querySelector('#rate');
//adding event listiner to the disierd actions
input_currency.addEventListener('change', compute);
output_currency.addEventListener('change', compute);
input_amount.addEventListener('input', compute);
output_amount.addEventListener('input', compute);
//exchanging betwwen currencys
exchange.addEventListener('click', ()=>{
    const temp = input_currency.value;
    input_currency.value = output_currency.value;
    output_currency.value= temp;
    compute();
});
// calculating input and output of currencys
function compute(){
    const input_currency1 = input_currency.value;
    const output_currency1 = output_currency.value;
//fetching api and json
fetch(`https://api.exchangerate-api.com/v4/latest/${input_currency1}`)
.then(res => res.json())
.then(res => {
    const new_rate = res.rates[output_currency1];
    rate.innerText = `1 ${input_currency1} = ${new_rate} ${output_currency1}`
    output_amount.value = (input_amount.value * new_rate).toFixed(2);
})
}

compute();//activate!!!!