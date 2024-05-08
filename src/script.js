// Menu Responsivo

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.getElementById('navbarToggler');
    const navbarNav = document.getElementById('navbarNav');

    // Função para fechar o menu dropdown
    function closeDropdown() {
        navbarNav.classList.remove('active');
    }

    // Adicionando um evento de clique para cada link dentro do menu
    navbarNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeDropdown);
    });

    // Adicionando um evento de clique para o botão de "hamburguer"
    navbarToggler.addEventListener('click', function () {
        navbarNav.classList.toggle('active');
    });
});


// Link Âncora

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});