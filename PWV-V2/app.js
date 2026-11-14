(function () {
  var nombre = localStorage.getItem('usuarioMexicoNombre');
  var saludo = document.getElementById('saludoUsuario');
  var btn = document.getElementById('btnCerrarSesion');
  if (btn) {
    btn.addEventListener('click', function () {
      localStorage.removeItem('usuarioMexicoNombre');
      localStorage.removeItem('usuarioMexicoCorreo');
    });
  }

  // Si una imagen no carga, muestra un recuadro con su nombre en lugar del ícono roto
  function respaldo(img) {
    var caja = document.createElement('div');
    caja.className = 'img-missing';
    caja.textContent = img.alt || 'Imagen no disponible';
    img.replaceWith(caja);
  }
  document.querySelectorAll('img').forEach(function (img) {
    img.loading = 'lazy';
    if (img.complete && img.naturalWidth === 0) respaldo(img);
    else img.addEventListener('error', function () { respaldo(img); }, { once: true });
  });
})();

// Menú desplegable de Entretenimiento (clic/toque para abrir y cerrar)
(function () {
  document.querySelectorAll('.dropdown-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      toggle.parentElement.classList.toggle('open');
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.dropdown.open').forEach(function (d) {
      if (!d.contains(e.target)) d.classList.remove('open');
    });
  });
})();
