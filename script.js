function myFunction() {
  document.getElementById("submitbutton").innerHTML = "Thank you for your order!";
}
let submitButton = document.getElementById("submitbutton");
submitButton.addEventListener("click", myFunction);