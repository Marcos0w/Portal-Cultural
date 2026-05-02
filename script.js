document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight do Menu Ativo
    const links = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.opacity = "1";
            link.style.color = "var(--accent)";
            link.style.borderBottom = "2px solid var(--accent)";
        }
    });

    // 2. Lógica do Formulário de Contato
    const form = document.getElementById('culturalForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Captura os valores dos campos
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Monta o link mailto
            const mailtoLink = `mailto:contato@portalcultural.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Olá, meu nome é ${name}.\n\n${message}\n\nMeu e-mail de contato: ${email}`
            )}`;

            // Abre o cliente de e-mail
            window.location.href = mailtoLink;
        });
    }
});