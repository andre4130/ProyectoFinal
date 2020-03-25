//2-Validación del Usuario y Contraseña usando jQuery

$(function() {

  $.validator.setDefaults({
    errorClass: 'invalid-feedback',
    highlight: function(element) {
      $(element)

      .addClass('is-invalid');
    },
    unhighlight: function(element) {
      $(element)

      .removeClass('is-invalid');
    },
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

  // Aqui iria el trozo de codigo que compararia la contraseña introducida con la contraseña almacenada para el usuario
  // $.validator.addMethod('matchingpassword', function(value, element) {
  //   if (loginPassword == storedPassword){
  //     return true;
  //   } else {
  //     return false;
  //   }});

  $("#login-form").validate({
    rules: {
      loginEmail: {
        required: true,
        email: true,
      },
      loginPassword: {
        required: true,
        // matchingpassword: true,
      },
      messages: {
        "loginEmail": {
          required: "This Field is Mandatory",
          email: "Email must fullfil the format you@example.com"
        },
        "loginPassword": {
          required: "This Field is Mandatory",
        }},

      }
    }),

    $("#login-form").on('submit', function() {
      if ($('#login-form').valid()) {
        alert("Your Login Was Successful!");
      } else {
        alert("Please review the data you introduced");
      }
    });
  });
