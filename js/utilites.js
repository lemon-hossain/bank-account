function getInputValueById(id) {
  return document.getElementById(id).value;
}

function getInnerTextById(id) {
  return parseFloat(document.getElementById(id).innerText);
}

function setInnerTextById(id, value) {
  document.getElementById(id).innerText = value;
}
