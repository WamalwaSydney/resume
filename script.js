// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill out all fields.');
    }
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