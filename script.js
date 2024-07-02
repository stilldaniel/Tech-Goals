// Function to display current UTC time
function displayUTCTime() {
    const utcTimeElement = document.getElementById('utcTime');
    const now = new Date();
    utcTimeElement.textContent = now.toUTCString();
}

// Function to display current day of the week
function displayCurrentDay() {
    const currentDayElement = document.getElementById('currentDay');
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    currentDayElement.textContent = days[now.getUTCDay()];
}

// Call the functions to update the time and day on page load
displayUTCTime();
displayCurrentDay();

// Update the time every minute
setInterval(displayUTCTime, 60000);