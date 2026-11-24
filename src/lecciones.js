
const lecciones = {
  'Análisis y descomposición de problemas complejos': {
    objetivo: 'Analizar problemas complejos y dividirlos en partes más pequeñas para diseñar soluciones computacionales.',
    conceptos: [
      {
        titulo: '¿Qué es un problema computacional?',
        texto: 'Un problema computacional es una situación que necesita una solución que puede obtenerse mediante un procedimiento lógico ejecutado por una persona o una computadora. Para resolverlo debemos identificar qué información tenemos, qué resultado necesitamos y qué pasos debemos seguir.'
      },
      {
        titulo: 'Análisis del problema',
        texto: 'Analizar un problema consiste en comprenderlo antes de comenzar a programar. Se identifican los datos de entrada, los procesos que deben realizarse y los resultados esperados.'
      },
      {
        titulo: 'Descomposición',
        texto: 'La descomposición consiste en dividir un problema grande en problemas pequeños. Cada parte puede estudiarse y resolverse por separado. Esto permite organizar mejor el trabajo y reducir errores.'
      },
      {
        titulo: 'Datos de entrada, proceso y salida',
        texto: 'La entrada contiene los datos que recibe el sistema. El proceso representa las operaciones realizadas con esos datos. La salida es el resultado que obtiene el usuario.'
      },
      {
        titulo: 'Abstracción',
        texto: 'La abstracción permite concentrarse en los elementos importantes de un problema y dejar de lado detalles que no afectan a la solución.'
      }
    ],
    ejemplo: {
      titulo: 'Ejemplo: calcular el promedio de un estudiante',
      pasos: [
        'Entrada: las tres calificaciones del estudiante.',
        'Proceso: sumar las calificaciones y dividir el resultado para tres.',
        'Salida: mostrar el promedio obtenido.'
      ],
      solucion: 'Si las calificaciones son 8, 9 y 10, el promedio es (8 + 9 + 10) / 3 = 9.'
    },
    video: {
      titulo: 'Introducción al pensamiento computacional',
      url: 'https://www.youtube.com/results?search_query=pensamiento+computacional+descomposicion+de+problemas'
    }
  },

  'Modelación de soluciones mediante abstracción': {
    objetivo: 'Representar situaciones reales mediante modelos simplificados que permitan diseñar soluciones computacionales.',
    conceptos: [
      {
        titulo: '¿Qué es un modelo?',
        texto: 'Un modelo es una representación simplificada de un objeto, proceso o situación. En informática permite estudiar un problema antes de construir un programa.'
      },
      {
        titulo: 'Abstracción',
        texto: 'La abstracción consiste en seleccionar las características esenciales de una situación y omitir los detalles secundarios.'
      },
      {
        titulo: 'Identificación de entidades',
        texto: 'Las entidades representan los elementos importantes de un sistema. En un sistema escolar pueden ser estudiantes, docentes, asignaturas y calificaciones.'
      },
      {
        titulo: 'Relaciones entre elementos',
        texto: 'Las relaciones describen cómo se conectan las entidades. Por ejemplo, un estudiante puede estar inscrito en varias asignaturas.'
      },
      {
        titulo: 'Representación de modelos',
        texto: 'Los modelos pueden representarse mediante diagramas, tablas, esquemas y descripciones estructuradas.'
      }
    ],
    ejemplo: {
      titulo: 'Ejemplo: modelar una biblioteca',
      pasos: [
        'Identificar las entidades: libros, usuarios y préstamos.',
        'Determinar sus características: título, autor, nombre e identificación.',
        'Establecer relaciones entre usuarios, libros y préstamos.',
        'Representar el modelo mediante un diagrama.'
      ],
      solucion: 'El modelo permite comprender cómo funciona la biblioteca antes de desarrollar su sistema informático.'
    },
    video: {
      titulo: 'Abstracción y modelado de problemas',
      url: 'https://www.youtube.com/results?search_query=abstraccion+modelado+de+problemas+informatica'
    }
  },

  'Diseño de algoritmos y pseudocódigo estructurado': {
    objetivo: 'Diseñar algoritmos ordenados y expresarlos mediante pseudocódigo.',
    conceptos: [
      {
        titulo: '¿Qué es un algoritmo?',
        texto: 'Un algoritmo es un conjunto finito y ordenado de instrucciones que permite resolver un problema o realizar una tarea.'
      },
      {
        titulo: 'Características de los algoritmos',
        texto: 'Un algoritmo debe tener instrucciones claras, un orden definido, datos de entrada cuando sean necesarios y un resultado. También debe terminar después de una cantidad finita de pasos.'
      },
      {
        titulo: 'Pseudocódigo',
        texto: 'El pseudocódigo es una forma de describir algoritmos utilizando palabras y estructuras similares a las de un lenguaje de programación, sin depender de una sintaxis específica.'
      },
      {
        titulo: 'Secuencia de instrucciones',
        texto: 'La estructura secuencial ejecuta instrucciones una después de otra, siguiendo el orden establecido.'
      },
      {
        titulo: 'Diseño estructurado',
        texto: 'El diseño estructurado organiza las instrucciones en bloques lógicos para facilitar la comprensión, modificación y mantenimiento de un algoritmo.'
      }
    ],
    ejemplo: {
      titulo: 'Ejemplo: sumar dos números',
      pasos: [
        'Inicio.',
        'Leer el primer número.',
        'Leer el segundo número.',
        'Calcular la suma.',
        'Mostrar el resultado.',
        'Fin.'
      ],
      solucion: 'Pseudocódigo: INICIO, LEER A, LEER B, SUMA ← A + B, ESCRIBIR SUMA, FIN.'
    },
    video: {
      titulo: 'Algoritmos y pseudocódigo',
      url: 'https://www.youtube.com/results?search_query=algoritmos+y+pseudocodigo+desde+cero'
    }
  },

  'Diagramas de flujo y estructuras de control': {
    objetivo: 'Representar algoritmos gráficamente e identificar las estructuras de control.',
    conceptos: [
      {
        titulo: '¿Qué es un diagrama de flujo?',
        texto: 'Es una representación gráfica de un algoritmo. Utiliza símbolos conectados mediante flechas para mostrar el orden de las operaciones.'
      },
      {
        titulo: 'Símbolos principales',
        texto: 'El óvalo representa el inicio o final, el rectángulo representa un proceso, el paralelogramo representa entrada o salida y el rombo representa una decisión.'
      },
      {
        titulo: 'Estructura secuencial',
        texto: 'Ejecuta instrucciones una detrás de otra, sin saltos ni decisiones.'
      },
      {
        titulo: 'Estructura condicional',
        texto: 'Permite elegir entre diferentes caminos según se cumpla o no una condición.'
      },
      {
        titulo: 'Estructura repetitiva',
        texto: 'Permite repetir instrucciones mientras se cumpla una condición o durante una cantidad determinada de iteraciones.'
      }
    ],
    ejemplo: {
      titulo: 'Ejemplo: determinar si un número es par',
      pasos: [
        'Solicitar un número.',
        'Calcular el residuo de dividirlo entre dos.',
        'Comprobar si el residuo es cero.',
        'Si es cero, mostrar que es par.',
        'En caso contrario, mostrar que es impar.'
      ],
      solucion: 'La condición número MOD 2 = 0 permite determinar si el número es par.'
    },
    video: {
      titulo: 'Diagramas de flujo y estructuras de control',
      url: 'https://www.youtube.com/results?search_query=diagramas+de+flujo+estructuras+de+control'
    }
  },

  'Validación, eficiencia y trazabilidad algorítmica': {
    objetivo: 'Comprobar la corrección de los algoritmos y analizar su eficiencia.',
    conceptos: [
      {
        titulo: 'Validación',
        texto: 'La validación permite comprobar que un algoritmo responde correctamente al problema planteado y produce resultados adecuados.'
      },
      {
        titulo: 'Pruebas de escritorio',
        texto: 'Una prueba de escritorio consiste en ejecutar manualmente un algoritmo utilizando datos de ejemplo y registrando el valor de sus variables en cada paso.'
      },
      {
        titulo: 'Detección de errores',
        texto: 'Los errores pueden aparecer en la lógica, en los datos utilizados o en la forma de expresar las instrucciones. Detectarlos permite corregir el algoritmo.'
      },
      {
        titulo: 'Eficiencia algorítmica',
        texto: 'La eficiencia analiza los recursos que utiliza un algoritmo, principalmente el tiempo de ejecución y la memoria.'
      },
      {
        titulo: 'Trazabilidad',
        texto: 'La trazabilidad permite seguir el recorrido de los datos y las instrucciones para comprender cómo se obtiene un resultado.'
      }
    ],
    ejemplo: {
      titulo: 'Ejemplo: validar una edad',
      pasos: [
        'Solicitar la edad de una persona.',
        'Comprobar que el dato sea un número válido.',
        'Verificar que la edad no sea negativa.',
        'Mostrar el resultado correspondiente.'
      ],
      solucion: 'Si se introduce 16, el dato es válido. Si se introduce -5, el sistema debe rechazarlo.'
    },
    video: {
      titulo: 'Pruebas de escritorio y validación de algoritmos',
      url: 'https://www.youtube.com/results?search_query=pruebas+de+escritorio+validacion+algoritmos'
    }
  },

  'Variables, constantes y sistemas de tipos': {
    objetivo: 'Comprender cómo se almacenan y clasifican los datos en un programa.',
    conceptos: [
      {
        titulo: '¿Qué es una variable?',
        texto: 'Una variable es un espacio identificado mediante un nombre que permite almacenar un dato durante la ejecución de un programa. Su valor puede cambiar.'
      },
      {
        titulo: '¿Qué es una constante?',
        texto: 'Una constante representa un valor que se mantiene sin cambios durante la ejecución del programa.'
      },
      {
        titulo: 'Tipos de datos enteros y decimales',
        texto: 'Los datos enteros representan números sin parte decimal, mientras que los decimales permiten representar cantidades con fracciones.'
      },
      {
        titulo: 'Datos de texto y booleanos',
        texto: 'Los datos de texto almacenan caracteres y palabras. Los booleanos representan valores lógicos: verdadero o falso.'
      },
      {
        titulo: 'Declaración e inicialización',
        texto: 'Declarar una variable consiste en establecer su identificación y tipo cuando el lenguaje lo requiere. Inicializarla significa asignarle un valor inicial.'
      }
    ],
    ejemplo: {
      titulo: 'Ejemplo: almacenar información de un estudiante',
      pasos: [
        'Declarar la variable nombre.',
        'Asignarle el texto Ana.',
        'Declarar la variable edad.',
        'Asignarle el número 16.',
        'Declarar la variable aprobado.',
        'Asignarle el valor verdadero.'
      ],
      solucion: 'nombre = "Ana"; edad = 16; aprobado = true.'
    },
    video: {
      titulo: 'Variables y tipos de datos en programación',
      url: 'https://www.youtube.com/results?search_query=variables+constantes+tipos+de+datos+programacion'
    }
  }
}
// ======================================================
// LECCIONES DE DISEÑO Y DESARROLLO WEB
// ======================================================

const crearLeccionWeb = (objetivo, conceptos, ejemplo, pasos, solucion, video, busqueda) => ({
  objetivo,
  conceptos: conceptos.map(([titulo, texto]) => ({ titulo, texto })),
  ejemplo: { titulo: ejemplo, pasos, solucion },
  video: {
    titulo: video,
    url: `https://www.youtube.com/results?search_query=${encodeURIComponent(busqueda)}`
  }
})

Object.assign(lecciones, {

  // MÓDULO 1: FUNDAMENTOS DEL DESARROLLO WEB

  'Introducción a Internet y la arquitectura web': crearLeccionWeb(
    'Comprender qué es Internet, cómo funciona la Web y cuáles son sus componentes principales.',
    [
      ['¿Qué es Internet?', 'Internet es una red mundial que conecta millones de dispositivos para intercambiar información y utilizar servicios digitales.'],
      ['¿Qué es la Web?', 'La World Wide Web es un servicio que funciona mediante Internet y permite consultar páginas y sitios web utilizando navegadores.'],
      ['Diferencia entre Internet y Web', 'Internet es la infraestructura de conexión. La Web es uno de los servicios que utiliza esa infraestructura para mostrar documentos y recursos.'],
      ['Sitio web y página web', 'Una página web es un documento digital. Un sitio web es un conjunto de páginas relacionadas que pertenecen a una misma organización o proyecto.'],
      ['Arquitectura cliente-servidor', 'En este modelo, el cliente solicita información y el servidor recibe la solicitud, procesa la petición y envía una respuesta.']
    ],
    'Ejemplo: visitar una página educativa',
    [
      'El estudiante abre un navegador.',
      'Escribe la dirección de un sitio educativo.',
      'El navegador solicita la página al servidor.',
      'El servidor responde enviando los recursos necesarios.',
      'El navegador muestra el contenido en la pantalla.'
    ],
    'La comunicación entre el navegador y el servidor permite que el estudiante consulte los contenidos del sitio.',
    '¿Cómo funciona Internet y la Web?',
    'qué es Internet y cómo funciona la World Wide Web para principiantes'
  ),

  'Funcionamiento de navegadores y servidores': crearLeccionWeb(
    'Identificar las funciones de los navegadores, los servidores y los protocolos utilizados para acceder a sitios web.',
    [
      ['¿Qué es un navegador?', 'Es un programa que permite visitar sitios web, interpretar sus contenidos y mostrar textos, imágenes, videos y elementos interactivos.'],
      ['Ejemplos de navegadores', 'Chrome, Firefox, Edge y Safari son navegadores que permiten acceder a páginas web.'],
      ['¿Qué es un servidor web?', 'Es un sistema que almacena o procesa recursos y responde a las solicitudes de los navegadores.'],
      ['Protocolo HTTP y HTTPS', 'HTTP permite la comunicación para transferir recursos web. HTTPS añade cifrado para proteger la comunicación.'],
      ['Direcciones web y dominios', 'Una dirección URL identifica un recurso. El dominio es el nombre que permite localizar un sitio, como ejemplo.com.']
    ],
    'Ejemplo: abrir un sitio web',
    [
      'Escribir una dirección web en el navegador.',
      'El navegador localiza el servidor correspondiente.',
      'Envía una solicitud utilizando HTTP o HTTPS.',
      'El servidor responde con los recursos solicitados.',
      'El navegador interpreta y presenta la página.'
    ],
    'El navegador funciona como cliente y el servidor entrega los recursos necesarios para mostrar el sitio.',
    'Navegadores, servidores y HTTP',
    'cómo funcionan los navegadores servidores web HTTP HTTPS explicación'
  ),

  'Estructura de páginas web': crearLeccionWeb(
    'Reconocer las partes principales de una página web y comprender cómo se organiza su contenido.',
    [
      ['Encabezado o header', 'Es la zona superior de una página. Puede incluir el logotipo, el nombre del sitio y elementos de navegación.'],
      ['Menú de navegación', 'Permite desplazarse entre las diferentes secciones o páginas de un sitio web.'],
      ['Contenido principal', 'Es la zona donde se presenta la información más importante de la página. Puede incluir textos, imágenes, videos y actividades.'],
      ['Barra lateral', 'Es una sección complementaria que puede mostrar enlaces, categorías, información adicional o recursos relacionados.'],
      ['Pie de página o footer', 'Se encuentra al final y puede contener información de contacto, derechos de autor y enlaces importantes.']
    ],
    'Ejemplo: estructura de un sitio educativo',
    [
      'Crear un encabezado con el nombre Campus ABC.',
      'Agregar un menú con las secciones Inicio, Cursos y Contacto.',
      'Colocar las clases en el contenido principal.',
      'Añadir una sección lateral con recursos.',
      'Crear un pie de página con información del proyecto.'
    ],
    'La página queda organizada en secciones que facilitan la navegación y la comprensión del contenido.',
    'Partes y estructura de una página web',
    'estructura de una página web header nav main aside footer'
  ),

  'Lenguajes HTML, CSS y JavaScript': crearLeccionWeb(
    'Diferenciar las funciones de HTML, CSS y JavaScript en la creación de sitios web.',
    [
      ['HTML: estructura', 'HTML es el lenguaje de marcado utilizado para organizar el contenido de una página, como títulos, párrafos, imágenes y enlaces.'],
      ['CSS: presentación', 'CSS permite definir colores, tamaños, espacios, tipografías y distribución visual de los elementos.'],
      ['JavaScript: comportamiento', 'JavaScript permite agregar interactividad, responder a eventos y modificar el contenido de una página.'],
      ['Trabajo conjunto', 'HTML organiza el contenido, CSS controla su apariencia y JavaScript permite que la página responda a las acciones del usuario.'],
      ['Archivos de un proyecto', 'Un proyecto básico puede organizarse en archivos index.html, styles.css y script.js.']
    ],
    'Ejemplo: crear una tarjeta de presentación',
    [
      'Utilizar HTML para crear un título y un párrafo.',
      'Utilizar CSS para cambiar el color y el tamaño del texto.',
      'Utilizar JavaScript para responder al clic de un botón.',
      'Abrir el archivo HTML en un navegador.'
    ],
    'Los tres lenguajes cumplen funciones diferentes y se complementan para construir una página web.',
    'HTML CSS y JavaScript desde cero',
    'HTML CSS JavaScript diferencias tutorial para principiantes'
  ),

  'Diseño y planificación de sitios web': crearLeccionWeb(
    'Planificar un sitio web considerando sus objetivos, usuarios, contenidos y organización.',
    [
      ['Objetivo del sitio', 'Antes de diseñar se debe establecer para qué se construirá el sitio y qué necesidad pretende resolver.'],
      ['Público objetivo', 'Consiste en identificar a las personas que utilizarán el sitio para adaptar el contenido y la navegación a sus necesidades.'],
      ['Mapa del sitio', 'Es un esquema que muestra las páginas y secciones que tendrá un sitio web y cómo se relacionan.'],
      ['Boceto o wireframe', 'Es un dibujo preliminar que permite organizar los elementos de una página antes de programarla.'],
      ['Planificación de contenidos', 'Consiste en decidir qué textos, imágenes, videos y recursos se necesitan para cumplir el objetivo del sitio.']
    ],
    'Ejemplo: planificar un sitio de una institución educativa',
    [
      'Definir el objetivo: informar sobre la institución.',
      'Identificar a los usuarios: estudiantes, familias y docentes.',
      'Crear secciones: Inicio, Oferta académica, Noticias y Contacto.',
      'Dibujar un boceto de la página principal.',
      'Preparar los contenidos que se publicarán.'
    ],
    'La planificación permite construir un sitio ordenado y útil antes de comenzar a programarlo.',
    'Planificación y wireframes de páginas web',
    'cómo planificar un sitio web mapa del sitio wireframe principiantes'
  ),

  // MÓDULO 2: HTML Y ESTRUCTURACIÓN DE CONTENIDOS

  'Estructura de un documento HTML': crearLeccionWeb(
    'Construir documentos HTML utilizando su estructura básica y las etiquetas fundamentales.',
    [
      ['¿Qué es HTML?', 'HTML significa HyperText Markup Language y permite definir la estructura y el contenido de los documentos web.'],
      ['Declaración DOCTYPE', 'La declaración DOCTYPE indica al navegador que el documento utiliza HTML moderno. Se escribe como <!DOCTYPE html>.'],
      ['Elemento html', 'El elemento html contiene todo el documento y agrupa las secciones head y body.'],
      ['Sección head', 'La sección head contiene información del documento, como el título, la codificación y los enlaces a hojas de estilo.'],
      ['Sección body', 'La sección body contiene los elementos que el usuario visualiza en la página, como títulos, párrafos, imágenes y enlaces.']
    ],
    'Ejemplo: documento HTML básico',
    [
      'Crear un archivo llamado index.html.',
      'Escribir la declaración DOCTYPE.',
      'Agregar las etiquetas html, head y body.',
      'Dentro de head, escribir el título del documento.',
      'Dentro de body, agregar un encabezado y un párrafo.'
    ],
    'Una estructura básica permite que el navegador interprete correctamente el contenido del documento.',
    'Crear tu primer documento HTML',
    'estructura básica HTML5 desde cero documento html tutorial'
  ),

  'Etiquetas, atributos y elementos': crearLeccionWeb(
    'Utilizar etiquetas, atributos y elementos HTML para construir contenidos correctamente.',
    [
      ['¿Qué es una etiqueta?', 'Una etiqueta es una marca escrita entre signos de menor y mayor que indica el tipo de contenido o elemento que se desea crear.'],
      ['Etiquetas de apertura y cierre', 'Muchas etiquetas tienen una apertura y un cierre. Por ejemplo, un párrafo se escribe con p al inicio y /p al final.'],
      ['¿Qué es un elemento?', 'Un elemento HTML está formado normalmente por una etiqueta de apertura, su contenido y una etiqueta de cierre.'],
      ['¿Qué es un atributo?', 'Un atributo proporciona información adicional sobre un elemento y suele escribirse dentro de la etiqueta de apertura.'],
      ['Atributos comunes', 'Algunos atributos frecuentes son id, class, href, src y alt. Cada uno cumple una función diferente.']
    ],
    'Ejemplo: crear un enlace',
    [
      'Identificar el elemento que se desea crear.',
      'Utilizar la etiqueta a.',
      'Agregar el atributo href con la dirección de destino.',
      'Escribir el texto que verá el usuario.',
      'Cerrar la etiqueta.'
    ],
    'Ejemplo de código: <a href="https://www.ejemplo.com">Visitar sitio</a>.',
    'Etiquetas y atributos HTML',
    'HTML etiquetas elementos atributos explicación ejemplos'
  ),

  'Textos, enlaces e imágenes': crearLeccionWeb(
    'Incorporar textos, enlaces e imágenes para presentar información en una página web.',
    [
      ['Encabezados', 'Las etiquetas h1 a h6 permiten organizar los títulos según su nivel de importancia.'],
      ['Párrafos', 'La etiqueta p permite presentar bloques de texto de forma organizada y comprensible.'],
      ['Enlaces', 'La etiqueta a permite conectar una página con otra dirección web o con una sección del mismo documento.'],
      ['Imágenes', 'La etiqueta img permite insertar imágenes mediante el atributo src, que indica dónde se encuentra el archivo.'],
      ['Texto alternativo', 'El atributo alt describe una imagen y ayuda a las personas que utilizan lectores de pantalla o cuando la imagen no se puede cargar.']
    ],
    'Ejemplo: crear una página sobre animales',
    [
      'Agregar un título con h1.',
      'Escribir una descripción utilizando p.',
      'Insertar una imagen mediante img.',
      'Añadir un texto alternativo con alt.',
      'Crear un enlace hacia otra página informativa.'
    ],
    'Una página puede combinar títulos, párrafos, imágenes y enlaces para comunicar información.',
    'Textos enlaces e imágenes en HTML',
    'HTML títulos párrafos enlaces imágenes atributo alt tutorial'
  ),

  'Listas, tablas y formularios': crearLeccionWeb(
    'Organizar información mediante listas, tablas y formularios HTML.',
    [
      ['Listas ordenadas', 'La etiqueta ol crea listas numeradas. Cada elemento se incorpora utilizando la etiqueta li.'],
      ['Listas no ordenadas', 'La etiqueta ul crea listas cuyos elementos se muestran normalmente con viñetas.'],
      ['Tablas', 'Las tablas permiten organizar datos en filas y columnas mediante etiquetas como table, tr, th y td.'],
      ['Formularios', 'Los formularios permiten recopilar información introducida por los usuarios mediante campos y controles.'],
      ['Campos y botones', 'Elementos como input, label, textarea y button permiten crear campos de texto, etiquetas, áreas de escritura y botones.']
    ],
    'Ejemplo: formulario de inscripción',
    [
      'Crear un formulario utilizando la etiqueta form.',
      'Agregar una etiqueta label para el nombre.',
      'Agregar un campo input para escribir el nombre.',
      'Incorporar un campo para el correo electrónico.',
      'Agregar un botón para enviar el formulario.'
    ],
    'Los formularios permiten recopilar datos, aunque para almacenarlos o procesarlos se necesita una solución adicional.',
    'Listas tablas y formularios HTML',
    'HTML listas ordenadas tablas formularios input tutorial'
  ),

  'HTML semántico y accesibilidad': crearLeccionWeb(
    'Aplicar etiquetas semánticas y principios de accesibilidad para crear páginas comprensibles.',
    [
      ['¿Qué es HTML semántico?', 'Es el uso de etiquetas que describen el significado y la función del contenido, en lugar de utilizar elementos genéricos para todo.'],
      ['Etiquetas semánticas', 'Elementos como header, nav, main, section, article y footer ayudan a organizar el contenido de una página.'],
      ['Accesibilidad web', 'La accesibilidad busca que las páginas puedan ser utilizadas por personas con diferentes capacidades y formas de navegación.'],
      ['Imágenes accesibles', 'Las imágenes informativas deben incluir descripciones alternativas apropiadas mediante el atributo alt.'],
      ['Formularios accesibles', 'Los campos deben tener etiquetas claras y los controles deben poder identificarse y utilizarse de manera comprensible.']
    ],
    'Ejemplo: organizar una noticia',
    [
      'Crear un header para el encabezado del sitio.',
      'Agregar un nav para el menú.',
      'Utilizar main para el contenido principal.',
      'Crear un article para la noticia.',
      'Agregar un footer con información complementaria.'
    ],
    'El uso de elementos semánticos facilita la comprensión del documento y mejora su organización.',
    'HTML semántico y accesibilidad web',
    'HTML semántico accesibilidad web etiquetas header main article'
  ),

  // MÓDULO 3: CSS Y DISEÑO VISUAL

  'Fundamentos de CSS': crearLeccionWeb(
    'Comprender qué es CSS y cómo se utiliza para definir la apariencia de una página web.',
    [
      ['¿Qué es CSS?', 'CSS significa Cascading Style Sheets y es el lenguaje utilizado para controlar la presentación visual de los documentos HTML.'],
      ['Reglas CSS', 'Una regla CSS está formada por un selector y un bloque de declaraciones que indican qué estilos se aplicarán.'],
      ['Propiedades y valores', 'Las propiedades indican qué aspecto se modificará y los valores especifican cómo debe mostrarse.'],
      ['Formas de aplicar CSS', 'CSS puede escribirse en línea, dentro de una etiqueta style o en un archivo externo con extensión .css.'],
      ['Hoja de estilos externa', 'Un archivo externo permite separar los estilos del contenido HTML y facilita el mantenimiento del proyecto.']
    ],
    'Ejemplo: cambiar el color de un título',
    [
      'Crear un documento HTML con un título.',
      'Crear un archivo llamado styles.css.',
      'Escribir una regla para seleccionar h1.',
      'Asignar un color mediante la propiedad color.',
      'Enlazar la hoja CSS desde el documento HTML.'
    ],
    'La hoja de estilos permite modificar la apariencia del título sin cambiar su contenido HTML.',
    'Introducción a CSS desde cero',
    'CSS desde cero fundamentos selectores propiedades tutorial español'
  ),

  'Selectores, propiedades y valores': crearLeccionWeb(
    'Identificar y utilizar selectores CSS para aplicar estilos a elementos específicos.',
    [
      ['Selector de etiqueta', 'Selecciona todos los elementos de un tipo determinado. Por ejemplo, p selecciona todos los párrafos.'],
      ['Selector de clase', 'Se escribe con un punto seguido del nombre de la clase y permite aplicar estilos a varios elementos que la compartan.'],
      ['Selector de identificador', 'Se escribe con # seguido de un identificador y permite seleccionar un elemento específico.'],
      ['Propiedades CSS', 'Son características que pueden modificarse, como color, background-color, font-size, margin y padding.'],
      ['Valores CSS', 'Son los datos asignados a las propiedades, como red, 20px, center o 50%.']
    ],
    'Ejemplo: diseñar tarjetas',
    [
      'Crear varios elementos HTML con la clase tarjeta.',
      'Seleccionar la clase utilizando .tarjeta.',
      'Asignar un color de fondo.',
      'Agregar espacio interno con padding.',
      'Definir un borde y un tamaño de texto.'
    ],
    'El selector de clase permite aplicar el mismo diseño a varias tarjetas de una página.',
    'Selectores CSS clases e identificadores',
    'selectores CSS etiqueta clase id propiedades valores ejemplos'
  ),

  'Colores, tipografía y fondos': crearLeccionWeb(
    'Aplicar colores, fuentes y fondos para mejorar la presentación y legibilidad de un sitio web.',
    [
      ['Colores en CSS', 'Los colores pueden definirse mediante nombres, códigos hexadecimales, RGB y otros formatos compatibles.'],
      ['Color del texto', 'La propiedad color permite establecer el color con el que se muestran los caracteres.'],
      ['Fondos', 'La propiedad background-color permite definir un color de fondo y background-image permite utilizar una imagen.'],
      ['Tipografía', 'La propiedad font-family permite elegir la familia tipográfica utilizada para mostrar los textos.'],
      ['Tamaño y estilo del texto', 'Propiedades como font-size, font-weight y text-align permiten ajustar el tamaño, grosor y alineación.']
    ],
    'Ejemplo: diseñar una tarjeta informativa',
    [
      'Crear una tarjeta con un título y un párrafo.',
      'Asignar un color de fondo a la tarjeta.',
      'Elegir un color legible para el texto.',
      'Definir una fuente y un tamaño apropiado.',
      'Alinear el título y ajustar el espacio entre elementos.'
    ],
    'La combinación adecuada de colores y tipografía ayuda a presentar el contenido de manera clara.',
    'Colores y tipografía en CSS',
    'CSS colores tipografía fondos font family tutorial español'
  ),

  'Modelo de cajas y posicionamiento': crearLeccionWeb(
    'Comprender el modelo de cajas y controlar el espacio y la posición de los elementos HTML.',
    [
      ['Modelo de cajas', 'CSS representa cada elemento como una caja que contiene contenido, relleno, borde y margen.'],
      ['Content', 'Es el área donde se muestra el contenido del elemento, como texto o una imagen.'],
      ['Padding y border', 'Padding es el espacio interno entre el contenido y el borde. Border es el contorno de la caja.'],
      ['Margin', 'Margin es el espacio externo que separa una caja de otros elementos.'],
      ['Posicionamiento', 'La propiedad position permite controlar la ubicación de un elemento mediante valores como static, relative, absolute y fixed.']
    ],
    'Ejemplo: crear una tarjeta con espacios',
    [
      'Crear un elemento con la clase tarjeta.',
      'Definir un ancho para la tarjeta.',
      'Agregar padding para separar el texto del borde.',
      'Agregar border para mostrar el contorno.',
      'Utilizar margin para separar la tarjeta de otros elementos.'
    ],
    'El modelo de cajas permite controlar las dimensiones y los espacios de cada elemento de la página.',
    'Modelo de cajas CSS y posicionamiento',
    'CSS box model content padding border margin position tutorial'
  ),

  'Diseño adaptable y responsive': crearLeccionWeb(
    'Crear páginas que se adapten a diferentes tamaños de pantalla y dispositivos.',
    [
      ['¿Qué es el diseño responsive?', 'Es una forma de diseñar sitios web para que su contenido y distribución se adapten a pantallas de distintos tamaños.'],
      ['Diseño flexible', 'Utiliza medidas relativas y distribuciones flexibles para evitar que los elementos dependan de un único tamaño fijo.'],
      ['Media queries', 'Las media queries permiten aplicar reglas CSS cuando se cumplen determinadas condiciones, como un ancho de pantalla.'],
      ['Flexbox y Grid', 'Son herramientas CSS que permiten distribuir elementos en filas, columnas y cuadrículas de forma flexible.'],
      ['Pruebas en dispositivos', 'Es importante comprobar cómo se visualiza una página en computadoras, tabletas y teléfonos.']
    ],
    'Ejemplo: adaptar una página a teléfonos',
    [
      'Crear una página con varias tarjetas.',
      'Organizar las tarjetas en columnas mediante CSS.',
      'Definir una media query para pantallas pequeñas.',
      'Cambiar la distribución a una sola columna.',
      'Probar el resultado con diferentes tamaños de pantalla.'
    ],
    'Las media queries permiten adaptar la distribución de los elementos según el tamaño disponible.',
    'Diseño responsive con CSS',
    'diseño responsive CSS media queries flexbox grid principiantes'
  ),

  // MÓDULO 4: JAVASCRIPT E INTERACTIVIDAD

  'Fundamentos de JavaScript': crearLeccionWeb(
    'Comprender el propósito de JavaScript y su función en la creación de páginas web interactivas.',
    [
      ['¿Qué es JavaScript?', 'JavaScript es un lenguaje de programación utilizado para crear comportamientos e interacciones en sitios web.'],
      ['Interactividad', 'Permite responder a acciones del usuario, como pulsar botones, escribir en campos o seleccionar opciones.'],
      ['Dónde se utiliza', 'Puede utilizarse en navegadores y también en otros entornos, como servidores mediante tecnologías compatibles.'],
      ['Incluir JavaScript', 'Un documento HTML puede conectar un archivo JavaScript externo utilizando la etiqueta script.'],
      ['Consola del navegador', 'La consola permite observar mensajes y errores durante el desarrollo y las pruebas de un programa.']
    ],
    'Ejemplo: mostrar un mensaje',
    [
      'Crear un archivo index.html.',
      'Crear un archivo script.js.',
      'Escribir console.log("Hola, estudiante") en JavaScript.',
      'Conectar script.js con el documento HTML.',
      'Abrir la consola del navegador para observar el mensaje.'
    ],
    'JavaScript permite ejecutar instrucciones y agregar comportamientos a las páginas web.',
    'Introducción a JavaScript',
    'JavaScript desde cero para principiantes español'
  ),

  'Variables, datos y operadores': crearLeccionWeb(
    'Declarar variables, reconocer tipos de datos y utilizar operadores en JavaScript.',
    [
      ['Variables', 'Las variables permiten almacenar información que puede utilizarse y modificarse durante la ejecución del programa.'],
      ['let y const', 'let permite declarar variables cuyo valor puede cambiar. const se utiliza para declarar referencias que no serán reasignadas.'],
      ['Tipos de datos', 'JavaScript utiliza tipos de datos como number, string, boolean, undefined y otros.'],
      ['Operadores aritméticos', 'Los operadores +, -, *, / y % permiten realizar operaciones matemáticas.'],
      ['Operadores de comparación', 'Operadores como ===, !==, > y < permiten comparar valores y obtener resultados booleanos.']
    ],
    'Ejemplo: calcular el total de una compra',
    [
      'Declarar una variable precio.',
      'Declarar una variable cantidad.',
      'Multiplicar precio por cantidad.',
      'Guardar el resultado en una variable total.',
      'Mostrar el total mediante console.log.'
    ],
    'Si precio vale 5 y cantidad vale 3, el total será 15.',
    'Variables y operadores en JavaScript',
    'JavaScript variables let const tipos de datos operadores tutorial'
  ),

  'Condicionales y ciclos': crearLeccionWeb(
    'Utilizar estructuras condicionales y repetitivas para controlar el flujo de un programa.',
    [
      ['Condicional if', 'La estructura if permite ejecutar instrucciones cuando una condición se cumple.'],
      ['Alternativa else', 'La estructura else permite ejecutar instrucciones cuando la condición del if no se cumple.'],
      ['Condicional else if', 'Permite evaluar varias condiciones en orden y seleccionar el bloque que corresponda.'],
      ['Ciclo for', 'El ciclo for permite repetir instrucciones un número determinado de veces.'],
      ['Ciclo while', 'El ciclo while repite instrucciones mientras una condición sea verdadera. Es importante controlar su condición para evitar repeticiones no deseadas.']
    ],
    'Ejemplo: clasificar una calificación',
    [
      'Crear una variable llamada nota.',
      'Comprobar si la nota es mayor o igual a 7.',
      'Si se cumple, mostrar un mensaje de aprobación.',
      'En caso contrario, mostrar un mensaje de revisión.',
      'Probar el programa con diferentes valores.'
    ],
    'La estructura if y else permite elegir un resultado según el valor de la nota.',
    'Condicionales y ciclos en JavaScript',
    'JavaScript if else for while condicionales ciclos desde cero'
  ),

  'Funciones y eventos': crearLeccionWeb(
    'Crear funciones y utilizar eventos para responder a las acciones de los usuarios.',
    [
      ['¿Qué es una función?', 'Una función es un bloque de código organizado para realizar una tarea y que puede ejecutarse cuando sea necesario.'],
      ['Parámetros', 'Los parámetros permiten recibir información para que una función pueda trabajar con diferentes valores.'],
      ['Valor de retorno', 'La instrucción return permite devolver un resultado desde una función.'],
      ['Eventos', 'Un evento es una acción o suceso que puede detectar el navegador, como un clic o la escritura en un campo.'],
      ['addEventListener', 'Este método permite registrar una función que se ejecutará cuando ocurra un evento determinado.']
    ],
    'Ejemplo: botón que muestra un mensaje',
    [
      'Crear un botón en HTML.',
      'Crear una función en JavaScript.',
      'Seleccionar el botón desde JavaScript.',
      'Utilizar addEventListener para detectar el clic.',
      'Mostrar un mensaje cuando el usuario pulse el botón.'
    ],
    'La función se ejecuta como respuesta al evento de clic del botón.',
    'Funciones y eventos en JavaScript',
    'JavaScript funciones parámetros return eventos addEventListener'
  ),

  'Manipulación del DOM': crearLeccionWeb(
    'Modificar el contenido y los elementos de una página mediante el modelo de objetos del documento.',
    [
      ['¿Qué es el DOM?', 'El Document Object Model es una representación estructurada del documento HTML que permite acceder a sus elementos mediante JavaScript.'],
      ['Seleccionar elementos', 'Métodos como getElementById y querySelector permiten localizar elementos de una página.'],
      ['Modificar contenido', 'La propiedad textContent permite cambiar el texto de un elemento desde JavaScript.'],
      ['Modificar estilos y clases', 'JavaScript puede cambiar estilos y agregar o quitar clases mediante classList.'],
      ['Crear y eliminar elementos', 'Métodos como createElement, appendChild y remove permiten agregar o retirar elementos del documento.']
    ],
    'Ejemplo: cambiar un título',
    [
      'Crear un título h1 con un identificador.',
      'Seleccionar el título mediante getElementById.',
      'Crear una instrucción para modificar textContent.',
      'Ejecutar el código JavaScript.',
      'Comprobar que el título cambió en el navegador.'
    ],
    'JavaScript puede modificar el contenido de una página sin tener que volver a cargar todo el documento.',
    'Manipulación del DOM con JavaScript',
    'JavaScript DOM querySelector textContent createElement tutorial'
  ),

  // MÓDULO 5: PROYECTO INTEGRADOR WEB

  'Planificación del sitio': crearLeccionWeb(
    'Definir los objetivos, usuarios, requisitos y estructura de un proyecto web.',
    [
      ['Definición del proyecto', 'Un proyecto web comienza con una idea y una necesidad que se desea resolver mediante un sitio o aplicación.'],
      ['Requisitos funcionales', 'Describen las acciones que el sitio debe permitir, como registrarse, consultar información o enviar formularios.'],
      ['Requisitos no funcionales', 'Describen características de calidad, como facilidad de uso, rendimiento, seguridad y accesibilidad.'],
      ['Organización de páginas', 'Se debe establecer qué páginas tendrá el sitio y cómo se conectarán mediante enlaces y menús.'],
      ['Recursos y tiempos', 'La planificación identifica los materiales, herramientas y etapas necesarias para completar el proyecto.']
    ],
    'Ejemplo: planificar un portafolio estudiantil',
    [
      'Definir el objetivo del portafolio.',
      'Identificar a sus posibles visitantes.',
      'Establecer las secciones: Inicio, Sobre mí, Proyectos y Contacto.',
      'Anotar los requisitos funcionales y de presentación.',
      'Organizar las tareas para construir el sitio.'
    ],
    'Una planificación clara permite conocer qué se va a construir y cómo se organizará el trabajo.',
    'Planificación de proyectos web',
    'cómo planificar un proyecto web requisitos funcionales no funcionales'
  ),

  'Diseño de interfaces': crearLeccionWeb(
    'Diseñar interfaces claras y fáciles de utilizar mediante principios básicos de experiencia de usuario.',
    [
      ['Interfaz de usuario', 'La interfaz de usuario es el conjunto de elementos visuales e interactivos con los que una persona utiliza un sitio.'],
      ['Experiencia de usuario', 'La experiencia de usuario considera qué tan fácil, comprensible y satisfactorio resulta utilizar un producto digital.'],
      ['Jerarquía visual', 'Consiste en organizar los elementos para que la atención se dirija primero hacia la información más importante.'],
      ['Consistencia', 'Mantener colores, estilos, tamaños y formas de navegación coherentes facilita el uso del sitio.'],
      ['Prototipos', 'Un prototipo representa cómo funcionará o se verá una interfaz antes de desarrollar la versión definitiva.']
    ],
    'Ejemplo: diseñar la pantalla principal de un curso',
    [
      'Definir qué información debe aparecer primero.',
      'Crear un encabezado con el nombre del curso.',
      'Organizar los temas en tarjetas.',
      'Elegir colores y tipografías legibles.',
      'Dibujar un prototipo y revisarlo antes de programar.'
    ],
    'Una interfaz organizada ayuda a que los usuarios encuentren la información y realicen sus tareas.',
    'Diseño de interfaces y experiencia de usuario',
    'diseño UI UX principios jerarquía visual prototipos principiantes'
  ),

  'Construcción de páginas': crearLeccionWeb(
    'Construir páginas web utilizando HTML y CSS de acuerdo con los requisitos del proyecto.',
    [
      ['Preparación del entorno', 'Se debe organizar una carpeta de proyecto y utilizar un editor de código para crear y modificar los archivos.'],
      ['Estructura HTML', 'HTML permite crear las secciones, títulos, párrafos, imágenes, enlaces y otros elementos necesarios.'],
      ['Estilos CSS', 'CSS permite definir la apariencia de los componentes y mantener una presentación coherente.'],
      ['Organización de archivos', 'Separar imágenes, hojas de estilo, scripts y documentos HTML facilita el mantenimiento del proyecto.'],
      ['Reutilización de componentes', 'Los estilos y estructuras que se repiten pueden organizarse para evitar duplicar trabajo y mantener la consistencia.']
    ],
    'Ejemplo: construir una página de presentación',
    [
      'Crear una carpeta para el proyecto.',
      'Crear el archivo index.html.',
      'Agregar las secciones principales con HTML.',
      'Crear styles.css y definir el diseño.',
      'Abrir la página en el navegador y revisar el resultado.'
    ],
    'La combinación de HTML y CSS permite construir una página organizada y visualmente coherente.',
    'Construir una página web con HTML y CSS',
    'crear página web completa HTML CSS paso a paso principiantes'
  ),

  'Interactividad y adaptación': crearLeccionWeb(
    'Incorporar interacciones con JavaScript y adaptar el sitio a diferentes dispositivos.',
    [
      ['Interactividad', 'La interactividad permite que los usuarios realicen acciones y reciban respuestas del sitio web.'],
      ['Validación de formularios', 'JavaScript puede comprobar que los campos obligatorios tengan información antes de continuar con una operación.'],
      ['Eventos de usuario', 'Los eventos permiten responder a clics, cambios, escritura y otras acciones realizadas en la página.'],
      ['Adaptación responsive', 'El diseño debe organizarse para que los elementos se visualicen correctamente en pantallas grandes y pequeñas.'],
      ['Pruebas de interacción', 'Se deben probar botones, enlaces, formularios y menús para comprobar que respondan como se espera.']
    ],
    'Ejemplo: formulario con validación básica',
    [
      'Crear un formulario con un campo de nombre.',
      'Agregar un botón para enviar.',
      'Detectar el evento submit con JavaScript.',
      'Comprobar que el campo no esté vacío.',
      'Mostrar un mensaje según el resultado de la validación.'
    ],
    'La validación básica ayuda a detectar campos vacíos antes de continuar. Para procesar y guardar información se requiere una solución adicional.',
    'Interactividad y diseño responsive',
    'JavaScript validar formularios eventos CSS responsive tutorial'
  ),

  'Pruebas y publicación del proyecto': crearLeccionWeb(
    'Comprobar el funcionamiento de un sitio web y conocer los pasos básicos para publicarlo.',
    [
      ['Pruebas funcionales', 'Permiten verificar que los botones, enlaces, formularios y demás funciones se comporten correctamente.'],
      ['Pruebas visuales', 'Consisten en revisar la presentación, los espacios, las imágenes y la distribución de los elementos.'],
      ['Compatibilidad', 'Es importante comprobar el sitio en diferentes navegadores y tamaños de pantalla.'],
      ['Corrección de errores', 'Cuando una prueba encuentra un problema, se debe identificar su causa, corregirlo y volver a comprobar el funcionamiento.'],
      ['Publicación web', 'Publicar consiste en colocar los archivos del sitio en un servicio de alojamiento para que otras personas puedan visitarlo mediante Internet.']
    ],
    'Ejemplo: publicar un portafolio estudiantil',
    [
      'Revisar que todas las páginas abran correctamente.',
      'Comprobar que los enlaces y botones funcionen.',
      'Probar el sitio en una pantalla pequeña.',
      'Corregir los errores encontrados.',
      'Preparar los archivos y publicarlos en un servicio de alojamiento web.'
    ],
    'Las pruebas permiten detectar problemas antes de compartir el sitio. La publicación hace que el proyecto esté disponible para sus visitantes.',
    'Pruebas y publicación de sitios web',
    'cómo probar y publicar una página web hosting despliegue principiantes'
  )

})
export { lecciones }
