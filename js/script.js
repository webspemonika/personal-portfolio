


function updateDateTime() {
    const date = new Date();

    document.querySelector("#footer #datetime").innerHTML =
        date.toLocaleString();
}

updateDateTime();

setInterval(updateDateTime, 1000);


function validateForm() {

    let name = document.forms["myForm"]["fname"].value.trim();
    let email = document.forms["myForm"]["email"].value.trim();
    let address = document.forms["myForm"]["address"].value.trim();

    if (!name || !email || !address) {
        alert("All fields are required");
        return false;
    }

    return true;
}