// Your code here
const table = document.getElementById("table1")[0];
function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table1.appendChild(row);
}
makeRow();
makeRow();
