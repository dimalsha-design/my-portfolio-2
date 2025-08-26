// Animate skill bars when they come into view
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        const percent = skillBar.getAttribute('data-percent');
        skillBar.style.width = percent;
        observer.unobserve(skillBar);
      }
    });
  }, { threshold: 0.5 });
  
  skillBars.forEach(bar => {
    observer.observe(bar);
  });
}

// Form submission handler
function submitForm(event) {
  event.preventDefault();
  const formMessage = document.getElementById("formMessage");
  
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  // Here you would typically send the data to a server
  // For now, we'll just show a success message
  formMessage.innerText = `Thanks for your message, ${name}! I'll get back to you soon.`;
  formMessage.style.color = "green";
  
  // Reset form
  event.target.reset();
  
  // Hide message after 5 seconds
  setTimeout(() => {
    formMessage.innerText = "";
  }, 5000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Animate skill bars
  animateSkillBars();
  
  // Add form submit event listener
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', submitForm);
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
