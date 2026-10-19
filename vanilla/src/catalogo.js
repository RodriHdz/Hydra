
/*
============================================
HYDRA - CATÁLOGO DE PRODUCTOS
Hackathon Generation
15 productos | Ofertas | Favoritos | Carrito
Imágenes ubicadas en src/assets
============================================
*/

// 1. IMÁGENES DE PRODUCTOS

const imagenes = import.meta.glob("./assets/*.png", {
  eager: true,
  query: "?url",
  import: "default"
});

export function obtenerImagen(nombreArchivo) {
  return imagenes[`./assets/${nombreArchivo}`] || "";
}

function buscarImagen(nombreParcial) {
  const ruta = Object.keys(imagenes).find((archivo) =>
    archivo.toLowerCase().includes(nombreParcial.toLowerCase())
  );

  return ruta ? imagenes[ruta] : "";
}

// 2. LISTADO DE LOS 15 PRODUCTOS

export const productos = [
  // TRAJES DE BAÑO
  {
    id: 1,
    nombre: "AquaFlow Pro Suit",
    categoria: "trajes",
    descripcion: "Traje deportivo para mujer.",
    precio: 1499,
    imagen: obtenerImagen("traje de baño 1.png"),
    etiqueta: "BESTSELLER",
    calificacion: 4.9
  },
  {
    id: 2,
    nombre: "Butterfly Wave Edition",
    categoria: "trajes",
    descripcion: "Traje exclusivo con diseño de mariposas.",
    precio: 1799,
    imagen: obtenerImagen("traje de baño 2.png"),
    etiqueta: "NUEVO",
    calificacion: 4.8
  },
  {
    id: 3,
    nombre: "Hydra Jammer X",
    categoria: "trajes",
    descripcion: "Traje de natación para hombre.",
    precio: 1399,
    imagen: buscarImagen("traje de baño 3"),
    etiqueta: "EXCLUSIVO",
    calificacion: 4.7
  },

  // GOGGLES
  {
    id: 4,
    nombre: "Hydra Vision Elite",
    categoria: "goggles",
    descripcion: "Goggles profesionales de competencia.",
    precio: 899,
    imagen: obtenerImagen("Gogles 1.png"),
    etiqueta: "BESTSELLER",
    calificacion: 4.9
  },
  {
    id: 5,
    nombre: "Aqua Focus Junior",
    categoria: "goggles",
    descripcion: "Goggles para entrenamiento.",
    precio: 399,
    precioAnterior: 499,
    imagen: obtenerImagen("Gogles 2.png"),
    etiqueta: "OFERTA",
    calificacion: 4.8
  },
  {
    id: 6,
    nombre: "Vortex Mirror Pro",
    categoria: "goggles",
    descripcion: "Goggles con lentes espejo.",
    precio: 999,
    imagen: obtenerImagen("Gogles 3.png"),
    etiqueta: "EXCLUSIVO",
    calificacion: 4.9
  },

  // GORROS DE NATACIÓN
  {
    id: 7,
    nombre: "Cap Axolotl Aqua",
    categoria: "accesorios",
    descripcion: "Gorra turquesa con ajolote.",
    precio: 349,
    imagen: obtenerImagen("gorrito 1.png"),
    etiqueta: "EXCLUSIVO",
    calificacion: 5.0
  },
  {
    id: 8,
    nombre: "Cap México Edition",
    categoria: "accesorios",
    descripcion: "Gorra inspirada en México.",
    precio: 299,
    precioAnterior: 349,
    imagen: obtenerImagen("gorrito 2.png"),
    etiqueta: "OFERTA",
    calificacion: 4.9
  },
  {
    id: 9,
    nombre: "Cap Butterfly Dream",
    categoria: "accesorios",
    descripcion: "Gorra con diseño de mariposas.",
    precio: 399,
    imagen: obtenerImagen("gorrito 4.png"),
    etiqueta: "EXCLUSIVO",
    calificacion: 4.8
  },
  {
    id: 10,
    nombre: "Cap Axolotl Black",
    categoria: "accesorios",
    descripcion: "Gorra negra con ajolote de colores.",
    precio: 279,
    precioAnterior: 349,
    imagen: obtenerImagen("gorrito 5.png"),
    etiqueta: "OFERTA",
    calificacion: 4.9
  },
  {
    id: 11,
    nombre: "Cap Día de Muertos",
    categoria: "accesorios",
    descripcion: "Gorra con diseño cultural mexicano.",
    precio: 399,
    imagen: obtenerImagen("gorrito 6.png"),
    etiqueta: "EXCLUSIVO",
    calificacion: 5.0
  },

  // ACCESORIOS
  {
    id: 12,
    nombre: "Hydra Swim Pack",
    categoria: "accesorios",
    descripcion: "Kit de tapones, clip nasal y estuche.",
    precio: 699,
    imagen: buscarImagen("Hydra Swim Pack"),
    etiqueta: "NUEVO",
    calificacion: 4.8
  },

  // ENTRENAMIENTO
  {
    id: 13,
    nombre: "Hydra Power Fins",
    categoria: "entrenamiento",
    descripcion: "Aletas para fortalecer las piernas.",
    precio: 1199,
    imagen: buscarImagen("Hydra Power Fins"),
    etiqueta: "BESTSELLER",
    calificacion: 4.8
  },
  {
    id: 14,
    nombre: "Kickboard Flow",
    categoria: "entrenamiento",
    descripcion: "Tabla para mejorar la patada.",
    precio: 499,
    imagen: obtenerImagen("Kickboard Flow.png"),
    etiqueta: "NUEVO",
    calificacion: 4.7
  },
  {
    id: 15,
    nombre: "Pull Buoy Core",
    categoria: "entrenamiento",
    descripcion: "Flotador para entrenamiento de brazos.",
    precio: 449,
    imagen: obtenerImagen("Pull Buoy Core.png"),
    etiqueta: "EXCLUSIVO",
    calificacion: 4.8
  }
];

// 3. FORMATO DE PRECIOS

export function formatearPrecio(precio) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
  }).format(precio);
}

// 4. PORCENTAJE DE DESCUENTO

export function calcularDescuento(producto) {
  if (!producto.precioAnterior ||
      producto.precioAnterior <= producto.precio) {
    return 0;
  }

  return Math.round(
    ((producto.precioAnterior - producto.precio) /
      producto.precioAnterior) * 100
  );
}

// 5. FILTRAR PRODUCTOS

export function filtrarProductos(categoria = "todo") {
  if (categoria === "todo") {
    return [...productos];
  }

  if (categoria === "ofertas") {
    return productos.filter(
      (producto) => calcularDescuento(producto) > 0
    );
  }

  return productos.filter(
    (producto) => producto.categoria === categoria
  );
}

// 6. ORDENAR PRODUCTOS

export function ordenarProductos(lista, criterio = "recomendados") {
  const resultado = [...lista];

  switch (criterio) {
    case "precio-menor":
      return resultado.sort((a, b) => a.precio - b.precio);

    case "precio-mayor":
      return resultado.sort((a, b) => b.precio - a.precio);

    case "nombre":
      return resultado.sort((a, b) =>
        a.nombre.localeCompare(b.nombre, "es")
      );

    default:
      return resultado.sort(
        (a, b) => b.calificacion - a.calificacion
      );
  }
}

// 7. FAVORITOS CON LOCALSTORAGE

const CLAVE_FAVORITOS = "hydra_favoritos";

export function obtenerFavoritos() {
  try {
    const datos = JSON.parse(
      localStorage.getItem(CLAVE_FAVORITOS) || "[]"
    );

    return Array.isArray(datos) ? datos : [];
  } catch (error) {
    console.warn("Error al leer favoritos:", error);
    return [];
  }
}

export function cambiarFavorito(idProducto) {
  const favoritos = obtenerFavoritos();

  const nuevos = favoritos.includes(idProducto)
    ? favoritos.filter((id) => id !== idProducto)
    : [...favoritos, idProducto];

  try {
    localStorage.setItem(
      CLAVE_FAVORITOS,
      JSON.stringify(nuevos)
    );
  } catch (error) {
    console.warn("No se pudieron guardar favoritos:", error);
  }

  return nuevos;
}

// 8. CARRITO CON LOCALSTORAGE

const CLAVE_CARRITO = "hydra_carrito";

export function obtenerCarrito() {
  try {
    const datos = JSON.parse(
      localStorage.getItem(CLAVE_CARRITO) || "[]"
    );

    return Array.isArray(datos) ? datos : [];
  } catch (error) {
    console.warn("Error al leer el carrito:", error);
    return [];
  }
}

export function agregarAlCarrito(idProducto) {
  const producto = productos.find(
    (item) => item.id === idProducto
  );

  if (!producto) {
    console.warn("Producto no encontrado:", idProducto);
    return null;
  }

  const carrito = obtenerCarrito();

  const existente = carrito.find(
    (item) => item.id === idProducto
  );

  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1
    });
  }

  try {
    localStorage.setItem(
      CLAVE_CARRITO,
      JSON.stringify(carrito)
    );

    window.dispatchEvent(
      new CustomEvent("hydra:carrito-actualizado", {
        detail: { carrito, producto }
      })
    );

    return carrito;
  } catch (error) {
    console.warn("No se pudo guardar el carrito:", error);
    return null;
  }
}

// 9. CREAR TARJETA DE PRODUCTO

function crearTarjeta(producto) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "catalogo-tarjeta";

  // Imagen
  const contenedorImagen = document.createElement("div");
  contenedorImagen.className = "catalogo-imagen-contenedor";

  const imagen = document.createElement("img");
  imagen.className = "catalogo-imagen";
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;
  imagen.loading = "lazy";

  contenedorImagen.appendChild(imagen);

  // Etiqueta
  if (producto.etiqueta) {
    const etiqueta = document.createElement("span");
    etiqueta.className = "catalogo-etiqueta";
    etiqueta.textContent = producto.etiqueta;

    if (calcularDescuento(producto) > 0) {
      etiqueta.classList.add("oferta");
    }

    contenedorImagen.appendChild(etiqueta);
  }

  // Favoritos
  const favorito = document.createElement("button");
  favorito.type = "button";
  favorito.className = "catalogo-favorito";

  function actualizarFavorito() {
    const activo = obtenerFavoritos().includes(producto.id);

    favorito.textContent = activo ? "♥" : "♡";
    favorito.classList.toggle("activo", activo);

    favorito.setAttribute(
      "aria-label",
      `${activo ? "Quitar" : "Agregar"} ${producto.nombre} ${
        activo ? "de" : "a"
      } favoritos`
    );
  }

  favorito.addEventListener("click", () => {
    cambiarFavorito(producto.id);
    actualizarFavorito();
  });

  actualizarFavorito();
  contenedorImagen.appendChild(favorito);

  // Información
  const info = document.createElement("div");
  info.className = "catalogo-info";

  const categorias = {
    trajes: "TRAJES DE BAÑO",
    goggles: "GOGGLES",
    accesorios: "ACCESORIOS",
    entrenamiento: "ENTRENAMIENTO"
  };

  const categoria = document.createElement("span");
  categoria.className = "catalogo-categoria";
  categoria.textContent = categorias[producto.categoria];

  const nombre = document.createElement("h3");
  nombre.className = "catalogo-nombre";
  nombre.textContent = producto.nombre;

  const calificacion = document.createElement("div");
  calificacion.className = "catalogo-calificacion";
  calificacion.textContent = `★ ${producto.calificacion}`;

  // Zona de precio y descuento
  const pie = document.createElement("div");
  pie.className = "catalogo-pie";

  const precios = document.createElement("div");
  precios.className = "catalogo-precios";

  const precioActual = document.createElement("strong");
  precioActual.className = "catalogo-precio";
  precioActual.textContent = formatearPrecio(producto.precio);

  precios.appendChild(precioActual);

  const descuento = calcularDescuento(producto);

  if (descuento > 0) {
    precioActual.classList.add("precio-oferta");

    const datosOferta = document.createElement("div");
    datosOferta.className = "catalogo-datos-oferta";

    const anterior = document.createElement("del");
    anterior.className = "catalogo-precio-anterior";
    anterior.textContent = formatearPrecio(
      producto.precioAnterior
    );

    const porcentaje = document.createElement("span");
    porcentaje.className = "catalogo-descuento";
    porcentaje.textContent = `-${descuento}%`;

    datosOferta.append(anterior, porcentaje);
    precios.appendChild(datosOferta);
  }

  // Botón agregar al carrito
  const agregar = document.createElement("button");
  agregar.type = "button";
  agregar.className = "catalogo-agregar";
  agregar.textContent = "+";

  agregar.setAttribute(
    "aria-label",
    `Agregar ${producto.nombre} al carrito`
  );

  agregar.addEventListener("click", () => {
    const carrito = agregarAlCarrito(producto.id);

    if (carrito) {
      agregar.textContent = "✓";

      agregar.setAttribute(
        "aria-label",
        `${producto.nombre} agregado al carrito`
      );

      setTimeout(() => {
        agregar.textContent = "+";

        agregar.setAttribute(
          "aria-label",
          `Agregar ${producto.nombre} al carrito`
        );
      }, 1000);
    }
  });

  pie.append(precios, agregar);
  info.append(categoria, nombre, calificacion, pie);
  tarjeta.append(contenedorImagen, info);

  return tarjeta;
}

// 10. INICIAR CATÁLOGO

export function iniciarCatalogo(contenedor) {
  const elemento = typeof contenedor === "string"
    ? document.querySelector(contenedor)
    : contenedor;

  if (!elemento) {
    console.warn("No se encontró el contenedor HYDRA.");
    return;
  }

  let categoriaActual = "todo";
  let ordenActual = "recomendados";
  let mostrarTodos = false;

  elemento.classList.add("catalogo-hydra");

  elemento.innerHTML = `
    <header class="catalogo-encabezado">
      <span class="catalogo-subtitulo">
        SELECCIÓN HYDRA
      </span>

      <h2 class="catalogo-titulo">
        DISEÑADO PARA GANAR
      </h2>

      <p class="catalogo-descripcion">
        Descubre nuestra colección de productos para natación.
      </p>
    </header>

    <div class="catalogo-controles">
      <nav class="catalogo-filtros"
           aria-label="Categorías de productos">

        <button type="button"
                class="catalogo-filtro activo"
                data-categoria="todo">
          Todo
        </button>

        <button type="button"
                class="catalogo-filtro"
                data-categoria="trajes">
          Trajes de baño
        </button>

        <button type="button"
                class="catalogo-filtro"
                data-categoria="goggles">
          Goggles
        </button>

        <button type="button"
                class="catalogo-filtro"
                data-categoria="accesorios">
          Accesorios
        </button>

        <button type="button"
                class="catalogo-filtro"
                data-categoria="entrenamiento">
          Entrenamiento
        </button>

        <button type="button"
                class="catalogo-filtro"
                data-categoria="ofertas">
          OFERTAS
        </button>
      </nav>

      <select class="catalogo-ordenar"
              aria-label="Ordenar productos">
        <option value="recomendados">
          ORDENAR: RECOMENDADOS
        </option>
        <option value="precio-menor">
          PRECIO: MENOR A MAYOR
        </option>
        <option value="precio-mayor">
          PRECIO: MAYOR A MENOR
        </option>
        <option value="nombre">
          NOMBRE: A-Z
        </option>
      </select>
    </div>

    <div class="catalogo-grid"
         aria-live="polite"></div>

    <div class="catalogo-acciones">
      <button type="button"
              class="catalogo-ver-todos">
        VER TODOS LOS PRODUCTOS →
      </button>
    </div>
  `;

  const grid = elemento.querySelector(".catalogo-grid");
  const filtros = elemento.querySelectorAll(".catalogo-filtro");
  const ordenar = elemento.querySelector(".catalogo-ordenar");
  const botonTodos = elemento.querySelector(".catalogo-ver-todos");

  // Mostrar tarjetas
  function renderizar() {
    let lista = filtrarProductos(categoriaActual);
    lista = ordenarProductos(lista, ordenActual);

    if (!mostrarTodos) {
      lista = lista.slice(0, 4);
    }

    grid.replaceChildren();

    if (lista.length === 0) {
      const mensaje = document.createElement("p");
      mensaje.textContent = "No hay productos disponibles.";
      grid.appendChild(mensaje);
    } else {
      lista.forEach((producto) => {
        grid.appendChild(crearTarjeta(producto));
      });
    }

    const total = filtrarProductos(categoriaActual).length;

    botonTodos.hidden = total <= 4;

    botonTodos.textContent = mostrarTodos
      ? "MOSTRAR MENOS ↑"
      : "VER TODOS LOS PRODUCTOS →";
  }

  // Cambiar categorías
  filtros.forEach((boton) => {
    boton.addEventListener("click", () => {
      categoriaActual = boton.dataset.categoria;
      mostrarTodos = false;

      filtros.forEach((filtro) => {
        const activo = filtro === boton;
        filtro.classList.toggle("activo", activo);
        filtro.setAttribute("aria-pressed", String(activo));
      });

      renderizar();
    });

    boton.setAttribute(
      "aria-pressed",
      String(boton.classList.contains("activo"))
    );
  });

  // Ordenamiento
  ordenar.addEventListener("change", () => {
    ordenActual = ordenar.value;
    renderizar();
  });

  // Ver todos o mostrar menos
  botonTodos.addEventListener("click", () => {
    mostrarTodos = !mostrarTodos;
    renderizar();
  });

  renderizar();
}
