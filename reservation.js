document.addEventListener('DOMContentLoaded', () => {
    const timeSlots = document.querySelectorAll('.time-slots button');
    const reserveButton = document.querySelector('.reserve-btn');

    let selectedTimeSlot = null;

    // Handle time slot selection
    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            if (selectedTimeSlot) {
                selectedTimeSlot.classList.remove('selected');
            }
            slot.classList.add('selected');
            selectedTimeSlot = slot;
        });
    });

    // Handle reservation button
    reserveButton.addEventListener('click', () => {
        const partySize = document.getElementById('party-size').value;
        const date = document.getElementById('date').value;
        const time = selectedTimeSlot ? selectedTimeSlot.textContent : null;

        if (!time) {
            alert('Please select a time slot!');
            return;
        }

        alert(`Reservation Confirmed!\n\nReservation Details:\nParty Size: ${partySize}\nDate: ${date}\nTime: ${time}`);
        // Optionally redirect to a confirmation page
        // window.location.href = `confirmation.html?partySize=${partySize}&date=${date}&time=${time}`;
    });
});
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