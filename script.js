// Your code here
const table = document.getElementById("table1");
function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}
makeRow();
makeRow();
makeRow();

const button = document.getElementById("add-row");
button.addEventListener("click", makeRow);

table.addEventListener('click', colorize)
function colorize (event) {
  const target = event.target
    if (target.className.length) {
        target.className = ''
  } else {
    target.className = 'red'
  }
}
const select = document.getElementsByTagName('select')[0]
function changeEvent(event){
  console.log(event.target.value)
}
select.addEventListener('change', changeEvent)

let chosenColor = 'red'

select.addEventListener('change', function (event){
  chosenColor = event.target.value
})

function colorize (event) {
  const target = event.target
    if (target.className.length) {
        target.className = ''
  } else {
    target.className = chosenColor
  }
}

