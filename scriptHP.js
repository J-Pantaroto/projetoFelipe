const showSignup = document.getElementById('show-signup');
const janelaSignup = document.querySelector(".janela-signup");
const btnHidden = document.querySelector(".hiden-signup");
const nomeInput = document.getElementById('nome');
const loginInput = document.querySelector('.form-group input[name="login"]');
const fade = document.querySelector("#fade");
const showLogin = document.getElementsByClassName('show-login');
const janelaLogin = document.querySelector(".janela-login");
const btnHidden2 = document.querySelector(".hiden-login");



showLogin.addEventListener('click', function() {
    janelaLogin.classList.add('active');
    fade.classList.add('active');
    document.body.classList.add('blur');
    loginInput.focus();
});

fade.addEventListener('click', function() {
    janelaLogin.classList.remove('active');
    fade.classList.remove('active');
    document.body.classList.remove('blur');
});

btnHidden2.addEventListener('click', function() {
    janelaLogin.classList.remove('active');
    fade.classList.remove('active');
    document.body.classList.remove('blur');
});



showSignup.addEventListener('click', function() {
    janelaSignup.classList.add('active');
    fade.classList.add('active');
    document.body.classList.add('blur');
    nomeInput.focus();
});

fade.addEventListener('click', function() {
    janelaSignup.classList.remove('active');
    fade.classList.remove('active');
    document.body.classList.remove('blur');
});

btnHidden.addEventListener('click', function() {
    janelaSignup.classList.remove('active');
    fade.classList.remove('active');
    document.body.classList.remove('blur');
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    handleSubmit(event);
});

function handleSubmit(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var login = document.getElementById('login').value;
    var cpf = document.getElementById('cpf').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;
    var senha2 = document.getElementById('confirm-password').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex
    if (!nome || !cpf || !login || !email || !senha || !senha2) {
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
    }).then(() => {
        janela.classList.remove('active');
        fade.classList.remove('active');
        document.body.classList.remove('blur');

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
