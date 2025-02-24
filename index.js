const entryType = document.getElementById("entryType");
const name = document.getElementById("name");
const amount = document.getElementById("amount");
let counter = 1;

function addRow() {
  let table = document.getElementById("table").getElementsByTagName("tbody")[0];

  // Create a new row
  let newRow = table.insertRow();

  // Insert new cells
  let numberCell = newRow.insertCell(0);
  let nameCell = newRow.insertCell(1);
  let amountCell = newRow.insertCell(2);
  let typeCell = newRow.insertCell(3);
  let deleteCell = newRow.insertCell(4);

  // Add text to cells
  numberCell.textContent = counter++;
  nameCell.textContent = name.value;
  amountCell.textContent = amount.value;
  typeCell.textContent = entryType.value;

  //create a delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.style.backgroundColor = "#fff";
  deleteBtn.style.border = "none";

  deleteBtn.onclick = function () {
    newRow.remove();
    numberCell.textContent = counter--;
  };

  deleteCell.appendChild(deleteBtn);
}
