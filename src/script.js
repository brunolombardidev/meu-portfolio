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

// Mail Form

   const constraints = {
       name: {
           presence: { allowEmpty: false }
       },
       email: {
           presence: { allowEmpty: false },
           email: true
       },
       telphone: {
        presence: { allowEmpty: false },
        telphone: true
    },
       message: {
           presence: { allowEmpty: false }
       }
   };
   const form = document.getElementById('mailDev');
   form.addEventListener('submit', function (event) {
     const formValues = {
         name: form.elements.name.value,
         email: form.elements.email.value,
         telphone: form.elements.telphone.value,
         message: form.elements.message.value
     };
     const errors = validate(formValues, constraints);
     if (errors) {
       event.preventDefault();
       const errorMessage = Object
           .values(errors)
           .map(function (fieldValues) { return fieldValues.join(', ')})
           .join("\n");

       alert(errorMessage);
     }
   }, false);