// add money section start
document
  .getElementById("addMoneyBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let amount = parseFloat(getInputValueById("amount"));
    let pin = parseInt(getInputValueById("pin"));
    let accountNumber = getInputValueById("accountNumber");
    let mainBalance = getInnerTextById("mainBlance");
    let selectedBank = document.getElementById("allBank").value;

    if (amount < 0) {
      alert("Type positive number");
      return;
    }

    if (accountNumber.length === 11) {
      if (pin.toString().length === 4) {
        // Update main balance
        setInnerTextById("mainBlance", mainBalance + amount);

        // Log transaction
        let transactionsContainer = document.getElementById(
          "transactionsContainer"
        );

        let div = document.createElement("div");
        div.innerHTML = `
        <h1>Added amount from this number: ${accountNumber}</H1>
        <p>Added mooney from this: ${selectedBank} Bank</P>
        <p>Added mooney: ${amount} TK</P>
        `;
        transactionsContainer.appendChild(div);
      } else {
        alert("Incorrect PIN");
      }
    } else {
      alert("Invalid phone number");
    }
  });
// add money section end

// cash out money section start
document
  .getElementById("withdrawMoneyBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let cashoutAmount = parseFloat(getInputValueById("cashoutAmount"));
    let cashoutPin = parseInt(getInputValueById("cashoutPin"));
    let cashoutAccountNumber = getInputValueById("cashoutAccountNumber");
    let mainBalance = getInnerTextById("mainBlance");

    if (mainBalance < cashoutAmount) {
      alert("Invalid cash out amount");
      return;
    }
    if (cashoutAccountNumber.length === 11) {
      if (cashoutPin.toString().length === 4) {
        setInnerTextById("mainBlance", mainBalance - cashoutAmount);
        // Log transaction
        let transactionsContainer = document.getElementById(
          "transactionsContainer"
        );

        let p = document.createElement("p");
        p.innerText = `Cashout ${cashoutAmount} from this ${cashoutAccountNumber} account`;
        transactionsContainer.appendChild(p);
      } else {
        alert("Incorrect PIN");
      }
    } else {
      alert("Invalid phone number");
    }
  });
// cash out money section end
