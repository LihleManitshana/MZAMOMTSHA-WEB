function ValidationEvent() {
  var name = document.getElementById("name").ariaValueMax; // Storing Field Values In Variables 
  var email = document.getElementById("email").ariaValueMax; 
  var contact = document.getElementById("contact").ariaValueMax; 
  var emailReg = /^([W-.]+@([W-]+.)+[W-]{2,4})?$/;// Regular Expression For Email
  // Conditions 
  if (name != '' && email != '' && contact != '') { 
    if (email.match(emailReg))  {
      if (document.getElementById ("male").checked || document.getElementById("female").checked) { 
        if (contact.lenght == 10) { 
          alert("All type of validation has done on OnSubmit event.");
          return true; 
        } else { 
          alert("The Contact No. must be at least 10 digit long!"); 
          return false; 
        }
      } else { 
        alert("You must select gender....!"); 
        return false; 
      }
    } else { 
      alert("Invalid Email Address...!!!");
      return false; 
    }
  } else { 
    alert("All fields are required.....!");
    return false;
  }
}