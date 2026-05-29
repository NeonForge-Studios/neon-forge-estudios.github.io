window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader")
            .classList.add("loader-hidden");

        document.querySelector(".app-wrapper")
            .classList.add("show");

    }, 3200);

    iniciarContadores();
});

function iniciarContadores(){

    document.querySelectorAll(".counter").forEach(counter => {

        counter.innerText = "0";

        const update = () => {

            const target = +counter.dataset.target;
            const current = +counter.innerText;

            const step = Math.max(1, target / 120);

            if(current < target){
                counter.innerText = Math.ceil(current + step);
                setTimeout(update, 15);
            } else {
                counter.innerText = target;
            }
        };

        update();
    });
}

function cambiarTema(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("modo","dark");

    }else{

        localStorage.setItem("modo","light");
    }
}

/* AL CARGAR */

window.addEventListener("load", () => {

    if(localStorage.getItem("modo") === "dark"){

        document.body.classList.add("dark-mode");
    }
});

function mostrarMensaje(){

    const msgs = [
        "Nunca estás solo ❤️",
        "Tu voz puede cambiar todo 🌎",
        "Pedir ayuda es valentía 💪",
        "El respeto salva vidas 🤝",
        "No estás solo en esto 🛡️"
    ];

    document.getElementById("textoMensajeModal").innerText =
        msgs[Math.floor(Math.random() * msgs.length)];
}

function mostrarAyuda(tipo){

    const data = {
        victima: ["😟 No estás solo", "Habla con alguien de confianza y busca apoyo."],
        testigo: ["👀 Tu apoyo importa", "Reportar también ayuda a salvar vidas."],
        ayudar: ["🤝 Ayudar cambia vidas", "Escucha, acompaña y sé empático."]
    };

    document.getElementById("contenidoAyuda").innerHTML = `
        <h3>${data[tipo][0]}</h3>
        <p>${data[tipo][1]}</p>
    `;
}

/* =========================
   MUSICA
========================= */

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

music.volume = 0.3;

musicBtn.addEventListener("click", () => {

    if(music.paused){

        music.play();

        musicBtn.innerHTML =
        '<i class="bi bi-volume-up-fill"></i>';

    }else{

        music.pause();

        musicBtn.innerHTML =
        '<i class="bi bi-volume-mute-fill"></i>';

    }

});

/* NAVBAR EFECTO */

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

/* BOTON ARRIBA */

window.addEventListener("load", () => {

    const topBtn =
    document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){

            topBtn.classList.add("show");

        }else{

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

/* LIGHTBOX */

function abrirImagen(src){

    document.getElementById("lightbox")
    .classList.add("show");

    document.getElementById("lightbox-img")
    .src = src;
}

function cerrarImagen(){

    document.getElementById("lightbox")
    .classList.remove("show");
}

/* TEXTO ESCRIBIENDO */

const text1 = "DETENER EL BULLYING";
let index1 = 0;

function iniciarTypewriter1() {

    const el = document.getElementById("typingText");
    if (!el) return;

    el.innerHTML = "";
    index1 = 0;

    function escribir() {

        if (index1 < text1.length) {

            el.innerHTML += text1.charAt(index1);
            index1++;
            setTimeout(escribir, 120);
        }
    }

    escribir();
}


/* iniciar despues del loader */

setTimeout(() => {

    typingText.innerHTML = "";

    iniciarTypewriter1()
    iniciarTypewriter2()

}, 3600);

window.addEventListener("scroll", () => {

    const scrollTop =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const scrolled =
    (scrollTop / height) * 100;

    document.getElementById("progressBar")
        .style.width = scrolled + "%";
});


/* =========================
   VIDEO CINEMATICO
========================= */

const videoContainer =
document.getElementById("videoContainer");

videoContainer.addEventListener("click", () => {

    videoContainer.classList.toggle("active");

});

/* =========================
   SCROLL PROGRESS
========================= */

window.addEventListener("scroll", () => {

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    document.getElementById("scrollProgress")
        .style.width = progress + "%";
});

/* =========================
   HERO PARALLAX
========================= */

window.addEventListener("scroll", () => {

    const scroll =
    window.pageYOffset;

    const hero =
    document.querySelector(".hero");

    hero.style.backgroundPositionY =
    scroll * 0.5 + "px";

});

/* =========================
   SPOTLIGHT MOUSE
========================= */

document.addEventListener("mousemove", (e) => {

    document.body.style.setProperty(
        "--x",
        e.clientX + "px"
    );

    document.body.style.setProperty(
        "--y",
        e.clientY + "px"
    );

});

/* =========================
   UI SOUNDS
========================= */

const hoverSound =
document.querySelector("#hoverSound");

const clickSound =
document.querySelector("#clickSound");

/* SOLO SI EXISTEN */

if(hoverSound && clickSound){

    hoverSound.volume = 0.4;
    clickSound.volume = 0.5;

    document.querySelectorAll(
        "button, .hero-btn, .nav-link"
    ).forEach(el => {

        /* HOVER */

        el.addEventListener("mouseenter", () => {

            hoverSound.currentTime = 0;

            hoverSound.play();

        });

        /* CLICK */

        el.addEventListener("click", () => {

            clickSound.currentTime = 0;

            clickSound.play();

        });

    });

}

/* =========================
   TYPEWRITER EFFECT
========================= */

const text2 =
    "Una palabra puede destruir, pero también puede salvar una vida.";

let index2 = 0;

function iniciarTypewriter2() {

    const el = document.getElementById("typewriter");
    if (!el) return;

    el.innerHTML = "";
    index2 = 0;

    function escribir() {

        if (index2 < text2.length) {

            el.innerHTML += text2.charAt(index2);
            index2++;
            setTimeout(escribir, 45);
        }
    }

    escribir();
}