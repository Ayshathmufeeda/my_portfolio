
// Enhance form submission with animation and background effect
document.addEventListener('DOMContentLoaded', function () {
  // Add background image to contact section
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.style.background = "linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80') center/cover no-repeat";
    contactSection.style.borderRadius = '2rem';
    contactSection.style.boxShadow = '0 8px 32px 0 rgba(60,0,90,0.10)';
    contactSection.style.position = 'relative';
    contactSection.style.overflow = 'hidden';
  }

  // Form submit logic with fade-in thank you
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const responseMessage = document.getElementById('responseMessage');
      responseMessage.textContent = "Thank you for your message!";
      responseMessage.style.color = "#1dbf73";
      responseMessage.style.fontWeight = 'bold';
      responseMessage.style.fontSize = '1.2em';
      responseMessage.style.opacity = 0;
      responseMessage.style.transition = 'opacity 0.7s';
      setTimeout(() => {
        responseMessage.style.opacity = 1;
      }, 100);
      this.reset();
    });
  }
});