document.getElementById('show-login').addEventListener("click",function(){
    document.querySelector(".janela-login").classList.add("active");
});
document.querySelector(".hiden-login").addEventListener("click",function(){
    document.querySelector(".janela-login").classList.remove("active");
});


function handleSubmit(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;
    var senha2 = document.getElementById('confirm-password').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex
    if (!nome || !cpf || !email || !senha || !senha2) {
        Swal.fire({
            title: "Erro!",
            text: "Todos os campos são obrigatórios.",
            icon: "error"
        });
        return;
    }

    if (senha !== senha2) {
        Swal.fire({
            title: "Erro!",
            text: "As senhas não coincidem.",
            icon: "error"
        });
        return;
    }
    if (!emailRegex.test(email)) {
        Swal.fire({
            title: "Erro!",
            text: "Email inválido.",
            icon: "error"
        });
        return;
    }
    Swal.fire({
        title: "Bom trabalho!",
        text: "Cadastro realizado com sucesso!",
        icon: "success"
    });
}
function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
}


function atualizarCPF(event) {
    var input = event.target;
    var cpf = input.value;
    input.value = formatarCPF(cpf);
}


document.getElementById('cpf').addEventListener('input', atualizarCPF);
document.getElementById('submit').addEventListener("click", handleSubmit);


