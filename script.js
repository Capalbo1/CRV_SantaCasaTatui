
        // Menu Mobile
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainMenu = document.getElementById('mainMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
        
        // Acessibilidade - Alto Contraste
        document.getElementById('high-contrast').addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.toggle('high-contrast');
            document.body.style.backgroundColor = document.body.classList.contains('high-contrast') ? '#000' : '#fff';
            document.body.style.color = document.body.classList.contains('high-contrast') ? '#fff' : '#000';
        });
        
        // Acessibilidade - Tamanho da Fonte
        document.getElementById('font-increase').addEventListener('click', (e) => {
            e.preventDefault();
            const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            document.documentElement.style.fontSize = (currentSize + 1) + 'px';
        });
        
        document.getElementById('font-decrease').addEventListener('click', (e) => {
            e.preventDefault();
            const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            if (currentSize > 12) {
                document.documentElement.style.fontSize = (currentSize - 1) + 'px';
            }
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href') === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Fechar menu mobile após clique
                    if (mainMenu.classList.contains('active')) {
                        mainMenu.classList.remove('active');
                        mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
                    }
                }
            });
        });
