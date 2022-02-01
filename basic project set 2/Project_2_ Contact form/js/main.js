function validateForm() {
    let x = document.forms["myForm"]["fname", "lname", "email", "phone"].value;
        if (x == "") {
            alert("Form must be filled out in its entirety");
            return false;
        }
    }