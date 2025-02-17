const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  const userData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  if (!userData.email || !userData.password) {
    alert("All form fields must be filled in");
    return;
  }
  console.log(userData);
  loginForm.reset();
});
