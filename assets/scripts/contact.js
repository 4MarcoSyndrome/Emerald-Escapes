
const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const query = document.getElementById("query-type").value;
    const message = document.getElementById("message").value.trim();

    // Check required fields
    if (name === "" || email === "" || phone === "" ||
        query === "" || message === "") {
        feedback.textContent = "Please fill in all fields.";
        feedback.className = "form-feedback error";
        feedback.hidden = false;
        return;
    }

    // Check email format
    // code taken from https://medium.com/@sketch.paintings/email-validation-with-javascript-regex-e1b40863ed23
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(email);

    if (isValidEmail) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.className = "form-feedback error";
        feedback.hidden = false;
        return;
    }

    // Check phone number
    if (phone.replace(/\D/g, "").length < 7) {
        feedback.textContent = "Please enter a valid phone number.";
        feedback.className = "form-feedback error";
        feedback.hidden = false;
        return;
    }

    // Check message length
    if (message.length < 10) {
        feedback.textContent =
            "Your message must contain at least 10 characters.";
        feedback.className = "form-feedback error";
        feedback.hidden = false;
        return;
    }

    // Display confirmation
    feedback.textContent =
        "Thank you! Your form has been validated successfully.";
    feedback.className = "form-feedback success";
    feedback.hidden = false;

    form.reset();
});
