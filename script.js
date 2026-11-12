function updateClock() {
    const now = new Date();

    // Format Time (12-hour format with AM/PM)
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strHours = String(hours).padStart(2, '0');

    const timeString = `${strHours}:${minutes}:${seconds} ${ampm}`;

    // Format Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);

    // Update DOM
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Initial call to display clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);
