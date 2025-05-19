document.addEventListener('DOMContentLoaded', () => {
    const casaForm = document.getElementById('casaForm');
    const listaCasas = document.getElementById('listaCasas');
  
    let casas = [];
  
    function mostrarCasas() {
      listaCasas.innerHTML = '';
      if (casas.length === 0) {
        listaCasas.innerHTML = '<p>No hay casas disponibles.</p>';
        return;
      }
      casas.forEach((casa, index) => {
        const casaDiv = document.createElement('div');
        casaDiv.classList.add('casa-card');
  
        // Clase para el estado
        const estadoClass = casa.disponibilidad === 'disponible' ? 'estado-disponible' : 'estado-no-disponible';
        const estadoTexto = casa.disponibilidad === 'disponible' ? 'Disponible' : 'No disponible';
  
        casaDiv.innerHTML = `
          <h3>${casa.direccion}</h3>
          <p><strong>Precio:</strong> $${casa.precio.toLocaleString()}</p>
          <p>${casa.descripcion}</p>
          <p><strong>Estado:</strong> <span class="${estadoClass}">${estadoTexto}</span></p>
          <button class="btn-eliminar" data-index="${index}">Eliminar</button>
        `;
        listaCasas.appendChild(casaDiv);
      });
  
      // Eventos para eliminar casas
      document.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', e => {
          const idx = e.target.getAttribute('data-index');
          casas.splice(idx, 1);
          mostrarCasas();
        });
      });
    }
  
    casaForm.addEventListener('submit', e => {
      e.preventDefault();
  
      const direccion = casaForm.direccion.value.trim();
      const precio = parseFloat(casaForm.precio.value);
      const descripcion = casaForm.descripcion.value.trim();
      const disponibilidad = casaForm.disponibilidad.value;
  
      if (!direccion || isNaN(precio) || precio <= 0 || !descripcion) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
      }
  
      casas.push({ direccion, precio, descripcion, disponibilidad });
  
      mostrarCasas();
      casaForm.reset();
    });
  
    mostrarCasas();
  });document.addEventListener('DOMContentLoaded', () => {
    const casaForm = document.getElementById('casaForm');
    const listaCasas = document.getElementById('listaCasas');
  
    let casas = [];
  
    function mostrarCasas() {
      listaCasas.innerHTML = '';
      if (casas.length === 0) {
        listaCasas.innerHTML = '<p>No hay casas disponibles.</p>';
        return;
      }
      casas.forEach((casa, index) => {
        const casaDiv = document.createElement('div');
        casaDiv.classList.add('casa-card');
  
        // Clase para el estado
        const estadoClass = casa.disponibilidad === 'disponible' ? 'estado-disponible' : 'estado-no-disponible';
        const estadoTexto = casa.disponibilidad === 'disponible' ? 'Disponible' : 'No disponible';
  
        casaDiv.innerHTML = `
          <h3>${casa.direccion}</h3>
          <p><strong>Precio:</strong> $${casa.precio.toLocaleString()}</p>
          <p>${casa.descripcion}</p>
          <p><strong>Estado:</strong> <span class="${estadoClass}">${estadoTexto}</span></p>
          <button class="btn-eliminar" data-index="${index}">Eliminar</button>
        `;
        listaCasas.appendChild(casaDiv);
      });
  
      // Eventos para eliminar casas
      document.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', e => {
          const idx = e.target.getAttribute('data-index');
          casas.splice(idx, 1);
          mostrarCasas();
        });
      });
    }
  
    casaForm.addEventListener('submit', e => {
      e.preventDefault();
  
      const direccion = casaForm.direccion.value.trim();
      const precio = parseFloat(casaForm.precio.value);
      const descripcion = casaForm.descripcion.value.trim();
      const disponibilidad = casaForm.disponibilidad.value;
  
      if (!direccion || isNaN(precio) || precio <= 0 || !descripcion) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
      }
  
      casas.push({ direccion, precio, descripcion, disponibilidad });
  
      mostrarCasas();
      casaForm.reset();
    });
  
    mostrarCasas();
  });