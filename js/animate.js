// Inicializar AOS
  AOS.init({
    duration: 1000,  // Duración de la animación (en milisegundos)
    once: true,      // Si es 'true', la animación se ejecuta solo una vez cuando el elemento entra en pantalla
  });




// Selecciona todos los elementos que quieras animar
  const elements = document.querySelectorAll('.fade-in-up');

  // Crea un observador de intersección
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Cuando el elemento es visible en pantalla, agrega la clase para animarlo
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Activar la animación cuando el 50% del elemento sea visible
  });

  // Observa cada elemento
  elements.forEach(element => {
    observer.observe(element);
  });








