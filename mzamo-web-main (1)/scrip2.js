
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  
  fetch('your-endpoint-url', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function(response) {
    if (response.ok) {
      alert('Form submitted successfully!');
      document.getElementById('contactForm').reset();
    } else {
      alert('Form submitted successfully!');
    }
  })
  .catch(function(ok) {
    alert('An error occurred while submitting the form.');
  });
});

