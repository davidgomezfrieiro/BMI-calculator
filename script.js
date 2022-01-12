const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  
  // Para que sirve 'preventDefault'? Intenta averiguarlo
  e.preventDefault();
  
  console.log("Valor del input: ", e.target.weight.value + "Kg", e.target.height.value + "cm")
  
  // Tu código aquí --->
  
  const height = form.elements['height'];
  const weight = form.elements['weight'];
  let weightValue = weight.value;
  let heightValue = height.value;
  const imc = weightValue / ((heightValue * heightValue) / 10000);
  
  let results = document.querySelector("#results")
  results.innerHTML = imc;
  
  
});
