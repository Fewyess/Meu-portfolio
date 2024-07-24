document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('pYq5ofKaVjxv0c3FE'); // Substitua pelo seu User ID do EmailJS

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        
        const fromName = event.target.name.value;
        const replyTo = event.target.email.value;
        const message = event.target.message.value;

        const templateParams = {
            from_name: fromName, // Correspondente ao campo 'from_name' no template do EmailJS
            to_name: "Nome do Destinatário", // Defina o nome do destinatário, se aplicável
            reply_to: replyTo,
            message: message,
        };

        emailjs.send('service_88y7dwt', 'template_atruw3y', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Mensagem enviada com sucesso!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Falha no envio da mensagem. Por favor, tente novamente.');
            });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('pYq5ofKaVjxv0c3FE'); // Substitua pelo seu User ID do EmailJS

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        
        const fromName = event.target.name.value;
        const replyTo = event.target.email.value;
        const message = event.target.message.value;

        const templateParams = {
            from_name: fromName, // Correspondente ao campo 'from_name' no template do EmailJS
            to_name: "Nome do Destinatário", // Defina o nome do destinatário, se aplicável
            reply_to: replyTo,
            message: message,
        };

        emailjs.send('service_88y7dwt', 'template_atruw3y', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Mensagem enviada com sucesso!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Falha no envio da mensagem. Por favor, tente novamente.');
            });
    });
});
