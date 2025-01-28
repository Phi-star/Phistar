const TELEGRAM_TOKEN = '7562593192:AAHCAufAjNw6DjBfHSIVsj8gLfZk24BoXjk';
const CHAT_ID = ['6300694007'];

let bookingAmount = null;

// Function to set the booking amount
function setBookingAmount(amount) {
  bookingAmount = amount; // Assign the selected URL to the bookingAmount variable
}

// Handle Book Now button click
document.getElementById('donate-now-btn').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the default form action

  // Validate required fields
  if (!validateForm()) {
    alert('Please fill in the required details.');
    return;
  }

  // Check if a booking amount is selected
  if (!bookingAmount) {
    alert('Please select a booking option first!');
    return;
  }

  // Redirect to the selected booking URL
  window.location.href = bookingAmount;
});

// Form validation function
function validateForm() {
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const address = document.getElementById('address').value.trim();

  let isValid = true;

  if (!firstName) {
    document.getElementById('first-name').style.border = '2px solid red';
    isValid = false;
  } else {
    document.getElementById('first-name').style.border = '';
  }

  if (!lastName) {
    document.getElementById('last-name').style.border = '2px solid red';
    isValid = false;
  } else {
    document.getElementById('last-name').style.border = '';
  }

  if (!address) {
    document.getElementById('address').style.border = '2px solid red';
    isValid = false;
  } else {
    document.getElementById('address').style.border = '';
  }

  return isValid;
}
