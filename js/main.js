// get all Inputs
let inputs = Array.from(document.querySelectorAll("input"));

// set Focus in first input
window.onload = function () {
  inputs[0].focus();
};

// set Array of codes
let codes = ["ZRFG", "FF11", "KGHJ"];
let result = "";

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function (params) {
    // condtion if input have one value
    if (inputs[i].value.length === 1) {
      //Add className has-code
      inputs[i].classList.add("has-code");
      //Remove the focus;
      inputs[i].blur();
      //Save the value in variable result
      result += inputs[i].value.toUpperCase();
      //Trigger the function verification with parametrs
      verificationCode(inputs, result, inputs, i);
    }
  });
}

function verificationCode(array, str, inputs, index) {
  //Search in all inputs have className "has-code"
  let filterInputHasCode = array.filter((item) =>
    item.classList.contains("has-code")
  );
  //verifier if length the array is 4
  if (filterInputHasCode.length === 4) {
    // Create element i
    let checking = document.createElement("i");
    // Set css properties
    checking.style.cssText = `transition: all 0.5s linear; font-size: 96px;`;
    //check if str in array Code
    if (codes.includes(str)) {
      //Add className
      checking.classList.add("far", "fa-check-circle");
      //Add color
      checking.style.color = "green";
      //Add element in show-result
      document.querySelector(".show-result").appendChild(checking);
    } else {
      //remove classeName
      checking.classList.remove("far", "fa-check-circle");
      //set new color
      checking.style.color = "red";
      // change classe with new class name
      checking.classList.add("far", "fa-times-circle");
      //Add element in show-result
      document.querySelector(".show-result").appendChild(checking);
      //romve element after 1s
      setTimeout(() => {
        document.querySelector(".show-result").firstElementChild.remove();
      }, 1000);
      //remove all values in inputs and classe
      inputs.forEach((item) => {
        item.value = "";
        item.classList.remove("has-code");
      });
      //set focus in the first element input
      inputs[0].focus();
      //reset reuslt
      result = "";
    }
  } else {
    //add focus in next element
    inputs[index].parentElement.nextElementSibling.children[0].focus();
  }
}
