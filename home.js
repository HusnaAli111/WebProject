// Modal functionality

// Function to open the modal
function openModal() {
    // Set the display property of the modal to "block" to make it visible
    loginModal.style.display = "block";
}

// Function to close the modal and reset the form
function closeModal() {
    // Set the display property of the modal to "none" to hide it
    loginModal.style.display = "none";
    // Call resetForm to clear any input fields and messages
    resetForm();
}

// Function to reset form fields and messages
function resetForm() {
    // Reset all fields in the login form to their default values
    loginForm.reset();
    // Clear any error messages displayed
    errorMessage.innerHTML = "";
    // Clear any success messages displayed
    successMessage.innerHTML = "";
}

// Function to validate form inputs
function validateForm() {
    // Get the values from the input fields
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const mobile = document.getElementById("mobile").value;

    // Hide any previous error or success messages
    errorMessage.style.display = "none";
    successMessage.style.display = "none";

    // Validate that first name and last name are at least 3 characters long
    if (firstName.length < 3 || lastName.length < 3) {
        showError("First Name and Last Name must be at least 3 characters.");
        return; // Exit the function if validation fails
    }

    // Validate that mobile number is exactly 8 digits
    if (!/^\d{8}$/.test(mobile)) {
        showError("Mobile No must contain exactly 8 digits.");
        return; // Exit the function if validation fails
    }

    // If all validations pass, save the first name to localStorage
    localStorage.setItem("firstName", firstName);

    // Show a success message
    successMessage.innerHTML = "Thank you for signing in, " + firstName + "!";
    successMessage.style.display = "block"; // Show the success message
    // Automatically close the modal after 2 seconds
    setTimeout(closeModal, 2000);
}

// Function to show error messages
function showError(message) {
    // Set the error message inner HTML to the provided message
    errorMessage.innerHTML = message;
    // Display the error message
    errorMessage.style.display = "block";
}

// Get elements from the DOM by their IDs or class names
const loginModal = document.getElementById("loginModal"); // The modal element
const loginBtn = document.getElementById("loginBtn"); // The button to open the modal
const closeBtn = document.getElementsByClassName("close")[0]; // The button to close the modal
const loginForm = document.getElementById("loginForm"); // The form within the modal
const errorMessage = document.getElementById("errorMessage"); // Element for displaying error messages
const successMessage = document.getElementById("successMessage"); // Element for displaying success messages

// Event listeners
loginBtn.onclick = openModal; // Open the modal when the login button is clicked
closeBtn.onclick = closeModal; // Close the modal when the close button is clicked

// Close the modal if the user clicks anywhere outside of it
window.onclick = (event) => {
    if (event.target === loginModal) {
        closeModal(); // Call closeModal if the modal background is clicked
    }
};

// Prevent form submission and validate inputs on form submission
loginForm.onsubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    validateForm(); // Call validateForm to check the input values
};

// Function to display the username on all pages
function displayUsername() {
    const storedFirstName = localStorage.getItem("firstName");
    const welcomeMessageElement = document.getElementById("welcomeMessage");
    if (welcomeMessageElement) {
        welcomeMessageElement.innerText = storedFirstName ? "Welcome back, " + storedFirstName + "!" : "Welcome, Guest!";
    }
}

// Call displayUsername on page load to show the username if available
window.onload = function () {
    displayUsername();
};
