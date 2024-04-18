const apiKey = 'DXz6WUQahLz8Ku2d6YMN6tCe4kKFRNXc0coyllD0';

async function obtenerImagenNASA() {
    //obteber fecha
  const fechaInput = document.getElementById('fechaInput').value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${fechaInput}`;
  
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    mostrarImagen(datos);
  } catch (error) {
    console.error('Error al obtener la imagen de la NASA:', error);
  }
}

function mostrarImagen(datos) {
  const imagenContainer = document.getElementById('imagenContainer');
  const tituloContainer = document.getElementById('tituloContainer');
  const fechaContainer = document.getElementById('fechaContainer');
  const descripcionContainer = document.getElementById('descripcionContainer');

  if (datos.media_type === "image") {
    const titulo = datos.title;
    const fecha = datos.date;
    const imagenUrl = datos.url;
    const descripcion = datos.explanation;

    const tituloElement = document.createElement('h2');
    tituloElement.textContent = titulo;
    tituloContainer.innerHTML = '';
    tituloContainer.appendChild(tituloElement);

    //estilos titulo
    tituloContainer.style.color = '#FFFFFF'

    fechaContainer.textContent = `Fecha: ${fecha}`;

    //estilos fecha
    fechaContainer.style.color = '#FFFFFF'
    fechaContainer.style.marginTop = '15px';

    const imagen = document.createElement('img');
    imagen.src = imagenUrl;
    imagenContainer.innerHTML = '';
    imagenContainer.appendChild(imagen);

    descripcionContainer.textContent = descripcion;

    //estilos descripción
    descripcionContainer.style.color = '#FFFFFF'
    descripcionContainer.style.width = '50%'
    descripcionContainer.style.marginTop = '15px'
    
  } else {
    tituloContainer.textContent = '';
    fechaContainer.textContent = '';
    imagenContainer.innerHTML = '';
    descripcionContainer.textContent = 'No se encontró una imagen para esta fecha.';

    //estilos descripción
    descripcionContainer.style.color = '#FFFFFF'
  }
}
