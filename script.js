let array = [];
let name = document.getElementById("nme");
let cnic = document.getElementById("cnic");
let email = document.getElementById("email");
let phn = document.getElementById("phn");
let btn = document.getElementById("btn");
let Rbtn = document.getElementById("register-button");
let tbl = document.getElementById("t-body");

btn.addEventListener("click", () => {
  let entry = {
    name: nme.value,
    cnic: cnic.value,
    email: email.value,
    phn: phn.value,
  };

  if (btn.innerText === "Update") {
    let index = btn.dataset.index;
    array[index] = entry;
    btn.innerText = "Add Task";
    delete btn.dataset.index;
    closeModal();
  } else {
    array.push(entry);
    closeModal();
  }

  clearInputs();
  displayData();
});

function clearInputs() {
  nme.value = "";
  cnic.value = "";
  email.value = "";
  phn.value = "";
}

function displayData() {
  tbl.innerHTML = "";
  array.forEach((entry, index) => {
    const tablerow = document.createElement("tr");

    const tabledata1 = document.createElement("td");
    tabledata1.innerText = entry.name;
    tablerow.appendChild(tabledata1);

    const tabledata2 = document.createElement("td");
    tabledata2.innerText = entry.cnic;
    tablerow.appendChild(tabledata2);

    const tabledata3 = document.createElement("td");
    tabledata3.innerText = entry.email;
    tablerow.appendChild(tabledata3);

    const tabledata4 = document.createElement("td");
    tabledata4.innerText = entry.phn;
    tablerow.appendChild(tabledata4);

    const actions = document.createElement("td");

    const del = document.createElement("button");
    del.innerText = "Delete";
    del.style.backgroundColor = "rgb(230, 227, 227)";
    del.style.border = "none";
    del.style.borderRadius = "10px";
    del.style.height = "20px";
    del.style.marginLeft = "6px";
    del.onclick = () => deleteEntry(index);
    actions.appendChild(del);

    const view = document.createElement("button");
    view.innerText = "View";
    view.style.backgroundColor = "rgb(230, 227, 227)";
    view.style.border = "none";
    view.style.borderRadius = "10px";
    view.style.height = "20px";
    view.style.marginLeft = "6px";
    view.onclick = () => viewdata(index);
    actions.appendChild(view);

    const edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.style.backgroundColor = "rgb(230, 227, 227)";
    edit.style.border = "none";
    edit.style.borderRadius = "10px";
    edit.style.height = "20px";
    edit.style.marginLeft = "6px";
    edit.onclick = () => editEntry(index);
    actions.appendChild(edit);

    tablerow.appendChild(actions);
    tbl.appendChild(tablerow);
  });
}

function deleteEntry(index) {
  array.splice(index, 1);
  displayData();
}

function editEntry(index) {
  const entry = array[index];
  nme.value = entry.name;
  cnic.value = entry.cnic;
  email.value = entry.email;
  phn.value = entry.phn;
  btn.innerText = "Update";
  btn.dataset.index = index;
  modalopen();
}

displayData();

// modal code

let modal = document.getElementById("modal");
Rbtn.addEventListener("click", () => {
  modalView();
});

function modalView() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function modalopen() {
  modal.style.display = "block";
}

// view page
let view = document.getElementById("viewpage");
function viewdata(index) {
  const entry = array[index];

  viewname.innerText = entry.name;
  viewcnic.innerText = entry.cnic;
  viewemail.innerText = entry.email;
  viewphn.innerText = entry.phn;

  viewopen();
}
function viewopen() {
  view.style.display = "block";
}
let clse = document.getElementById("close");
clse.style.backgroundColor = "darkred";
clse.style.color = "white";
clse.style.fontSize = "18px";
clse.style.border = "none";
clse.style.borderRadius = "12px";
clse.style.width = "100px";
clse.style.height = "30px";
let index = btn.dataset.index;
array[index] = entry;

clse.addEventListener("click", () => {
  viewclose();
});
function viewclose() {
  view.style.display = "none";
}
