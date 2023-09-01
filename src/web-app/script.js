document.addEventListener("DOMContentLoaded", function() {
  const lengthSlider = document.querySelector(".pass-length input");
  const options = document.querySelectorAll(".option input");
  const copyIcon = document.querySelector(".input-box span");
  const passwordInput = document.querySelector(".input-box input");
  const passIndicator = document.querySelector(".pass-indicator");
  const generateBtn = document.querySelector(".generate-btn");
  
  const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~",
  };
  
  const lowercaseCheckbox = document.getElementById("lowercase");
  const uppercaseCheckbox = document.getElementById("uppercase");

  const updateCheckboxes = () => {
    lowercaseCheckbox.checked = true;
    uppercaseCheckbox.checked = true;
  };

  const generatePassword = () => {
    const selectedOptions = Array.from(options).filter(option => option.checked);
    const staticPassword = selectedOptions.map(option => characters[option.id]).join('');

    let randomPassword = "";
    let passLength = lengthSlider.value;

    for (let i = 0; i < passLength; i++) {
      let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
      randomPassword += randomChar;
    }
    passwordInput.value = randomPassword;
  };

  const updatePassIndicator = () => {
    passIndicator.id = lengthSlider.value <= 9 ? "weak" : lengthSlider.value <= 14 ? "medium" : "strong";
  };

  const updateSlider = () => {
    document.querySelector(".pass-length span").textContent = lengthSlider.value;
    generatePassword();
    updatePassIndicator();
  };

  const updateCheckboxesState = () => {
    const selectedCount = Array.from(options).filter(option => option.checked).length;

    options.forEach(option => {
      if (selectedCount === 1 && option.checked) {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    });

    generatePassword(); 
  };

  updateCheckboxes();
  updateSlider();
  updateCheckboxesState();

  const copyPassword = () => {
    const tempInput = document.createElement("input");
    tempInput.value = passwordInput.value; 
    document.body.appendChild(tempInput); 
    tempInput.select(); 
    document.execCommand("copy"); 
    document.body.removeChild(tempInput); 
    copyIcon.textContent = "check";
    copyIcon.style.color = "#4285F4";
    setTimeout(() => {
      copyIcon.textContent = "copy_all";
      copyIcon.style.color = "#707070";
    }, 1500);
  };

  copyIcon.addEventListener("click", copyPassword);
  lengthSlider.addEventListener("input", updateSlider);
  generateBtn.addEventListener("click", generatePassword);
  options.forEach(option => option.addEventListener("change", updateCheckboxesState));
});

