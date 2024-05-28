const showSignup = document.getElementById('show-signup');
const janelaSignup = document.querySelector(".janela-signup");
const btnHidden = document.querySelector(".hiden-signup");
const nomeInput = document.getElementById('nome');
const fade = document.querySelector("#fade");
const showLogin = document.getElementById('show-login');
const janelaLogin = document.querySelector(".janela-login");
const btnHidden2 = document.querySelector(".hiden-login");
const mostrarSenhaCadastro = document.getElementById('show-password');
const mostrarSenhaLogin = document.getElementById('show-passwordLogin');
const usuarios = [];

class Usuario {
    constructor(nome, login, cpf, email, senha, sexo) {
        this.nome = nome;
        this.login = login;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.sexo = sexo;
    }
    //funcao para LOGIN
    static validarLogin(login, senha, usuariosRegistrados) {
        const usuario = usuariosRegistrados.find(user => user.login === login && user.senha === senha);
        return usuario ? true : false;
    }
    
}
//funcao para CADASTRO
function registrarUsuario(nome, login, cpf, email, senha, sexo) {
    const novoUsuario = new Usuario(nome, login, cpf, email, senha, sexo);
    usuarios.push(novoUsuario);
    console.log(usuarios);
}


function abrirLogin(){
    janelaLogin.classList.add('active');
    fade.classList.add('active');
    document.body.classList.add('blur');
}
showLogin.addEventListener('click', function() {
    abrirLogin();
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
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    handleLogin(event);
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
        title: "Sucesso!",
        text: "Cadastro realizado com sucesso!",
        icon: "success"
    }).then(() => {
        janelaSignup.classList.remove('active');
        fade.classList.remove('active');
        document.body.classList.remove('blur');
        const nome = document.getElementById('nome').value;
        const login = document.getElementById('login').value;
        const cpf = document.getElementById('cpf').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('password').value;
        const sexo = document.querySelector('input[name="sexo"]:checked').value;
        registrarUsuario(nome, login, cpf, email, senha, sexo);
        abrirLogin();
    });
}

function handleLogin(event) {
    event.preventDefault();
    const login = document.getElementById('login-entrar').value;
    const senha = document.getElementById('senha-entrar').value;

    if (Usuario.validarLogin(login, senha, usuarios)) {
        Swal.fire({
            title: "Sucesso!",
            text: "Login realizado com sucesso!",
            icon: "success"
        }).then(() => {
            janelaLogin.classList.remove('active');
            fade.classList.remove('active');
            document.body.classList.remove('blur');
            window.location.href = 'shop.html';
        });;

    } else {
        Swal.fire({
            title: "Erro!",
            text: "Login ou senha incorretos.",
            icon: "error"
        });
    }
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











function mostrarSenha() {
    var senha = document.getElementById('password');
    var senha2 = document.getElementById('confirm-password');
    var senhaLogin = document.getElementById('senha-entrar');
    mostrarSenhaCadastro.addEventListener('change', function() {
        if (mostrarSenhaCadastro.checked) {
            senha.type = 'text';
            senha2.type = 'text';
        } else {
            senha.type = 'password';
            senha2.type = 'password';
        }
    });
    mostrarSenhaLogin.addEventListener('change', function() {
        if (mostrarSenhaLogin.checked) {
            senhaLogin.type = 'text';
        } else {
            senhaLogin.type = 'password';
        }
    });
}
document.getElementById('cpf').addEventListener('input', atualizarCPF);
document.addEventListener('DOMContentLoaded', function() {
mostrarSenha();
});