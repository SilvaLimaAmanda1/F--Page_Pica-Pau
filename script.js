// MENU RESPONSIVO
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () =>{
    menu.classList.toggle("active");
});
// FECHAR O MENU AO CLICAR
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link =>{
    link.addEventListener("click", ()=>{
        menu.classList.remove("active");
    });
});



let currentIdx = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Lógica circular (volta ao início ou vai ao fim)
    if (index >= slides.length) currentIdx = 0;
    else if (index < 0) currentIdx = slides.length - 1;
    else currentIdx = index;

    // Resetar classes
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Ativar slide atual
    slides[currentIdx].classList.add('active');
    dots[currentIdx].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentIdx + n);
}

function currentSlide(n) {
    showSlide(n);
}

// Troca automática a cada 5 segundos
setInterval(() => {
    changeSlide(1);
}, 5000);

//VIDEO
function openVideo() {
    const modal = document.getElementById("videoModal");
    const player = document.getElementById("player");

    modal.style.display = "block";

    player.currentTime = 0;
    player.muted = true; // evita bloqueio
    player.play();
}

function closeVideo() {
    const modal = document.getElementById("videoModal");
    const player = document.getElementById("player");

    modal.style.display = "none";
    player.pause();
}

window.onclick = function(e) {
    const modal = document.getElementById("videoModal");
    const player = document.getElementById("player");

    if (e.target === modal) {
        modal.style.display = "none";
        player.pause();
    }
}

//VOTAÇÃO
let votos = {
    pizza: 3,
    tapeado: 2,
    cachorro: 1
};

function votar() {
    const opcao = document.querySelector('input[name="voto"]:checked');

    if (!opcao) {
        alert("Escolha uma opção!");
        return;
    }

    votos[opcao.value]++;

    atualizarResultado();
}

function atualizarResultado() {
    const total = Object.values(votos).reduce((a, b) => a + b, 0);

    for (let key in votos) {
        const percent = (votos[key] / total) * 100;
        document.getElementById(`${key}-bar`).style.width = percent + "%";
    }

    document.getElementById("resultado").style.display = "block";
}
window.addEventListener("DOMContentLoaded", () => {
    const destaque = document.querySelector('input[value="cachorro"]');
    
    if (destaque) {
        destaque.checked = true;
    }
});
//UPLOAD DAS FANARTES DOS FÃS
document.addEventListener("DOMContentLoaded", () => {

    const uploadInput = document.getElementById("fanart-upload");
    const preview = document.getElementById("preview-fanart");

    if(uploadInput && preview){

        uploadInput.addEventListener("change", function(){

            const file = this.files[0];

            if(file){

                const reader = new FileReader();

                reader.onload = function(e){

                    preview.src = e.target.result;
                    preview.style.display = "block";

                };

                reader.readAsDataURL(file);
            }
        });

    }

});
