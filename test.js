
// Smooth Scrolling for Navbar Links (if not using CSS scroll-behavior)
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if(targetSection){
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Handle Contact Form Submission
document.querySelector('#contact form').addEventListener('submit', function(e){
    e.preventDefault();
    // Implement form submission logic (e.g., send data to email or API)
    alert('Thank you for your message!');
    this.reset();
});


//contact section ----send Email;
function sendEmail() {
    var name = document.getElementById("name").value;
    var receiverEmail = document.getElementById("email").value; // Pre-filled and disabled
    var message = document.getElementById("message").value;
  
    var mailtoLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(receiverEmail) +
                     '&body=' + encodeURIComponent("From: " + name + "\n\n" + message);
  
    window.open(mailtoLink);
  }
  