// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the default way
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Log the data to the console (for testing)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Display a success message
    alert('Thank you for your message! I will get back to you soon.');
  
    // Clear the form
    document.getElementById('contact-form').reset();
  });
  
  // Responsive Navbar
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = '#333';
    } else {
      navbar.style.backgroundColor = '#444';
    }
  });