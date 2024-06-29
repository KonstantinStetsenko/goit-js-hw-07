const form = document.querySelector(".login-form");
form.addEventListener("submit", handlSubmit);

function handlSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };

  if (info.email === "" || info.password === "") {
    alert("All form fields must be filled in");
  } else {
    console.log(info);
  }

  event.currentTarget.reset();
}
