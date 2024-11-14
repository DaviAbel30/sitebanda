document.addEventListener("DOMContentLoaded", () => {
      const historySection = document.querySelector('.history');
  
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  historySection.classList.add('visible');
                  observer.unobserve(historySection); // Remove o observador após a animação
              }
          });
      }, {
          threshold: 0.1 // Ativa a animação quando 10% da seção estiver visível
      });
  
      observer.observe(historySection);
  });
  