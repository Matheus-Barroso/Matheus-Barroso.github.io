var idI = 1
   var link = document.createElement("link");
   link.href = "reset.css";
   link.rel = "stylesheet";
   document.head.appendChild(link);

   var link = document.createElement("link");
   link.href = "style.css";
   link.rel = "stylesheet";
   document.head.appendChild(link);

   const div = document.createElement("div");
   div.className = "principal";
   
   const divRow = document.createElement("div");
   divRow.className = "row";   
   var button = document.createElement("button");
   button.innerText = "Mais circulos"
   button.type = 'button';
   button.id = "botao"
   button.onclick = novoCirculo;
  

   var button1 = document.createElement("button");
   button1.innerText = "Menos circulos"
   button1.type = 'button';
   button1.id = "botao"
   button1.onclick = TirarCirculo;
   divRow.appendChild(button1)
   divRow.appendChild(button)
   div.appendChild(divRow)

   const p =document.createElement("p")
   p.innerHTML="Você pode excluir um círculo, clicando nele."
   div.appendChild(p)
   document.body.appendChild(div);

   const div2 = document.createElement("div");
   div2.className = "segundo";
   document.body.appendChild(div2);


   function novoCirculo() {
      var circulo = document.createElement("div");
      circulo.className = "circle";
      circulo.style.backgroundColor = sortColor();
      circulo.id = `circulo${idI}`;
      idI = idI + 1;
      circulo.onclick = function () { elimineCircle(circulo.id); }
      div2.appendChild(circulo)
   }


   function elimineCircle(id) {
      var c = document.getElementById(`${id}`);
      div2.removeChild(c);
   }

   function sortColor() {
      var cores = ['#ffe3b3', '#ff9a52', '#ff5252', '#c91e5a', '#3d2922'];
      return cores[Math.floor(Math.random() * cores.length)]
   }


   function TirarCirculo(){
      if (div2.childNodes.length>0){
      var c = div2.childNodes[Math.floor(Math.random() * div2.childNodes.length];
      div2.removeChild(c);
      console.log("jmeu deus")
      }
   }
