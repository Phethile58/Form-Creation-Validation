document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) { 
        event.preventDefault();

        const username = document.getElementById('Username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('PassWord').value.trim();

        let isValid = true;
        let message = [];

        if (username.length < 3) {
            isValid = false;
            message.push("Username must be at least 3 characters long.");

        }

        if (!email.includes("@") || !email.includes('.')) {
            isValid = false;
            message.push("Please enter a valid email address.");

            if (password.length < 8) {
                isValid = false;
                message.push("Password must be at least 8 characters long.");
            }

         feedbackDiv.style.display = 'block';

         if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"
            feedbackDiv.style.backgroundColor = "#d4edda";
         } else {

            feedbackDiv.innerHTML = message.join("<br>");
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#ffbaba";

         }

        }

    });
});