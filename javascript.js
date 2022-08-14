
const h1=document.querySelector('h1')
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const boton=document.querySelector('#btnCalcular');
const pResultado=document.querySelector('#resultado');

//a quien          el evento   la funcion que debe mandar a llamar
boton.addEventListener('click',OnClickBtn)


// funcion para saber cuando el usuario le da click al boton calcular
function OnClickBtn(){
    const suma=Number(input1.value)+ Number(input2.value);
    pResultado.innerText='Suma:'+suma;
   
    }
