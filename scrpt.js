document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const messageDisplay = document.getElementById("messageDisplay");

    form.addEventListener("submit", function (event) {
        event.preventDefault();


        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const queryType = document.getElementById("queryType").value;
        const message = document.getElementById("message").value.trim();
        const consent = document.getElementById("consent").checked;

    
        if (! firstName || !lastName || !email || !message || !consent) {
            showMessage("Please fill out all required fields.", "error");
            return;
        }

        if (!validateEmail(email)) {
            showMessage("Please enter a valid email address.", "error");
            return;
        }

        showMessage("Thank you for contacting us! We will get back to you soon.", "success");

        form.reset();
    });


    function showMessage(message, type) {
        messageDisplay.textContent = message;
        messageDisplay.className = type;
    }


    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});