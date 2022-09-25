const billInput = document.getElementById('bill');
const personInput = document.getElementById('person');
const tipPerPerson = document.getElementById('tipAmount');
const totalPerPerson = document.getElementById('totalAmount');
const tips = document.querySelectorAll('.percentage');
const error = document.getElementById('error');
const tipCustom = document.getElementById('tip-custom');
const reset = document.getElementById('reset');

let billValue = 0.0;
let personValue = 0;
let tipValue = 0;


const calculateTip = () => {
  if (personValue >= 1){
    let tipAmount = (billValue * tipValue) / personValue
    let total = (billValue / personValue) + tipAmount
    tipPerPerson.innerHTML = `$ ${tipAmount.toFixed(2)}`;
    totalPerPerson.innerHTML = `$ ${total.toFixed(2)}`;
  }
}

const billInputFunc = (event) => {
  billValue = parseFloat(event.target.value);
  calculateTip();
}
const personInputFunc = (event) => {
  personValue = parseInt(event.target.value);
  calculateTip();
  if(personValue < 1){
    error.classList.remove('invisible');
    personInput.classList.add('focus:outline-pink-500', 'text-pink-500');
  } else {
    error.classList.add('invisible');
    personInput.classList.remove('focus:outline-pink-500', 'text-pink-500');
  }
}

const tipInputFunc = (event) => {
  tips.forEach(function (element){
    element.classList.remove('selected-tip');
  });
  tipValue = parseFloat(event.target.value) / 100;
  calculateTip();
}

billInput.addEventListener('input', billInputFunc);
personInput.addEventListener('input', personInputFunc);
tipCustom.addEventListener('input', tipInputFunc);

const handleClick = (event) => {
  tips.forEach(function (element){
    element.classList.remove('selected-tip');
  })
  event.target.classList.add('selected-tip');
  tipValue = parseFloat(event.target.innerHTML) / 100;
}

tips.forEach(function (val) {
  val.addEventListener('click', handleClick);
  calculateTip();
})

const resetFunc = () => {
  billInput.value = "";
  personInput.value = "";
  tipPerPerson.innerHTML = `$ ${(0.0).toFixed(2)}`;
  totalPerPerson.innerHTML = `$ ${(0.0).toFixed(2)}`;
}

reset.addEventListener('click', resetFunc);
