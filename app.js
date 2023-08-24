let city = [
  "Hyderabad",
  "Delhi",
  "Bangalore",
  "Pune",
  "Kolkata",
  "Patna",
  "Bhopal",
];
let form = [];
let randomElement = city[Math.floor(Math.random() * city.length)];
console.log(randomElement);

// Displayusers
function users() {
  let userContainer = document.getElementById("userlist");
  userContainer.innerHTML = " ";
  form.map((user) => {
    let userdiv = document.createElement("span");
    userdiv.classList.add("card");
    let namespan = document.createElement("span");
    namespan.innerHTML = user.username;
    let emailspan = document.createElement("span");
    emailspan.innerHTML = user.Email;
    let centerspan = document.createElement("span");
    centerspan.innerHTML = user.Center;

    userContainer.appendChild(userdiv);
    userdiv.appendChild(namespan);
    userdiv.appendChild(emailspan);
    userdiv.appendChild(centerspan);
  });
}

//add data without duplicates
function adddata(userdata) {
  let checkData = form.filter((values) => {
    return (
      values.username == userdata.username || values.Email == userdata.Email
    );
  });
  if (checkData.length == 0) {
    form.push(userdata);
  } else {
    alert("Name or email already exist");
  }
  users();
}

//submit function
function submitdata() {
  let Name = document.getElementById("username");
  let Email = document.getElementById("useremail");
  let userdata = {
    username: Name.value,
    Email: Email.value,
    Center: randomElement,
  };
  adddata(userdata);
  console.log(form);
}
