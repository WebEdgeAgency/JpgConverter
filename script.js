// JavaScript for Enhanced Giggle Effect
document.querySelectorAll('.card-hover').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.1s ease';
      card.style.transform = 'translateY(-3px) rotate(-2deg)';
      setTimeout(() => {
        card.style.transform = 'translateY(3px) rotate(2deg)';
      }, 100);
      setTimeout(() => {
        card.style.transform = 'translateY(-2px) rotate(-1deg)';
      }, 200);
      setTimeout(() => {
        card.style.transform = 'translateY(0) rotate(0deg)';
      }, 300);
    });
  });
  // JavaScript for Interactive Button Animation
document.querySelector('.download-btn').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
  });
  
  document.querySelector('.download-btn').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
  
  