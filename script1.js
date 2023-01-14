// generating a random pin
function generatePin() {
  var pin = Math.floor(1000 + Math.random() * 9000);
  return pin;
}
// checking the pin

function checker(num, pin) {
  if (num == pin) {
    document.getElementById("pinMatched").style.display = "block";
    document.getElementById("pinNotMatch").style.display = "none";
  } else {
    document.getElementById("pinNotMatch").style.display = "block";
    document.getElementById("pinMatched").style.display = "none";
    document.getElementById("typedPin").value = "";
  }
}
// showing the pin

var generatebtn = document.getElementById("generatePin");
generatebtn.addEventListener("click", function () {
  document.getElementById("pinNotMatch").style.display = "none";
  document.getElementById("pinMatched").style.display = "none";
  document.getElementById("typedPin").value = "";
  pin = generatePin();
  document.getElementById("showPin").value = pin;
});

// getting user input

var digitContainer = document.getElementById("digitContainer");
digitContainer.addEventListener("click", function (Event) {
  document.getElementById("pinNotMatch").style.display = "none";
  document.getElementById("pinMatched").style.display = "none";
  var value = Event.target.innerText;
  var tag = Event.target.tagName;
  var html = Event.target.innerHTML;

  if (tag == "BUTTON") {
    if (value == "C") {
      document.getElementById("typedPin").value = "";
    } else if (html == '<i class="fas fa-backspace"></i>') {
      num = document.getElementById("typedPin").value;
      num = num.substr(0, num.length - 1);
      document.getElementById("typedPin").value = num;
    } else if (value == "Match Pin") {
      checker(num, pin);
    } else {
      num = document.getElementById("typedPin").value;
      num = num + value;
      document.getElementById("typedPin").value = num;
    }
  }
});
