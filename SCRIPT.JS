// Fadein effect timing
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fadein').forEach(el => {
    let d = el.style.animationDelay || "0s";
    el.style.animation = `fadein 1.1s cubic-bezier(.32,1.65,.64,1) ${d} forwards`;
  });

  // Simple contact form (not functional, just a demo)
  if(document.querySelector('.contact-form')) {
    document.querySelector('.contact-form').addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you for reaching out, Esharifan will get back to you soon!');
      this.reset();
    });
  }
});
