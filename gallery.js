    function displayUsername() {
                const storedFirstName = localStorage.getItem("firstName");
                const welcomeMessageElement = document.getElementById("welcomeMessage");
                if (welcomeMessageElement) {
                    welcomeMessageElement.innerText = storedFirstName ? "Welcome back, " + storedFirstName + "!" : "Welcome, Guest!";
                }
            }

            // Call displayUsername on page load to show the username if available
            window.onload = function() {
                displayUsername();
            };
            
            // Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Select all images in the gallery
    const images = document.querySelectorAll('.gallery img');

    // Create a modal element to display larger images
    const modal = document.createElement('div');
    const modalImg = document.createElement('img'); // Image element for the modal

    // Set modal styles
    modal.style.display = 'none'; // Initially hide the modal
    modal.style.position = 'fixed'; // Fixed position to cover the entire viewport
    modal.style.zIndex = '1000'; // Ensure modal is on top of other content
    modal.style.top = '0'; // Position at the top of the viewport
    modal.style.left = '0'; // Position at the left of the viewport
    modal.style.width = '100%'; // Full width
    modal.style.height = '100%'; // Full height
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Semi-transparent black background
    modal.style.justifyContent = 'center'; // Center content horizontally
    modal.style.alignItems = 'center'; // Center content vertically

    // Style for the modal image
    modalImg.style.maxWidth = '90%'; // Limit max width
    modalImg.style.maxHeight = '80%'; // Limit max height

    // Append the image to the modal
    modal.appendChild(modalImg);

    // Append the modal to the body of the document
    document.body.appendChild(modal);

    // Loop through each image and add a click event listener
    images.forEach(img => {
        img.addEventListener('click', function () {
            // Set the source of the modal image to the clicked image's source
            modalImg.src = this.src;

            // Display the modal by changing its display style
            modal.style.display = 'flex'; // Use flexbox to center content
        });
    });

    // Add a click event listener to the modal to close it when clicked
    modal.addEventListener('click', function () {
        modal.style.display = 'none'; // Hide the modal
    });
});