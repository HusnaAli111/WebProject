document.addEventListener("DOMContentLoaded", () => {
    const loginModal = document.getElementById("loginModal");
    const loginBtn = document.getElementById("loginBtn");
    const closeBtn = document.getElementsByClassName("close")[0];
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    // Function to open the modal
    function openModal() {
        loginModal.style.display = "block";
    }

    // Function to close the modal and reset the form
    function closeModal() {
        loginModal.style.display = "none";
        resetForm();
        displayUsername();
    }

    // Function to reset the form
    function resetForm() {
        loginForm.reset();
        errorMessage.innerHTML = "";
        successMessage.innerHTML = "";
    }

    // Validation
    function validateForm() {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const mobile = document.getElementById("mobile").value;

        errorMessage.style.display = "none";
        successMessage.style.display = "none";

        if (firstName.length < 3 || lastName.length < 3) {
            showError("First Name and Last Name must be at least 3 characters.");
            return;
        }

        if (!isValidMobile(mobile)) {
            return;
        }

        if (typeof Storage !== "undefined") {
            localStorage.setItem("firstName", firstName);
        }

        successMessage.innerHTML = "Thank you for signing in, " + firstName + "!";
        successMessage.style.display = "block";
        setTimeout(closeModal, 2000);
    }

    function isValidMobile(mobile) {
        const lengthIsValid = mobile.length === 8;
        const isNumeric = !isNaN(mobile);

        if (!lengthIsValid || !isNumeric) {
            showError("Mobile No must contain exactly 8 digits.");
            return false;
        }
        return true;
    }

    function showError(message) {
        errorMessage.innerHTML = message;
        errorMessage.style.display = "block";
    }

    function displayUsername() {
        var storedFirstName = localStorage.getItem("firstName");
        var welcomeMessageElement = document.getElementById("welcomeMessage");
        if (welcomeMessageElement) {
            if (storedFirstName) {
                welcomeMessageElement.innerText = "Welcome back, " + storedFirstName + "!";
            } else {
                welcomeMessageElement.innerText = "Welcome, Guest!";
            }
        }
    }


    loginBtn.onclick = openModal;
    closeBtn.onclick = closeModal;
    window.onclick = (event) => {
        if (event.target === loginModal) {
            closeModal();
        }
    };

    loginForm.onsubmit = (event) => {
        event.preventDefault();
        validateForm();
    };

    window.onload = displayUsername;
});
