$(document).ready(function() {
   
    $('#loginForm').on('submit', function(e) {
        e.preventDefault(); 
        const email = $('#email').val();
        const password = $('#password').val();

      
        if (email && password) {
            alert('Login bem-sucedido!'); 
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});