document.getElementById("loginBtn").addEventListener("click", function (event) {
  event.preventDefault();
  let accountNumber = document.getElementById("accountNumber").value;
  let pin = document.getElementById("pin").value;
  if (accountNumber.length === 11) {
    if (pin.length === 4) {
      window.location.href = "main.html";
    } else {
      alert("Please type your valid pin");
    }
  } else {
    alert("Please type your valid phone number");
  }
});
