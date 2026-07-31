const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message");

    if(name=="" || email==""){

        message.innerHTML="Please fill all fields.";

        message.style.color="red";

    }

    else{

        message.innerHTML="Form Submitted Successfully!";

        message.style.color="green";

    }

});

function welcome(){

    document.getElementById("demo").innerHTML="Welcome to My Website!";
}