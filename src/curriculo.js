// CURRÍCULO COMPLETO DE CAMPUS ABC

export const niveles = [
  'Primero de Bachillerato',
  'Segundo de Bachillerato',
  'Tercero de Bachillerato'
]

export const especialidades = {
  'Informática': [
    'Programación y Desarrollo de Software',
    'Diseño y Desarrollo Web',
    'Bases de Datos',
    'Sistemas Operativos',
    'Redes y Conectividad',
    'Soporte Técnico y Mantenimiento',
    'Aplicaciones Ofimáticas',
    'Seguridad Informática',
    'Inteligencia Artificial Aplicada',
    'Ética, Legislación y Ciudadanía Digital'
  ],
  'Asignaturas básicas': [
    'Matemáticas',
    'Física',
    'Lengua y Literatura',
    'Inglés',
    'Emprendimiento y Gestión'
  ]
}

export const asignaturas = [
  ...especialidades.Informática,
  ...especialidades['Asignaturas básicas']
]

const crearModulos = datos =>
  datos.map(([nombre, temas]) => ({
    nombre,
    temas: temas.map(nombre => ({ nombre }))
  }))

export const curriculo = {

  'Programación y Desarrollo de Software': crearModulos([
    ['Diseño algorítmico y resolución computacional', [
      'Análisis y descomposición de problemas complejos',
      'Modelación de soluciones mediante abstracción',
      'Diseño de algoritmos y pseudocódigo estructurado',
      'Diagramas de flujo y estructuras de control',
      'Validación, eficiencia y trazabilidad algorítmica'
    ]],
    ['Fundamentos de programación estructurada', [
      'Arquitectura básica de un programa y entorno de desarrollo',
      'Variables, constantes y sistemas de tipos',
      'Operadores, expresiones y evaluación de instrucciones',
      'Estructuras condicionales simples y anidadas',
      'Estructuras repetitivas y control de iteraciones'
    ]],
    ['Estructuras de datos y manipulación de información', [
      'Tipos de datos compuestos y colecciones',
      'Arreglos unidimensionales y procesamiento de datos',
      'Matrices y operaciones bidimensionales',
      'Búsqueda, recorrido y ordenamiento básico',
      'Selección de estructuras según el problema'
    ]],
    ['Modularidad, abstracción y desarrollo', [
      'Descomposición funcional de programas',
      'Funciones, parámetros y valores de retorno',
      'Procedimientos y alcance de variables',
      'Abstracción y reutilización de componentes',
      'Depuración, pruebas y documentación técnica'
    ]],
    ['Proyecto integrador de programación', [
      'Levantamiento y análisis de requisitos',
      'Diseño de la arquitectura lógica del proyecto',
      'Implementación de módulos y estructuras de datos',
      'Pruebas, validación y corrección de errores',
      'Documentación, presentación y evaluación del proyecto'
    ]]
  ]),

  'Diseño y Desarrollo Web': crearModulos([
    ['Fundamentos del desarrollo web', [
      'Introducción a Internet y la arquitectura web',
      'Funcionamiento de navegadores y servidores',
      'Estructura de páginas web',
      'Lenguajes HTML, CSS y JavaScript',
      'Diseño y planificación de sitios web'
    ]],
    ['Estructura y contenido con HTML', [
      'Estructura de un documento HTML',
      'Etiquetas, atributos y elementos',
      'Textos, enlaces e imágenes',
      'Listas, tablas y formularios',
      'HTML semántico y accesibilidad'
    ]],
    ['Diseño y estilos con CSS', [
      'Fundamentos de CSS',
      'Selectores, propiedades y valores',
      'Colores, tipografía y fondos',
      'Modelo de cajas y posicionamiento',
      'Diseño adaptable y responsive'
    ]],
    ['Programación con JavaScript', [
      'Fundamentos de JavaScript',
      'Variables, datos y operadores',
      'Condicionales y ciclos',
      'Funciones y eventos',
      'Manipulación del DOM'
    ]],
    ['Proyecto integrador web', [
      'Planificación del sitio',
      'Diseño de interfaces',
      'Construcción de páginas',
      'Interactividad y adaptación',
      'Pruebas y publicación del proyecto'
    ]]
  ]),

  'Bases de Datos': crearModulos([
    ['Fundamentos de bases de datos', [
      'Concepto y utilidad de las bases de datos',
      'Datos, información y sistemas gestores',
      'Tipos de bases de datos',
      'Arquitectura de un sistema de bases de datos',
      'Ciclo de vida de una base de datos'
    ]],
    ['Modelado de datos', [
      'Entidades, atributos y relaciones',
      'Diagramas entidad-relación',
      'Claves primarias y foráneas',
      'Cardinalidad y restricciones',
      'Modelo conceptual y lógico'
    ]],
    ['Bases de datos relacionales y SQL', [
      'Tablas, filas y columnas',
      'Tipos de datos y creación de tablas',
      'Consultas SELECT y filtros',
      'Inserción, actualización y eliminación',
      'Uniones y consultas entre tablas'
    ]],
    ['Diseño y administración', [
      'Normalización de bases de datos',
      'Integridad y restricciones',
      'Usuarios, roles y permisos',
      'Copias de seguridad y restauración',
      'Mantenimiento y optimización'
    ]],
    ['Proyecto integrador de bases de datos', [
      'Análisis de necesidades',
      'Diseño del modelo de datos',
      'Creación de tablas y relaciones',
      'Consultas y pruebas',
      'Documentación del proyecto'
    ]]
  ]),

  'Sistemas Operativos': crearModulos([
    ['Fundamentos de sistemas operativos', [
      'Concepto y funciones',
      'Evolución y tipos',
      'Componentes y arquitectura',
      'Interfaz gráfica y línea de comandos',
      'Instalación y configuración'
    ]],
    ['Procesos y memoria', [
      'Concepto y estados de procesos',
      'Planificación de procesos',
      'Multitarea y recursos',
      'Memoria principal y virtual',
      'Monitoreo del rendimiento'
    ]],
    ['Archivos y almacenamiento', [
      'Sistemas de archivos',
      'Directorios y rutas',
      'Permisos de archivos',
      'Discos y particiones',
      'Gestión del almacenamiento'
    ]],
    ['Usuarios, seguridad y mantenimiento', [
      'Cuentas y perfiles',
      'Grupos y privilegios',
      'Actualizaciones',
      'Herramientas de diagnóstico',
      'Copias de seguridad'
    ]],
    ['Proyecto de administración de sistemas', [
      'Necesidades del equipo',
      'Selección e instalación',
      'Configuración de usuarios',
      'Verificación y solución de problemas',
      'Informe técnico'
    ]]
  ]),

  'Redes y Conectividad': crearModulos([
    ['Fundamentos de redes', [
      'Concepto y propósito de redes',
      'Tipos de redes PAN, LAN, MAN y WAN',
      'Topologías y arquitecturas',
      'Dispositivos de red',
      'Medios de transmisión'
    ]],
    ['Modelos y protocolos', [
      'Modelo OSI',
      'Modelo TCP/IP',
      'Protocolos y servicios',
      'Direcciones IPv4 e IPv6',
      'Puertos y comunicación'
    ]],
    ['Direccionamiento y configuración', [
      'Direcciones IP y máscaras',
      'Redes y subredes',
      'Adaptadores de red',
      'Asignación dinámica y estática',
      'Puerta de enlace y DNS'
    ]],
    ['Implementación y diagnóstico', [
      'Planificación de red local',
      'Conexión de dispositivos',
      'Routers y switches',
      'Pruebas de conectividad',
      'Diagnóstico de fallas'
    ]],
    ['Proyecto integrador de redes', [
      'Requisitos de conectividad',
      'Diseño del esquema',
      'Selección de dispositivos',
      'Configuración y pruebas',
      'Documentación técnica'
    ]]
  ]),

  'Soporte Técnico y Mantenimiento': crearModulos([
    ['Fundamentos del soporte técnico', [
      'Funciones del soporte',
      'Componentes del computador',
      'Herramientas y seguridad',
      'Tipos de mantenimiento',
      'Atención al usuario'
    ]],
    ['Hardware y diagnóstico', [
      'Placa madre, procesador y RAM',
      'Almacenamiento',
      'Fuente de poder y periféricos',
      'Síntomas y fallas',
      'Diagnóstico seguro'
    ]],
    ['Software y solución de problemas', [
      'Instalación y actualización',
      'Controladores y compatibilidad',
      'Errores del sistema',
      'Herramientas de diagnóstico',
      'Restauración y recuperación'
    ]],
    ['Mantenimiento preventivo y correctivo', [
      'Planificación preventiva',
      'Cuidado responsable de equipos',
      'Revisión de conexiones',
      'Registro de mantenimiento',
      'Evaluación posterior'
    ]],
    ['Proyecto de soporte técnico', [
      'Recepción del caso',
      'Análisis y diagnóstico',
      'Propuesta de solución',
      'Verificación del funcionamiento',
      'Informe técnico'
    ]]
  ]),

  'Aplicaciones Ofimáticas': crearModulos([
    ['Productividad digital', [
      'Entorno de trabajo y archivos',
      'Formatos y compatibilidad',
      'Almacenamiento local y nube',
      'Organización colaborativa',
      'Buenas prácticas'
    ]],
    ['Procesador de textos', [
      'Creación y edición',
      'Formato de texto y párrafos',
      'Estilos e índices',
      'Tablas e imágenes',
      'Diseño e impresión'
    ]],
    ['Hojas de cálculo', [
      'Libros, hojas y celdas',
      'Datos y referencias',
      'Fórmulas y funciones',
      'Filtros y gráficos',
      'Análisis de datos'
    ]],
    ['Presentaciones y comunicación', [
      'Diseño de diapositivas',
      'Texto e imágenes',
      'Transiciones y animaciones',
      'Exposición oral',
      'Exportación y publicación'
    ]],
    ['Proyecto ofimático integrado', [
      'Propósito del proyecto',
      'Elaboración de informe',
      'Hoja de cálculo',
      'Presentación digital',
      'Revisión y entrega'
    ]]
  ]),

  'Seguridad Informática': crearModulos([
    ['Principios de seguridad digital', [
      'Importancia de la seguridad',
      'Confidencialidad, integridad y disponibilidad',
      'Amenazas y vulnerabilidades',
      'Seguridad física y lógica',
      'Hábitos de protección'
    ]],
    ['Identidad y protección de cuentas', [
      'Identidad y huella digital',
      'Contraseñas robustas',
      'Autenticación multifactor',
      'Privacidad de cuentas',
      'Datos personales'
    ]],
    ['Amenazas y prevención', [
      'Malware y categorías',
      'Phishing e ingeniería social',
      'Navegación segura',
      'Actualizaciones y protección',
      'Reporte de incidentes'
    ]],
    ['Seguridad de redes y datos', [
      'Riesgos de redes públicas',
      'Principios de cifrado',
      'Copias de seguridad',
      'Permisos y acceso',
      'Herramientas de protección'
    ]],
    ['Proyecto de cultura de ciberseguridad', [
      'Identificación de riesgos',
      'Recomendaciones preventivas',
      'Guía de seguridad',
      'Reconocimiento educativo de riesgos',
      'Campaña de prevención'
    ]]
  ]),

  'Inteligencia Artificial Aplicada': crearModulos([
    ['Introducción a la inteligencia artificial', [
      'Concepto e historia de IA',
      'Aplicaciones cotidianas',
      'Datos, algoritmos y modelos',
      'Aprendizaje automático',
      'Limitaciones de la IA'
    ]],
    ['Datos y aprendizaje automático', [
      'Tipos y calidad de datos',
      'Recolección responsable',
      'Datos de entrenamiento y prueba',
      'Clasificación y predicción',
      'Sesgos y evaluación'
    ]],
    ['Herramientas de IA generativa', [
      'IA generativa',
      'Modelos de texto, imagen y audio',
      'Diseño de instrucciones o prompts',
      'Verificación de información',
      'Uso académico responsable'
    ]],
    ['Aplicaciones y proyectos', [
      'IA en educación',
      'IA en ciencia e industria',
      'Automatización sencilla',
      'Soluciones centradas en personas',
      'Evaluación de resultados'
    ]],
    ['Proyecto integrador de IA', [
      'Identificación del problema',
      'Objetivos y datos',
      'Selección responsable de herramienta',
      'Prueba y evaluación',
      'Presentación y reflexión ética'
    ]]
  ]),

  'Ética, Legislación y Ciudadanía Digital': crearModulos([
    ['Ciudadanía y convivencia digital', [
      'Ciudadanía digital',
      'Derechos y responsabilidades',
      'Respeto en línea',
      'Prevención del ciberacoso',
      'Participación positiva'
    ]],
    ['Privacidad y protección de datos', [
      'Datos personales y sensibles',
      'Huella y reputación digital',
      'Consentimiento',
      'Configuración de privacidad',
      'Protección de identidad'
    ]],
    ['Ética y propiedad intelectual', [
      'Ética digital',
      'Derechos de autor y licencias',
      'Plagio y citación',
      'Uso ético de contenidos',
      'Responsabilidad al compartir'
    ]],
    ['Normativa y seguridad en línea', [
      'Normas de uso tecnológico',
      'Protección de menores en línea',
      'Delitos informáticos y prevención',
      'Compras y trámites seguros',
      'Canales de orientación'
    ]],
    ['Proyecto de ciudadanía digital', [
      'Análisis de situación',
      'Derechos y responsabilidades',
      'Propuesta de convivencia',
      'Campaña informativa',
      'Presentación del proyecto'
    ]]
  ]),

  'Matemáticas': crearModulos([
    ['Números y operaciones', [
      'Conjuntos numéricos',
      'Operaciones con reales',
      'Potencias y raíces',
      'Razones y porcentajes',
      'Problemas con números reales'
    ]],
    ['Álgebra y ecuaciones', [
      'Expresiones algebraicas',
      'Operaciones con polinomios',
      'Productos notables y factorización',
      'Ecuaciones e inecuaciones',
      'Sistemas lineales'
    ]],
    ['Funciones y geometría', [
      'Concepto de función',
      'Representación gráfica',
      'Funciones lineales y cuadráticas',
      'Geometría plana',
      'Perímetro, área y volumen'
    ]],
    ['Trigonometría y análisis', [
      'Ángulos y medidas',
      'Razones trigonométricas',
      'Resolución de triángulos',
      'Interpretación de gráficas',
      'Sucesiones y patrones'
    ]],
    ['Estadística y probabilidad', [
      'Población y muestra',
      'Tablas y gráficos',
      'Media, mediana y moda',
      'Experimentos y probabilidad',
      'Proyecto de análisis de datos'
    ]]
  ]),

  'Física': crearModulos([
    ['Fundamentos de física y medición', [
      'La física cotidiana',
      'Magnitudes y unidades SI',
      'Conversión de unidades',
      'Medición y errores',
      'Notación científica'
    ]],
    ['Movimiento y cinemática', [
      'Posición y desplazamiento',
      'Rapidez y velocidad',
      'Movimiento rectilíneo uniforme',
      'Movimiento acelerado',
      'Gráficas del movimiento'
    ]],
    ['Fuerzas y leyes de Newton', [
      'Fuerza y diagramas',
      'Primera ley de Newton',
      'Segunda ley de Newton',
      'Tercera ley de Newton',
      'Fricción'
    ]],
    ['Energía y fenómenos térmicos', [
      'Trabajo y potencia',
      'Energía cinética y potencial',
      'Conservación de energía',
      'Temperatura y calor',
      'Transferencia de calor'
    ]],
    ['Electricidad, ondas y experimentación', [
      'Carga eléctrica',
      'Corriente, voltaje y resistencia',
      'Circuitos sencillos',
      'Ondas, sonido y luz',
      'Experiencia física'
    ]]
  ]),

  'Lengua y Literatura': crearModulos([
    ['Comunicación y comprensión lectora', [
      'Elementos de comunicación',
      'Intención y contexto',
      'Estrategias lectoras',
      'Ideas e inferencias',
      'Análisis crítico'
    ]],
    ['Lengua y uso del idioma', [
      'Categorías gramaticales',
      'Estructura de la oración',
      'Concordancia y párrafos',
      'Ortografía y acentuación',
      'Puntuación'
    ]],
    ['Producción de textos', [
      'Planificación de ideas',
      'Texto narrativo y descriptivo',
      'Texto expositivo y argumentativo',
      'Coherencia y cohesión',
      'Revisión de escritos'
    ]],
    ['Literatura y análisis', [
      'Géneros literarios',
      'Cuento y novela',
      'Poesía y recursos',
      'Teatro',
      'Literatura ecuatoriana y latinoamericana'
    ]],
    ['Comunicación oral y proyecto', [
      'Escucha activa',
      'Exposición oral',
      'Debate y argumentación',
      'Investigación y fuentes',
      'Proyecto comunicativo'
    ]]
  ]),

  'Inglés': crearModulos([
    ['Basic communication', [
      'Greetings and introductions',
      'Classroom language',
      'Alphabet, numbers and time',
      'Countries and nationalities',
      'Everyday expressions'
    ]],
    ['Vocabulary and grammar foundations', [
      'Subject pronouns and verb to be',
      'Articles, nouns and plurals',
      'Possessive adjectives',
      'Present simple',
      'Questions and short answers'
    ]],
    ['Daily life and interaction', [
      'Family and descriptions',
      'Routines and frequency',
      'Food and ordering politely',
      'Places and directions',
      'Abilities and hobbies'
    ]],
    ['Reading, writing and listening', [
      'Short messages and notices',
      'Main ideas and details',
      'Writing connected paragraphs',
      'Listening for key information',
      'Pronunciation and intonation'
    ]],
    ['Communication project', [
      'Planning a presentation',
      'Describing people and places',
      'Writing an invitation or email',
      'Practicing a dialogue',
      'Presenting in English'
    ]]
  ]),

  'Emprendimiento y Gestión': crearModulos([
    ['Mentalidad emprendedora', [
      'Concepto de emprendimiento',
      'Necesidades y oportunidades',
      'Creatividad e innovación',
      'Habilidades emprendedoras',
      'Trabajo en equipo'
    ]],
    ['Modelo de negocio y propuesta de valor', [
      'Problemas del cliente',
      'Perfil del cliente',
      'Propuesta de valor',
      'Canales y relación con clientes',
      'Modelo Canvas'
    ]],
    ['Gestión administrativa', [
      'Planificación y organización',
      'Recursos humanos y materiales',
      'Procesos y operaciones',
      'Atención al cliente',
      'Ética y responsabilidad social'
    ]],
    ['Contabilidad y finanzas básicas', [
      'Ingresos, costos y gastos',
      'Presupuesto',
      'Precio y punto de equilibrio',
      'Ahorro e inversión responsable',
      'Registro de operaciones'
    ]],
    ['Proyecto emprendedor', [
      'Idea de negocio',
      'Investigación de mercado',
      'Producto o servicio',
      'Plan y presupuesto',
      'Presentación de propuesta'
    ]]
  ])
}

export const obtenerCurriculo = asignatura =>
  curriculo[asignatura] ?? []
