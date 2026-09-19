document.addEventListener("DOMContentLoaded", () => {

    const image =
        document.getElementById(
            "memory-image"
        );

    const counter =
        document.getElementById(
            "memory-counter"
        );

    const previous =
        document.getElementById(
            "memory-prev"
        );

    const next =
        document.getElementById(
            "memory-next"
        );


    if (!image) return;


    /* =====================================================
       FOTOS
    ====================================================== */

    const photos = [

        "assets/images/music/fonts/foto1.jpeg",

        "assets/images/music/fonts/foto2.jpeg",

        "assets/images/music/fonts/foto3.jpeg",

        "assets/images/music/fonts/foto4.jpeg"

    ];


    let current = 0;


    /* =====================================================
       MOSTRAR FOTO
    ====================================================== */

    function showPhoto() {

        image.style.opacity = "0";


        setTimeout(() => {

            image.src =
                photos[current];


            image.style.opacity =
                "1";


            if (counter) {

                counter.textContent =
                    `${current + 1} / ${photos.length}`;

            }

        }, 200);

    }


    /* =====================================================
       FOTO ANTERIOR
    ====================================================== */

    if (previous) {

        previous.addEventListener(
            "click",
            () => {

                current--;


                if (current < 0) {

                    current =
                        photos.length - 1;

                }


                showPhoto();

            }
        );

    }


    /* =====================================================
       FOTO SIGUIENTE
    ====================================================== */

    if (next) {

        next.addEventListener(
            "click",
            () => {

                current++;


                if (
                    current >=
                    photos.length
                ) {

                    current = 0;

                }


                showPhoto();

            }
        );

    }


    /* =====================================================
       SWIPE EN CELULAR
    ====================================================== */

    let touchStartX = 0;
    let touchEndX = 0;


    image.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    image.addEventListener(
        "touchend",
        event => {

            touchEndX =
                event.changedTouches[0].screenX;


            handleSwipe();

        },
        {
            passive: true
        }
    );


    function handleSwipe() {

        const difference =
            touchStartX - touchEndX;


        /* Deslizar hacia la izquierda */

        if (difference > 50) {

            current++;


            if (
                current >=
                photos.length
            ) {

                current = 0;

            }


            showPhoto();

        }


        /* Deslizar hacia la derecha */

        if (difference < -50) {

            current--;


            if (current < 0) {

                current =
                    photos.length - 1;

            }


            showPhoto();

        }

    }


    /* =====================================================
       INICIAR
    ====================================================== */

    showPhoto();

});