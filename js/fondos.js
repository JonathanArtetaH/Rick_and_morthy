const fondo = document.getElementById("body"); 

const colocarfondo = (num)=>{
    if (num==0) fondo.style.backgroundImage = 'url(Fondo/fondo.png)';
    if (num==1) fondo.style.backgroundImage  = 'url(Fondo/fondo2.jpg)';
    if (num==2) fondo.style.backgroundImage  = 'url(Fondo/fondo3.jpg)';
}





const num = Math.random()*2;
colocarfondo(Math.round(num));