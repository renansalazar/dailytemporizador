let intervalo
const handleBegin = () => {
    let contador = document.querySelector('#contador')
    let cont = 60
    clearInterval(intervalo)
    const animations = document.querySelectorAll('animate')
    intervalo = setInterval(function(){
        cont-=1
        if (cont<=0){
            const gollum = document.querySelector(".fail")
            gollum.classList.remove('invisible')
            setTimeout(function(){
                gollum.classList.add('invisible')
                clearInterval(intervalo)
                contador.innerHTML = "Listo!"
            }, 3000)
        }else{
            contador.innerHTML = cont
        }
    }, 1000)
    animations.forEach(function(anim) {
        anim.beginElement()
    });
}
const handleStop = () => {
    clearInterval(intervalo)
    const animations = document.querySelectorAll('animate')
    animations.forEach(function(anim) {
        anim.endElement()
    });
}

function onLoad(){
    const buttonBegin = document.querySelector("#begin")
    const buttonStop = document.querySelector("#stop")
    buttonBegin.addEventListener('click', handleBegin)
    buttonStop.addEventListener('click', handleStop)
}
window.onload = onLoad()
