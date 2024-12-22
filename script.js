function save() {
  let name = document.querySelector("#nameinput").value;
  let age = document.querySelector("#ageinput").value;
  let gender = document.querySelector('input[name="Gender"]:checked')
    ? document.querySelector('input[name="Gender"]:checked').nextElementSibling
        .textContent
    : "";
  let course = document.querySelector("#select").value;
  let email = document.querySelector("#emailinput").value;

  if (name && age && email) {
    let table = document.querySelector("#t2");
    let row = document.createElement("tr");

    row.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${course}</td>
            <td>${gender}</td>
            <td>${email}</td>
            <td><button onclick="delt(this)">Delete</button></td>
        `;

    table.appendChild(row);
  } else {
    alert("Please fill in all required fields.");
  }
}

function delt(button) {
  let row = button.parentElement.parentElement;
  row.remove();
}
