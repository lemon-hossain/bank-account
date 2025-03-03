document.getElementById("cashout").style.display = "none";
document.getElementById("transactions").style.display = "none";

document.getElementById("addMoneyBox").addEventListener("click", function () {
  handelToggle("addMoney", "block");
  handelToggle("cashout", "none");
  handelToggle("transactions", "none");
});

document.getElementById("cashoutBox").addEventListener("click", function () {
  handelToggle("cashout", "block");
  handelToggle("addMoney", "none");
  handelToggle("transactions", "none");
});

document
  .getElementById("transactionsBox")
  .addEventListener("click", function () {
    handelToggle("transactions", "block");
    handelToggle("cashout", "none");
    handelToggle("addMoney", "none");
  });

function handelToggle(id, status) {
  document.getElementById(id).style.display = status;
}
