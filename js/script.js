
// Testimonial Carousel
// declarar variables
const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
// funcion para mostrar slides: guia https://www.w3schools.com/howto/howto_js_slideshow.asp
function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
    dots[currentSlide].classList.add('active');
}

// funcion next slide - testimonials
function nextSlide() {
    showSlide(currentSlide + 1);
}

// funcion slide previo: testimonials
function prevSlide() {
    showSlide(currentSlide - 1);
}

// dots y dot es una clase en html: click para pasar entre slides
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

setInterval(nextSlide, 3000); // Auto-avanza cada 3 segundos



// Form
// declarcion variable
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData);
    console.log('Form data:', formObject);

    // muestra un mensaje como alerta en agradecieminto
    alert('Gracias por tu mensaje. ¡Nos comunicaremos contigo pronto!');

    // Resetear el formulario
    this.reset();
});


// 
// botton flotante volver inicio
// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

window.onscroll = function() {
    var button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";  // muestra el botton scroll hacia abajo
    } else {
        button.style.display = "none";   // Oculta el botton en el top
    }
};

// Desplasa hacia la parte arriba cuando se hace clic en el botton
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Desplazamiento suave hasta el top
    });
}
