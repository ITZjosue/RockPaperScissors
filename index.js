const opt = document.querySelectorAll('.img-btn');
const bot = document.querySelectorAll('.bot-ans');
const botRpta = Array.from(bot);
opt.forEach(e=>{
    e.addEventListener('click',()=>{
        let respuesta=document.getElementById('rpta');
        respuesta.innerHTML = `<img class='img-rpta' src='${e.src}'/>`;

        let botRespuesta = document.getElementById('bot-rpta');
        botRespuesta.innerHTML = `<img class='img-rpta' src='${botRpta[Math.floor(Math.random()*3)].src}'/>`;
    })
})
