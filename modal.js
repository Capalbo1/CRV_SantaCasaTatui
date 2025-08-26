// Função para abrir e fechar modais
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões "Saiba mais"
    const buttons = document.querySelectorAll('.saiba-mais-btn');
    // Seleciona todos os botões de fechar modal
    const closeButtons = document.querySelectorAll('.close-modal');
    // Seleciona todos os modais
    const modals = document.querySelectorAll('.modal');
    
    // Adiciona evento de clique para cada botão "Saiba mais"
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal') + '-modal';
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Adiciona evento de clique para fechar modais
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    });
    
    // Fecha modal ao clicar fora do conteúdo
    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    });
    
    // Fecha modal com a tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
        }
    });
});




document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".saiba-mais-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const card = btn.closest("article");
      card.classList.toggle("expanded");

      // altera texto do botão
      const link = btn.querySelector("a");
      if (card.classList.contains("expanded")) {
        link.innerHTML = '<i class="fas fa-arrow-up"></i> Recolher';
      } else {
        link.innerHTML = '<i class="fas fa-arrow-right"></i> Saiba mais';
      }
    });
  });
});


