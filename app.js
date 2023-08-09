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
        ch: [
            "^(CH-)?\\d{4}$",
            "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
        ],
        
    }
}