const texto = document.querySelector('.txt')
const texto2 = document.querySelector('.txt2')
const skills = document.querySelector('#skills')
const card = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const menuLinks = document.querySelectorAll('.dropDown a[href^="#"]')
const barContent1 = document.querySelector('.bar-content1')
const barContent2 = document.querySelector('.bar-content2')
const barContent3 = document.querySelector('.bar-content3')
const barContent4 = document.querySelector('.bar-content4')
const barContent5 = document.querySelector('.bar-content5')
const barContent6 = document.querySelector('.bar-content6')
const barContent7 = document.querySelector('.bar-content7')





window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};
/*FUNCAO SCROLL SUAVE MOBILE */

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth"
    })
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 150
    nativeScroll(distanceFromTheTop)

}

menuLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})




/* DIGITACAO EM FORMA DE MAQUINA DE ESCREVER */

const digita = (elemento) => {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 50 * i)
    })

}

const digita2 = (elemento) => {
    const texto2Array = elemento.innerHTML.split('');
    elemento.innerHTML = '  ';
    texto2Array.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 150 * i)

    })

}

const arrowUp = document.querySelector('.up')
const arrowDown = document.querySelector('.down')


function hideArrow() {

    if (arrowUp.classList.contains('hide')) {
        arrowUp.classList.remove('hide')
        arrowDown.classList.add('hide')

    } else {
        arrowUp.classList.add('hide')
        arrowDown.classList.remove('hide')
    }
}



function selecionaEstado(estado) {
    const event = new CustomEvent("alteraEstado", {
        detail: { estado }
    });

    document.dispatchEvent(event);
}




const arrow = Array.from(document.querySelectorAll('.arrow'))

arrow.map(function() {

    function hideDescription() {
        document.addEventListener("alteraEstado", (event) => {
            const estado = event.detail.estado

            if (document.getElementById(estado).classList.contains('hide')) {
                document.getElementById(estado).classList.remove('hide')
                document.getElementById(estado).classList.add('show')

            } else {
                document.getElementById(estado).classList.remove('show')
                document.getElementById(estado).classList.add('hide')
            }

        })
    }
    hideDescription()

})

/* ROTAÇÃO DOS CARDS AO PASSAR O MOUSE */

skills.addEventListener('touchmove', () => {
    barContent1.style.width = "50%"
    barContent2.style.width = "65%"
    barContent3.style.width = "65%"
    barContent4.style.width = "30%"
    barContent5.style.width = "30%"
    barContent6.style.width = "30%"
    barContent7.style.width = "15%"


})
skills.addEventListener('mousemove', () => {
    barContent1.style.width = "50%"
    barContent2.style.width = "65%"
    barContent3.style.width = "65%"
    barContent4.style.width = "30%"
    barContent5.style.width = "30%"
    barContent6.style.width = "30%"
    barContent7.style.width = "15%"


})

digita(texto)
digita2(texto2)