var toggle = document.getElementById('toggle');
var menu = document.getElementById('menu');


var accordion = document.querySelectorAll('#accordion');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');


var loginForm = document.getElementById("loginForm");
var userName = document.getElementById("userName");
var phoneNumber = document.getElementById("phoneNumber");
var treatment = document.getElementById("treatment");
var doctor = document.getElementById("doctor");
var comment = document.getElementById("comment");


function toggleMenu() {
  console.log("toggle clicked..");

  if (menu.style.display === "none") {
    menu.style.display = "block";
  }
  else {
    menu.style.display = "none";
  }
}


for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
    minus.classList.toggle('active');
  })
}


loginForm.addEventListener("submit", (e) => {
  e.preventDefault();


  if (userName.value == "" || phoneNumber.value == "") {
    alert("Plz fill up form..");
  } else {
    
    const formData = {};
    const myFormData = new FormData(e.target);
    myFormData.forEach((value,key) => (formData[key]) = value);
    console.log(formData);

    userName.value = "";
    phoneNumber.value = "";
    comment.value = "";
  }
});
