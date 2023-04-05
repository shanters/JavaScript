const form = document.getElementById("form");

let formEValido = false;

function validaSubmit(numeroA, numeroB) {
    return numeroB > numeroA;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let numeroA = parseFloat(document.getElementById("campo-a").value);
    let numeroB = parseFloat(document.getElementById("campo-b").value);
    

    
    const mensagemSucesso = 'Correto! Campo B maior que Campo A'

    formEValido = validaSubmit(numeroA, numeroB);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
    } else {
        document.querySelector(".error-message").style.display = "block";
    }
});

