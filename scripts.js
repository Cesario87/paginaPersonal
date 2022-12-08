document.querySelector("form.form").addEventListener("submit", function (event) {

    event.preventDefault();

    console.log(event.target.elements);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.message.value);
    console.log(event.target.party.value);
    console.log(event.target.kind.value);
    console.log(event.target.conditions.checked);


    const name = event.target.name.value;
    const email = event.target.email.value;
    const party = event.target.party.value;
    const conditions = event.target.conditions.checked;

    let validated = true;
    
    if (name.length < 5) {
        alert("Name too short");
        validated = false;
        //he intentado meter sin exito: document.getElementById('name').style.backgroundColor = "red";
    }
    
    if (!email.includes("@") && !email.endsWith(".com")) {
        alert(" @ and/or .com missing");
        validated = false;
    }

    if (party == "") {
        alert("Please, indicate what kind of party you are");
        validated = false;
    }

    if (!conditions) {
        alert("Please, accept conditions");
        validated = false;
    }
    // Comprobación final - Todo validado
    if (validated) {
        alert("Form was sent")
        event.target.submit();
    }
})
