document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.document-card');
      const active = card.classList.toggle('active');
      btn.textContent = active ? 'Fechar' : 'Ver Documentos';
    });
  });

  // Toggle das subpastas
  document.querySelectorAll('.sub-toggle').forEach(subBtn => {
    subBtn.addEventListener('click', () => {
      const folder = subBtn.closest('.sub-folder');
      folder.classList.toggle('active');
    });
  });