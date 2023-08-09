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
        de: [
            "^(D-)?\\d{5}$",
            "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
        ],
        n1: [
            "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
            "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD, and SS",
        ],
    };

    //read country id
    const country =
document.getElementById("Country").value;

//get NPA field
    const ZIPfield = document.getElementById("ZIP");

    const constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);
}