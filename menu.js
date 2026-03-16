 // Function to display the username on all pages
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