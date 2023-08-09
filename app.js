const email = document.getElementById("t2");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I wanted an EMAIL, silly!");
    } else { 
        email.setCustomValidity("");
    } 
});

function checkZIP() {
    const constraints = {
        
    }
}