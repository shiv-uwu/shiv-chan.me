	// sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => { 
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

    // discord icon thingy
    function copyToClipboard(text) {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        alert('Copied to clipboard!');
      }
      
      document.querySelector(".bx.bxl-discord-alt").addEventListener("click", function() {
        copyToClipboard("nullptr#4066");
      });

  function validateEmail(email) { // this is a function to validate the email address
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  var form = document.querySelector(".contact-form"); // this is the form
  var nameField = form.querySelector("input[name='name']"); // this is the name field
  var emailField = form.querySelector("input[name='email']"); // this is the email field
  var messageField = form.querySelector("textarea[name='message']"); // this is the message field
  var submitButton = form.querySelector(".contact-button"); // this is the submit button

  var nameError = form.querySelector("#name-error"); 
  var emailError = form.querySelector("#email-error");
  var messageError = form.querySelector("#message-error");

  form.addEventListener("submit", function(event) { // this is the event listener for the form
    var isValid = true;

    if (nameField.value.trim() === "") { // this is the validation for the name field
      nameError.innerHTML = "Please enter your name.";
      isValid = false;
    } else {
      nameError.innerHTML = ""; // this is the error message for the name field
    }

    if (emailField.value.trim() === "") {
      emailError.innerHTML = "Please enter your email address.";
      isValid = false;
    } else if (!validateEmail(emailField.value)) {
      emailError.innerHTML = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.innerHTML = "";
    }

    if (messageField.value.trim() === "") {
      messageError.innerHTML = "Please enter your message.";
      isValid = false;
    } else {
      messageError.innerHTML = "";
    }

    if (!isValid) {
      event.preventDefault();
    }
  });