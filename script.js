const TELEGRAM_TOKEN = '7562593192:AAHCAufAjNw6DjBfHSIVsj8gLfZk24BoXjk';
const CHAT_ID = ['6300694007'];

let bookingAmount = null;

// Set booking amount when a user selects a booking option
function setBookingAmount(amount) {
  bookingAmount = amount;
}

// Handle Book Now button click
document.getElementById('donate-now-btn').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default action

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

  // Redirect to the selected booking amount URL
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
