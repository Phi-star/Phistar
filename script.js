
    let selectedPrice;
    let selectedSessionLink;

    function setBookingOption(price, sessionLink) {
      selectedPrice = price;
      selectedSessionLink = sessionLink;
      alert('You selected a session for $' + price);
    }

    function validateBooking() {
      const form = document.getElementById('booking-form');
      if (form.checkValidity() && selectedPrice) {
        window.location.href = `https://${selectedSessionLink}`;
      } else if (!selectedPrice) {
        alert('Please select a session amount.');
      } else {
        alert('Please fill in all required details.');
      }
    }
