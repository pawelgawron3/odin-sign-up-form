const passwordDOM = document.querySelector("input#password");
const confirmPasswordDOM = document.querySelector("input#confirm-password");
const btn = document.querySelector("#btn");

function checkPasswords() {
  let password = passwordDOM.value;
  let confirmPassword = confirmPasswordDOM.value;

  if (password !== confirmPassword) {
    alert("Passwords don't match!");
  }
}

btn.addEventListener("click", checkPasswords);
