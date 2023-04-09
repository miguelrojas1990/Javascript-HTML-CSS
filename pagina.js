// Obtener el formulario y el campo de archivo
const form = document.querySelector('form');
const archivo = document.querySelector('#archivo');

// Agregar un evento de escucha para cuando se envíe el formulario
form.addEventListener('submit', (event) => {
  // Prevenir el envío del formulario
  event.preventDefault();

  // Obtener el archivo seleccionado por el usuario
  const archivoSeleccionado = archivo.files[0];

  // Crear un objeto FormData para enviar el formulario y el archivo
  const formData = new FormData();
  formData.append('Nombre del proyecto', form.nombre.value);
  formData.append('¿DJ o Banda Versatil?', form.nombre.value);
  formData.append('Página web', form.nombre.value);
  formData.append('anios-tocando', form['anios-tocando'].value);
  formData.append('archivo', archivoSeleccionado);

  // Enviar el formulario y el archivo al servidor usando fetch
  fetch('/ruta-al-servidor', {
    method: 'POST',
    body: formData
    })
    .then(response => {
    if (response.ok) {
    alert('El formulario se envió correctamente');
    form.reset();
    } else {
    alert('Ocurrió un error al enviar el formulario');
    }
    })
    .catch(error => {
    console.error('Error al enviar el formulario:', error);
    alert('Ocurrió un error al enviar el formulario');
    });
    });


  