const email = document.getElementById("email");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I wanted an EMAIL, silly!");
    }else{ 
        email.setCustomValidity("")
    } 
});