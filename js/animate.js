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
    threshold: [0.1, 0.5, 1.0] // Activar la animación cuando el 50% del elemento sea visible
  });

  // Observa cada elemento
  elements.forEach(element => {
    observer.observe(element);
  });



// Animacion hero banner  
    const canvas = document.getElementById('flowCanvas');
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const dots = Array.from({ length: 100 }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5
  }));

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#00ffe5";
    ctx.strokeStyle = "#00ffe5";
    ctx.globalAlpha = 0.6;

    for (let i = 0; i < dots.length; i++) {
      let dot = dots[i];
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
      ctx.fill();

      // Conectar puntos cercanos
      for (let j = i + 1; j < dots.length; j++) {
        let dx = dots[j].x - dot.x;
        let dy = dots[j].y - dot.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Movimiento
      dot.x += dot.vx;
      dot.y += dot.vy;

      // Rebote
      if (dot.x < 0 || dot.x > width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > height) dot.vy *= -1;
    }

    requestAnimationFrame(draw);
  }

  draw();





