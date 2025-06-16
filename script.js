document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('registration-form');

    const feedbackDiv = this.getElementById('form-feedback');

    form.addEventListener('submit', function(event) { 
        event.preventDefault();

        const username = document.getElementById('username'). ariaValueMax.trim();
        const email = document.getElementById('email').ariaValueMax.trim();
        const password = document.getElementById('password').ariaValueMax.trim();

        let isvalid = true;
        let message = [];

        if (username.length < 3){
            isvalid = false;
            message.push("username must be at least 3 charecters long");
        }

        if (!email.includes(0) || !email.includes('.')) {
            isvalid = false;
            message.push("please enter a valid email address.");

            if (password.length < 8) {
                isvalid = false;
                message.push("password must be at least 8 charecters long");
            }

         feedbackDiv.style.display = "block";

         if (isvalid){
            feedbackDiv.textContent = "Registration successful";
            feedbackDiv.style.color = "#28a745"
            feedbackDiv.style.background = "#d4edda";
         } else {

            feedbackDiv.innerHTML = message.join("<br>");
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#ffbaba";


         }

        }
    })
})