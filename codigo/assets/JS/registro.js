

function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};
    
    
    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { cadastros: [
            {email: "admin@123.com", senha: "12345"},
            {email: "teste@123.com", senha: "123456"},
            {email: "usuario@email.com", senha: "1234567"} ]
        }
    }

    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirCadastro () {
    // Ler os dados
    let objDados = leDados();
    // Incluir novo
    let strEmail = document.getElementById ('email').value;
    let strSenha = document.getElementById ('senha').value;
    if (strEmail == "" || strSenha == "") alert('Digite um valor valido');
    else {
        let novoCadastro = {
            email: strEmail,
            senha: strSenha
        };
        const findCadastro = objDados.cadastros.find((usuario) => usuario.email === strEmail);
        if(findCadastro) {
            alert('Usuario já registrado');
        }
        else {
            objDados.cadastros.push (novoCadastro);
            // Salvar novamente
            salvaDados (objDados);
            window.location.assign('http://127.0.0.1:5500/login.html')
        }
    }
}


function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();
    
    for (i = 0 ; i < objDados.cadastros.length; i++) {
        strHtml+= `<p>email: ${objDados.cadastros[i].email} - senha: ${objDados.cadastros[i].senha}</p>`
    }
    
    tela.innerHTML = strHtml;
}

function escondeDados () {
    let tela = document.getElementById('tela');
    tela.innerHTML = '';
}

// Configurações dos botões

document.getElementById ('sign-up').addEventListener ('click', incluirCadastro);

document.getElementById ('exibeDados').addEventListener ('click', imprimeDados);
document.getElementById ('ocultaDados').addEventListener ('click', escondeDados);
