const form = document.getElementById("registration-form");
const inputs = form.querySelectorAll("input[required]");
const submitButton = document.getElementById("submit-button");
const output = document.getElementById("form-output");

// Toggles the submit button based on whether all fields are filled.
function checkInputs() {
  const allFilled = Array.from(inputs).every(
    (input) => input.value.trim() !== "",
  );
  submitButton.disabled = !allFilled;
}

// Handles form submission and password validation.
function validatePasswords(password, confirmPassword) {
  return password === confirmPassword;
}

function setOutputSuccess() {
  output.textContent = "Success! Registration Complete.";
  output.className =
    "block text-center font-medium py-2 rounded-md text-green-700 bg-green-100";
}

function setOutputError(message) {
  output.textContent = message;
  output.className =
    "block text-center font-medium py-2 rounded-md text-red-700 bg-red-100";
}

function clearPasswordFields() {
  document.getElementById("password").value = "";
  document.getElementById("confirm-password").value = "";
}

function handleSubmit(event) {
  event.preventDefault();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (validatePasswords(password, confirmPassword)) {
    setOutputSuccess();
    form.reset();
    checkInputs();
  } else {
    setOutputError("Error: Passwords do not match!");
    clearPasswordFields();
    checkInputs();
  }
}

// Attach listeners
inputs.forEach((input) => input.addEventListener("input", checkInputs));
form.addEventListener("submit", handleSubmit);

// Initial check
window.onload = checkInputs;
