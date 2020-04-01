//1 - Validacion del Searchbar

function searchValidation(){
  var search = document.getElementById('search');
  var errorSearch = document.getElementById('errorSearch');

  if (search.value.length <3) {
    search.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = " Search Field must have at least 3 characters";
    alert("Search Field must have at least 3 characters");
  } else {
    console.log(search.value);
  }
};

//3-Validacion del formulario de registro
function formValidation(){

  //Seleccion de los elementos y creación de variables

  var firstName = document.forms['generalForm']['firstName'];
  var lastName = document.forms['generalForm']['lastName'];
  var userName = document.forms['generalForm']['userName'];
  var email = document.forms['generalForm']['email'];
  var password = document.forms['generalForm']['password'];
  var password2 = document.forms['generalForm']['password2'];
  var continent = document.forms['generalForm']['continent']
  var zip = document.forms['generalForm']['zip'];
  var bt = document.getElementById('submit');
  var check = document.getElementById('conditions-info');

  // Elementos de Display de Errores

  var errorFirstName = document.getElementById('errorFirstName');
  var errorLastName = document.getElementById('errorLastName');
  var errorLastName = document.getElementById('errorLastName');
  var errorUserName = document.getElementById('errorUserName');
  var errorEmail = document.getElementById('errorEmail');
  var passwordError = document.getElementById('errorPassword');
  var continentError = document.getElementById('errorContinent');
  var zipError = document.getElementById('errorZip');

  var errorAcumulado = 0;

  if (firstName.value == "") {
    firstName.classList.add("is-invalid");
    document.getElementById("errorFirstName").textContent = "First name is mandatory";
    errorAcumulado ++;
  } else {
    firstName.classList.add("is-valid");
    firstName.classList.remove("is-invalid");
    errorFirstName.innerHTML = "";
  }

  if (lastName.value == "") {
    lastName.classList.add("is-invalid");
    document.getElementById("errorLastName").textContent = "Last name is mandatory";
    errorAcumulado ++;
  } else {
    lastName.classList.remove("is-invalid");
    lastName.classList.add("is-valid");
    errorLastName.innerHTML = "";
  };

  if (userName.value == "" || userName.value.length < 3) {
    userName.classList.add("is-invalid");
    document.getElementById("errorUserName").textContent = "Username must be at least 3 characters long";
    errorAcumulado ++;
  } else {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    errorUserName.innerHTML = "";
  };

  if (email.value == "") {
    email.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent = "Email is mandatory";
    errorAcumulado ++;
  } else if (!emailVerify(email.value)){
    email.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent = "Email must fullfil the format you@example.com";
    errorAcumulado ++;
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    errorEmail.innerHTML = "";
  };

  if (password.value == "") {
    password.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent = "This field is Mandatory";
    errorAcumulado ++;
  } else if (password.value.length <6 || !passwordVerify(password.value)){
    password.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent = "Password must be at least 6 characters and contain a letter or a number";
    errorAcumulado ++;
  } else {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
    errorPassword.innerHTML = "";
  };

  if (password.value !== password2.value || password2.value =="") {
    password2.classList.add("is-invalid");
    document.getElementById("errorPassword2").textContent = "The two passwords do not match";
    errorAcumulado ++;
  } else {
    password2.classList.remove("is-invalid");
    password2.classList.add("is-valid");
    errorPassword2.innerHTML = "";
  }

  if (continent.value == "") {
    continent.classList.add("is-invalid");
    document.getElementById("errorContinent").textContent = "Please enter your Location";
    errorAcumulado ++;
  } else {
    continent.classList.remove("is-invalid");
    continent.classList.add("is-valid");
    errorContinent.innerHTML = "";
  }

  if (zip.value == "") {
    zip.classList.add("is-invalid");
    document.getElementById("errorZip").textContent = "Please enter your Zip Code";
    errorAcumulado ++;
  } else {
    zip.classList.remove("is-invalid");
    zip.classList.add("is-valid");
    zipError.innerHTML = "";
  }

  if (document.getElementById("conditions-info").checked==false){
    errorAcumulado ++;
  }

  // en el caso de que uno de los campos sea obligatorio y no esté bien rellenado, se inhabilita el boton de Submit

  if (errorAcumulado == 0) {
    document.getElementById("submit").removeAttribute("disabled");
  } else {
    document.getElementById("submit").setAttribute("disabled","");
    console.log(errorAcumulado);
    console.log(document.getElementById("conditions-info").checked);
    console.log(passwordVerify(password));
  }
};

// Funcion de verificacion de correo
function emailVerify(email){
  var regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/igm;
  if (regex.test(email) == true) {
    return true;
  }};

  function passwordVerify(password){
    var regex1 = /\d/;
    var regex2 = /[a-z]/i;
    if ((regex1.test(password) == true)) {
      return true;
      or (regex2.test(password) == true)
      return true;
    }
    else {
      return false;
    }
  };
