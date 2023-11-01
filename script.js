let btn = document.querySelectorAll("span");
let value = document.getElementById("value");

//* The for loop lets us access every button
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    //* If the button pressed is "=", then it will calculate the total.
    if (this.innerHTML == "=") {
      //* This outputs error if input is invalid.
      try {
        value.innerHTML = eval(value.innerHTML);
      } catch {
        value.innerHTML = "ERROR";
        setTimeout(() => {
          value.innerHTML = "";
        }, 5000);
      }
    } else {
      //* If the button pressed is "Clear" then it clears the output.
      if (this.innerHTML == "Clear") {
        value.innerHTML = "";
      } else {
        //*If it's anything other than = and Clear, it'll add it to the string, which later gets calculated when = is pressed
        value.innerHTML += this.innerHTML;
      }
    }
  });
}
