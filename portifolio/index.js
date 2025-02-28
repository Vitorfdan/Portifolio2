
    document.addEventListener('DOMContentLoaded', function() {
        
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
        // Inicialize com a sua Public Key do EmailJS
        emailjs.init('KxHQZ8OWKgqE3RMUA'); // Substitua pelo seu Public Key
    
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
    
            // Envie o formulário usando o Service ID e Template ID corretos
            emailjs.sendForm('service_0qanhhq', 'template_ffni97r', this)
                .then(function(response) {
                    console.log('Mensagem enviada com sucesso!', response);
                    alert('Mensagem enviada com sucesso!');
                })
                .catch(function(error) {
                    console.error('Erro ao enviar a mensagem:', error);
                    alert('Ocorreu um erro ao enviar a mensagem: ' + JSON.stringify(error));
                });
        });
    });
    