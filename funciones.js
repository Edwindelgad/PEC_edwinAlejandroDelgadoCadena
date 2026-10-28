document.addEventListener("DOMContentLoaded", () => {

    // Cursor personalizado
    const cursor = document.getElementById("cursor");
    if (cursor) {
        cursor.textContent = "😄";
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });
    }

    // Música de fondo
    const musica = document.getElementById("musicaFondo");
    if (musica) {
        document.addEventListener("click", function () {
            musica.play().catch(error => console.log("Reproducción automática prevenida por el navegador"));
        }, { once: true });
    }

    /* Carrusel de autoestima */
    const slides = document.querySelectorAll(".slide");
    const anterior = document.getElementById("anterior");
    const siguiente = document.getElementById("siguiente");

    if (slides.length > 0 && anterior && siguiente) {
        let actual = 0;
        slides[actual].classList.add("activo");

        siguiente.addEventListener("click", () => {
            slides[actual].classList.remove("activo");
            actual++;
            if (actual >= slides.length) {
                actual = 0;
            }
            slides[actual].classList.add("activo");
        });

        anterior.addEventListener("click", () => {
            slides[actual].classList.remove("activo");
            actual--;
            if (actual < 0) {
                actual = slides.length - 1;
            }
            slides[actual].classList.add("activo");
        });
    }

    /* Acordeón de depresión */
    const temas = document.querySelectorAll(".tema");
    temas.forEach((tema) => {
        const h2 = tema.querySelector("h2");
        if (h2) {
            h2.addEventListener("click", () => {
                temas.forEach((otroTema) => {
                    otroTema.classList.remove("activo");
                });
                tema.classList.add("activo");
            });
        }
    });

    /* Animaciones de salud mental */
    const cajasSalud = document.querySelectorAll(".salud-caja");
    cajasSalud.forEach((caja) => {
        const h2 = caja.querySelector("h2");
        if (h2) {
            h2.addEventListener("click", () => {
                cajasSalud.forEach((otraCaja) => {
                    otraCaja.classList.remove("activo");
                });
                caja.classList.add("activo");
            });
        }
    });

    /* Test de bienestar emocional */
    const comenzarTest = document.getElementById("comenzarTest");
    const temasSalud = document.querySelector(".salud");
    const test = document.getElementById("test");
    const formTest = document.getElementById("formTest");
    const divResultado = document.getElementById("resultadoTest");

    if (test) {
        test.style.display = "none";
    }

    if (comenzarTest && test) {
        comenzarTest.addEventListener("click", () => {
            if (temasSalud) temasSalud.style.display = "none";
            comenzarTest.style.display = "none";
            test.style.display = "block";
            test.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Calcular resultado del test
    if (formTest) {
        formTest.addEventListener("submit", (e) => {
            e.preventDefault();

            let puntajeTotal = 0;
            let respondidas = true;

            for (let i = 1; i <= 10; i++) {
                const seleccionada = document.querySelector(`input[name="p${i}"]:checked`);
                if (seleccionada) {
                    puntajeTotal += parseInt(seleccionada.value);
                } else {
                    respondidas = false;
                }
            }

            if (!respondidas) {
                if (divResultado) {
                    divResultado.innerHTML = "<p style='color: red; font-weight: bold; margin-top: 15px;'>Por favor, responde todas las preguntas para ver tu resultado.</p>";
                }
                return;
            }

            let mensaje = "";
            if (puntajeTotal >= 22) {
                mensaje = `¡Excelente! Tu puntaje es ${puntajeTotal}/30. Tienes un buen manejo de tu bienestar emocional y tus hábitos de autocuidado. ¡Sigue así!`;
            } else if (puntajeTotal >= 14) {
                mensaje = `Tu puntaje es ${puntajeTotal}/30. Estás pasando por momentos regulares; recuerda apoyarte en tus seres queridos y practicar técnicas de manejo del estrés.`;
            } else {
                mensaje = `Tu puntaje es ${puntajeTotal}/30. Parece que estás atravesando momentos difíciles. Te recomendamos hablar con una persona de confianza o buscar orientación profesional. ¡No estás solo!`;
            }

            if (divResultado) {
                divResultado.innerHTML = `
                    <div style="margin-top: 20px; padding: 20px; background-color: #fff; border-radius: 8px; border: 2px solid #4CAF50;">
                        <h3 style="margin-top: 0; color: #2E7D32;">Resultado de tu test</h3>
                        <p style="font-size: 16px; color: #333;">${mensaje}</p>
                    </div>
                `;
                divResultado.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

});
/* Ruleta de tips de bienestar */
/* Ruleta de Tips Aleatorios */
const btnTip = document.getElementById("btnTip");
const resultadoTip = document.getElementById("resultadoTip");

const tipsDepresion = [
    "1. Conecta con alguien de confianza: Hablar de lo que sientes puede aligerar mucho la carga.",
    "2. Realiza una caminata corta: Salir a tomar aire fresco y mover el cuerpo ayuda a despejar la mente.",
    "3. Escucha música que te inspire: Pon tus canciones favoritas para cambiar tu estado de ánimo.",
    "4. Escribe lo que sientes: Vaciar tu mente por escrito ayuda a organizar tus emociones.",
    "5. Practica la respiración profunda: Respira lento y profundo unos minutos para calmarte.",
    "6. Desconéctate un momento de las pantallas: Tómate un descanso libre de redes sociales.",
    "7. Divide tus tareas en pequeños pasos: Concéntrate solo en dar el primer paso hoy.",
    "8. Sé amable contigo mismo: Trátate con la misma paciencia que a un gran amigo.",
    "9. Disfruta de un pequeño gusto: Prepara tu bebida favorita o haz algo que te apasione.",
    "10. Busca apoyo profesional: Pedir ayuda a un especialista es una gran forma de cuidarte."
];

if (btnTip && resultadoTip) {
    btnTip.addEventListener("click", () => {
        // Generar un índice aleatorio del 0 al 9
        const indiceAleatorio = Math.floor(Math.random() * tipsDepresion.length);
        resultadoTip.textContent = tipsDepresion[indiceAleatorio];
    });
}