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
        fr: [
            "^(F-)?\\d{5}$",
            "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
        ],
    }
}