const entryType = document.getElementById("entryType");
const name = document.getElementById("name");
const amount = document.getElementById("amount");
const totalIncome = document.getElementById("totalIncome");
const totalExpense = document.getElementById("totalExpense");
const balance = document.getElementById("balance");


function addRow(i) {
  let table = document.getElementById("table").getElementsByTagName("tbody")[0];

  // Create a new row
  let newRow = table.insertRow(i);

  // Insert new cells
  let dateCell = newRow.insertCell(0);
  let nameCell = newRow.insertCell(1);
  let amountCell = newRow.insertCell(2);
  let typeCell = newRow.insertCell(3);
  let deleteCell = newRow.insertCell(4);

  // Add text to cells
  dateCell.textContent = new Date().getMonth() + `/` + new Date().getDate() + `/`+ new Date().getFullYear();
  nameCell.textContent = name.value;
  amountCell.textContent = amount.value;
  typeCell.textContent = entryType.value;

  //calculate total income and total expense
  if (entryType.value === "↘") {
    totalIncome.textContent =
      Number(totalIncome.textContent) + Number(amount.value);
  } else if (entryType.value === "↗") {
    totalExpense.textContent =
      Number(totalExpense.textContent) + Number(amount.value);
  }

  // Calculate and update the balance
  balance.textContent =
    Number(totalIncome.textContent) - Number(totalExpense.textContent);

  //create a delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.style.backgroundColor = "#fff";
  deleteBtn.style.border = "none";

  deleteBtn.onclick = function () {
    newRow.remove(i);
  };

  deleteCell.appendChild(deleteBtn);
}
