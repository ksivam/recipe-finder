
function getValueOf(id) {
  return getElement(id).value;
}

function getElement(id) {
  return document.getElementById(id);
}

function createElement(tag) {
  return document.createElement(tag);
}

function append(parent, child) {
  parent.appendChild(child);
}

function addStyleClass(id, style) {
  id.classList.add(style);
}