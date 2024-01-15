// Event Listeners
document.getElementById("btn").addEventListener("click", CalculateFormula);
document.getElementById("+").addEventListener("click", AddNumbers);
document.getElementById("-").addEventListener("click", SubtractNumbers);

// Functions
// Inputs
function CalculateFormula() {
  let input1 = document.addEventListener("A").value;
  let input2 = document.addEventListener("B").value;
  let input3 = document.addEventListener("C").value;
}
function AddNumbers() {
  let input1 = +document.addEventListener("A").value;
  let input2 = +document.addEventListener("B").value;
  let input3 = +document.addEventListener("C").value;
}
function SubtractNumbers() {
  let input1 = -document.addEventListener("A").value;
  let input2 = -document.addEventListener("B").value;
  let input3 = -document.addEventListener("C").value;
}

//
