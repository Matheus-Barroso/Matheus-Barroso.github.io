var idGlobal=""
var idI=1

var link = document.createElement("link");
link.href="css/reset.css";
link.rel="stylesheet";
document.head.appendChild(link);

var link = document.createElement("link");
link.href="css/style.css";
link.rel="stylesheet";
document.head.appendChild(link);

const div = document.createElement("div");
div.className="principal";
var button = document.createElement("button");
button.innerText="Mais circulos"
button.type = 'button';
button.id="botao"
button.onclick= novoCirculo;
div.appendChild(button)
document.body.appendChild(div);

const div2 = document.createElement("div");
div2.className="segundo";
document.body.appendChild(div2);


function novoCirculo(){
    var circulo = document.createElement("div");
    circulo.className="circle";
    circulo.style.backgroundColor=sortColor();
    circulo.id=`${idI}`;
    idI=idI+1;
    circulo.onclick=function (){ idGlobal=circulo.id; elimineCircle(); }
    div2.appendChild(circulo)
}


function elimineCircle(){
    var c =document.getElementById(`${idGlobal}`);
    div2.removeChild(c); 
}

function sortColor(){
    var cores = ['#ffe3b3', '#ff9a52', '#ff5252', '#c91e5a', '#3d2922'];
    return cores[Math.floor(Math.random() * cores.length)]
}