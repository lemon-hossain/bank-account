document
  .getElementById("addMoneyBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let amount = document.getElementById("amount").value;
    let convertedAmount = parseFloat(amount);
    let pin = document.getElementById("pin").value;
    let convertedPin = parseFloat(pin);
    let mainBlance = document.getElementById("mainBlance").innerText;
    let convertedmainBlance = parseFloat(mainBlance);

    if (amount && pin) {
      if (convertedPin === 1234) {
        let sum = convertedmainBlance + convertedAmount;
        document.getElementById("mainBlance").innerText = sum;
      }
    } else {
      alert("Please type your valid pin");
    }
  });

document
  .getElementById("withdrawMoneyBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let amount = document.getElementById("cashoutAmount").value;
    let convertedAmount = parseFloat(amount);
    let pin = document.getElementById("cashoutPin").value;
    let convertedPin = parseFloat(pin);
    let mainBlance = document.getElementById("mainBlance").innerText;
    let convertedmainBlance = parseFloat(mainBlance);

    if (amount && pin) {
      if (convertedPin === 1234) {
        let minus = convertedmainBlance - convertedAmount;
        document.getElementById("mainBlance").innerText = minus;
      }
    } else {
      alert("Please type your valid pin");
    }
  });

document.getElementById("cashout").style.display = "none";
document.getElementById("addMoneyBox").addEventListener("click", function () {
  document.getElementById("addMoney").style.display = "block";
});

document.getElementById("cashoutBox").addEventListener("click", function () {
  console.log("cashoutBoxhaha");
  document.getElementById("cashout").style.display = "block";
  document.getElementById("addMoney").style.display = "none";
});
