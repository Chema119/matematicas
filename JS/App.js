const botón1 =  document.getElementById("btnsumar")
botón1.addEventListener("click", sumar);

function sumar(){
    const varnumero1 = Number(document.getElementById("num1").value);
    const varnumero2 = Number(document.getElementById("num2").value);

    const varresultado = varnumero1 + varnumero2;
    const imprimirresultado =document.getElementById("divresultado");
    imprimirresultado.innerText = varresultado;
}

const botón2 =  document.getElementById("btnrestar")
botón2.addEventListener("click", restar);

function restar(){
    const varnumero1 = Number(document.getElementById("num5").value)
    const varnumero2 = Number(document.getElementById("num6").value)

    const varresultado = varnumero1 - varnumero2;
    const imprimirresultado =document.getElementById("divresultado1");
    imprimirresultado.innerText = varresultado;
}

const botón3 =  document.getElementById("btnmulti")
botón3.addEventListener("click", multiplicacion);
function multiplicacion(){
    const varnumero1 = Number(document.getElementById("num11").value)
    const varnumero2 = Number(document.getElementById("num10").value)

    const varresultado = varnumero1 * varnumero2;
    const imprimirresultado =document.getElementById("divresultado2");
    imprimirresultado.innerText = varresultado;
}

const botón4 =  document.getElementById("btndiv")
botón4.addEventListener("click", Division );
function Division(){
    const varnumero1 = Number(document.getElementById("num20").value)
    const varnumero2 = Number(document.getElementById("num30").value)

    const varresultado = varnumero1 / varnumero2;
    const imprimirresultado1 =document.getElementById("divresultado3");
    imprimirresultado1.innerText = varresultado;
}

const boton5 = document.getElementById("mostrarn");
boton5 = addEventListener("click", mostrar);

function mostrar(){
    const listas = document.getElementById("listado");
    listas.innerText = " ";
    for (let x=1;x<=100; x=x+1){
        //alert("Numero" + x)
        //console.log(x);

        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item mt-1");
        li.innerText = x;
        listas.appendChild(li);
        

    }
    
}

function compracioncalificacion(){
    const compracioncalificacion = number (document.getElementById("numcalificacion"));
    const resultado = document.getElementById("btn-info btn-block mt-3");
    if(calificacion >=8){
        resultado.innerText = "Aprobado";

    }else {
        resultado.innerText = "Reprobado"
        const audio =document.getElementById("audioreprobado")
        audio.play();
    }
} 
