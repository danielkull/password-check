const passwordToggleBtn = document.querySelector(".password-form__btn-toggle");
const passwordInput = document.querySelectorAll(".password-form__input");
const spanCheckEqual = document.querySelector(".check-equal");
const spanCheckLowerCase = document.querySelector(".check-lower-case");
const spanCheckUpperCase = document.querySelector(".check-upper-case");
const spanCheckNumbers = document.querySelector(".check-numbers");
const spanCheckForTenCharacters = document.querySelector(
  ".check-for-ten-characters"
);

passwordToggleBtn.addEventListener("click", (e) => {
  const button = e.target;
  if (button.innerText === "Show Password") {
    button.innerText = "Hide Password";
    passwordInput.forEach((textField) => {
      textField.type = "text";
    });
  } else {
    button.innerText = "Show Password";
    passwordInput.forEach((textField) => {
      textField.type = "password";
    });
  }
});

const input = Array.from(passwordInput);

input.forEach((inputElement) => {
  inputElement.addEventListener("input", (e) => {
    const firstPassword = input[0].value;
    const secondPassword = input[1].value;

    console.log(e.data);
    console.log(firstPassword, secondPassword);

    if (equalPasswords(firstPassword, secondPassword)) {
      console.log("Bumsidumsi");
      spanCheckEqual.innerText = "✅";
      performeFurtherChecks(firstPassword);
    } else {
      spanCheckEqual.innerText = "❌";
      spanCheckLowerCase.innerText = "❌";
      spanCheckUpperCase.innerText = "❌";
      spanCheckNumbers.innerText = "❌";
      spanCheckForTenCharacters.innerText = "❌";
    }
  });
});

function performeFurtherChecks(password) {
  if (containsLowerCase(password)) {
    spanCheckLowerCase.innerText = "✅";
  }

  if (containsUpperCase(password)) {
    spanCheckUpperCase.innerText = "✅";
  }

  if (containsNumbers(password)) {
    spanCheckNumbers.innerText = "✅";
  }

  if (atleastTenCharacters(password)) {
    spanCheckForTenCharacters.innerText = "✅";
  }
}

function equalPasswords(firstPassword, secondPassword) {
  return firstPassword === secondPassword;
}

function containsLowerCase(password) {
  return /[a-z]/.test(password);
}

function containsUpperCase(password) {
  return /[A-Z]/.test(password);
}

function containsNumbers(password) {
  return /[0-9]/.test(password);
}

function atleastTenCharacters(password) {
  return password.length >= 10;
}
