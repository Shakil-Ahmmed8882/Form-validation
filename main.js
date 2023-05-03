// finding all the elements
const form = document.getElementById("form");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const display = document.getElementById("display");
const nameError = form.querySelector("div #nameError");
const numError = form.querySelector("div #numError");
const emailError = form.querySelector("div #emailError");
const passError = form.querySelector("div #passError");

// validating the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // error container
  // if fields were left empty
  let message = [];
  if (name.value === "") {
    message.push("Please enter your name ");
    nameError.innerHTML = message;
  }
  if (phone.value === "") {
    let message = [];
    message.push("Please enter your phone number");
    numError.innerHTML = message;
  }
  if (email.value === "") {
    let message = [];
    message.push("Please enter a valid email address");
    emailError.innerHTML = message;
  }

  if (password.value.length <= 6) {
    let message = [];
    message.push("Please enter your password & longer then 6 characters");
    passError.innerHTML = message;
    message = [];
  }

  // check if all fields are filled
  if (
    name.value !== "" &&
    phone.value !== "" &&
    email.value !== "" &&
    password.value.length > 6
  ) {
    //submit and collect the given datum
    form.submit;
    let userInfo = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      password: password.value,
    };
    // taking the given name and and giving a message
    setTimeout(function () {
      display.classList.add("dclass");
      display.innerHTML =
        "Thank you! " +
        "</br>" +
        "<b>" +
        userInfo.name +
        "," +
        "</b>" +
        " <p style='line-height:1.6; color:#000;'>for exerting little effort here. </br> We want to give you a message is <b style='color:red'>'Global Warming'</b> ! We know,every year the Glob is being a hot ball by lifting the temperature. Either by the assist of human resources or natural phenomena.My friennd! We want to remind you once again be concenrn about it. We have to save our next generation. </br> </br> - Thank you</p>";
    }, 400);

    // Clear the values out
    name.value = "";
    phone.value = "";
    email.value = "";
    password.value = "";
    nameError.innerHTML = "";
    numError.innerHTML = "";
    emailError.innerHTML = "";
    passError.innerHTML = "";
  }
});
