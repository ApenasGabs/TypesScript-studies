const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2');
const button = document.getElementById('somar');


const sum = (a,b) => {return a+b};

button.addEventListener("click", ()=>{
  console.log(sum(input1.value,input2.value))
})