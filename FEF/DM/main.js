function phoneNumberFormat(phoneNumber) {
    phoneNumber = document.getElementById("phNumber").value;
    let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/g;
    phoneNumber.match(phoneRegex) ? alert("Valid number entered") : alert("Phone number entered is invalid");
  }

  let newNumber = 10;
  try {
      if (x < 5) throw "Number is Less than 5";
      if (x > 5) throw "Number is Greater than 5";
      if (x === 10) throw "The number is " + newNumber;
  } catch (err) {
      console.log(err);
      }
      console.log("No Errors");

let button = document.getElementById("button");

function nameCheck(name) {
    firstName = document.getElementById("first").value;
    lastName = document.getElementById("last").value;
    let name = firstName + lastName;
    let nameRegex = /^\<[A-Z]/g;
    name.match(nameRegex) ? console.log("Valid Name Format") : console.log("First and Last name must start with a capital letter");
}

button.onclick = nameCheck;

