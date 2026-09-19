document.addEventListener("DOMContentLoaded", () => {

    const canvas =
        document.getElementById(
            "fireworks-canvas"
        );

    const button =
        document.getElementById(
            "fireworks-button"
        );

    const message =
        document.getElementById(
            "surprise-message"
        );


    if (!canvas || !button) return;


    const ctx =
        canvas.getContext("2d");


    let particles = [];


    /* =====================================================
       TAMAÑO DEL CANVAS
    ====================================================== */

    function resizeCanvas() {

        const rect =
            canvas.getBoundingClientRect();


        const dpr =
            window.devicePixelRatio || 1;


        canvas.width =
            rect.width * dpr;

        canvas.height =
            rect.height * dpr;


        canvas.style.width =
            `${rect.width}px`;

        canvas.style.height =
            `${rect.height}px`;


        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

    }


    resizeCanvas();


    window.addEventListener(
        "resize",
        resizeCanvas
    );



    /* =====================================================
       CREAR FUEGO ARTIFICIAL
    ====================================================== */

    function createFirework() {

        const rect =
            canvas.getBoundingClientRect();


        const x =
            Math.random() *
            rect.width;


        const y =
            Math.random() *
            rect.height *
            0.55;


        const particleCount = 80;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const angle =
                Math.random() *
                Math.PI *
                2;


            const speed =
                1.5 +
                Math.random() * 5;


            particles.push({

                x: x,

                y: y,

                vx:
                    Math.cos(angle) *
                    speed,

                vy:
                    Math.sin(angle) *
                    speed,

                life: 1,

                decay:
                    0.008 +
                    Math.random() *
                    0.018,

                size:
                    1 +
                    Math.random() * 2

            });

        }

    }



    /* =====================================================
       ANIMACIÓN
    ====================================================== */

    function animate() {

        const rect =
            canvas.getBoundingClientRect();


        ctx.fillStyle =
            "rgba(5, 2, 20, 0.18)";


        ctx.fillRect(
            0,
            0,
            rect.width,
            rect.height
        );


        particles =
            particles.filter(
                particle =>
                    particle.life > 0
            );


        particles.forEach(
            particle => {

                particle.x +=
                    particle.vx;

                particle.y +=
                    particle.vy;


                particle.vy +=
                    0.035;


                particle.vx *=
                    0.99;


                particle.vy *=
                    0.99;


                particle.life -=
                    particle.decay;


                ctx.beginPath();


                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );


                ctx.fillStyle =
                    `rgba(
                        255,
                        220,
                        255,
                        ${particle.life}
                    )`;


                ctx.shadowBlur = 8;

                ctx.shadowColor =
                    "rgba(220,180,255,0.9)";


                ctx.fill();


                ctx.shadowBlur = 0;

            }
        );


        requestAnimationFrame(
            animate
        );

    }


    animate();



    /* =====================================================
       BOTÓN
    ====================================================== */

    button.addEventListener(
        "click",
        () => {

            /* Primer fuego */

            createFirework();


            /* Segundo */

            setTimeout(
                createFirework,
                350
            );


            /* Tercero */

            setTimeout(
                createFirework,
                700
            );


            /* Cuarto */

            setTimeout(
                createFirework,
                1050
            );


            /* Mensaje */

            if (message) {

                message.textContent =
                    "Si pudiera regalarte el universo, todavía sentiría que me faltaría algo: tú. ❤️";


                message.classList.add(
                    "show"
                );

            }

        }
    );

});