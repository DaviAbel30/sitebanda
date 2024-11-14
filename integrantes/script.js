document.addEventListener('DOMContentLoaded', () => {
      const carousel = document.querySelector('.carousel');
      const leftButton = document.getElementById('left');
      const rightButton = document.getElementById('right');
      
      let scrollAmount = 0;
      const scrollDistance = 220; // Distância que cada clique moverá o carrossel (ajuste conforme necessário)
    
      // Função para mover o carrossel para a esquerda
      leftButton.addEventListener('click', () => {
        if (scrollAmount > 0) {
          scrollAmount -= scrollDistance;
          carousel.style.transform = `translateX(-${scrollAmount}px)`;
        } else {
          // Se estiver no início, volta ao final
          scrollAmount = carousel.scrollWidth - carousel.clientWidth;
          carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
      });
    
      // Função para mover o carrossel para a direita
      rightButton.addEventListener('click', () => {
        if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
          scrollAmount += scrollDistance;
          carousel.style.transform = `translateX(-${scrollAmount}px)`;
        } else {
          // Se estiver no final, volta para o início
          scrollAmount = 0;
          carousel.style.transform = `translateX(0px)`;
        }
      });
    });
    