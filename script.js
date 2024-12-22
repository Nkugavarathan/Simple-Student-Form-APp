function save() {
  let name = document.querySelector("#nameinput").value;
  let age = document.querySelector("#ageinput").value;
  let gender = document.querySelector('input[name="Gender"]:checked')
    ? document.querySelector('input[name="Gender"]:checked').nextElementSibling
        .textContent
    : "";
  /*
    Purpose: This line retrieves the selected gender. It checks if one of the radio buttons for "Gender" is selected (:checked):
If a radio button is selected, nextElementSibling.textContent gets the label text (either "male" or "female") that is next to the radio button.
If no gender is selected, it sets gender to an empty string "".
This is useful because the radio button is not a direct input field, and the label for the radio button holds the text (e.g., "male" or "female").*/

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
            <td>
            <button onclick="delt(this)">Delete</button>
            </td>
        `;

    table.appendChild(row);
  } else {
    alert("Please fill in all required fields.");
  }
}

function delt(button) {
  let row = button.parentElement.parentElement;
  // button.parentElemnet - td
  // button.parentElemtn.parentElement - tr  we want that tr to remove

  /*
  The button refers to the Delete button that was clicked. The first parentElement refers to the <td> that contains the button. The second parentElement refers to the <tr> (the entire row) that contains that <td>.*/

  row.remove();
}
