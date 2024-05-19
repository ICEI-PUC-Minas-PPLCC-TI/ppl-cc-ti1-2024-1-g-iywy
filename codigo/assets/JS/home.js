let usuarioLogado = {};
function isLogged() {
    usuarioLogado = JSON.parse(localStorage.getItem('session'));
    if (!usuarioLogado) window.location.assign('http://127.0.0.1:5500/login.html');
}

isLogged();

function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};
    
    
    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    

    return objDados;
}


function usuario() {
    let screen = document.getElementById('screen');
    let strHtmlHome = '';
    strHtmlHome+= `<h1>Logado como ${usuarioLogado.email}</h1><br>`
    strHtmlHome+= `<h3>Olá ${usuarioLogado.nome}</h3>`
    screen.innerHTML = strHtmlHome;


}

usuario();

    
    
    