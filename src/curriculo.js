
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
    'Ética, Legislación y Ciudadanía Digital',
    'Matemáticas',
    'Física',
    'Lengua y Literatura',
    'Inglés',
    'Emprendimiento y Gestión'
  ],
  'Ciencias Naturales': [
    'Matemáticas',
    'Física',
    'Lengua y Literatura',
    'Inglés',
    'Emprendimiento y Gestión'
  ],
  'Contabilidad': [
    'Matemáticas',
    'Física',
    'Lengua y Literatura',
    'Inglés',
    'Emprendimiento y Gestión'
  ]
}

export const curriculo = {
  'Informática': {
    'Primero de Bachillerato': {
      'Programación y Desarrollo de Software': {
        nivel: 'Alto',
        modulos: [
          {
            nombre: 'Módulo 1: Diseño algorítmico y resolución computacional',
            temas: [
              'Análisis y descomposición de problemas complejos',
              'Modelación de soluciones mediante abstracción',
              'Diseño de algoritmos y pseudocódigo estructurado',
              'Diagramas de flujo y estructuras de control',
              'Validación, eficiencia y trazabilidad algorítmica'
            ]
          },
          {
            nombre: 'Módulo 2: Fundamentos de programación estructurada',
            temas: [
              'Arquitectura básica de un programa y entorno de desarrollo',
              'Variables, constantes y sistemas de tipos',
              'Operadores, expresiones y evaluación de instrucciones',
              'Estructuras condicionales simples y anidadas',
              'Estructuras repetitivas y control de iteraciones'
            ]
          },
          {
            nombre: 'Módulo 3: Estructuras de datos y manipulación de información',
            temas: [
              'Tipos de datos compuestos y colecciones',
              'Arreglos unidimensionales y procesamiento de datos',
              'Matrices y operaciones bidimensionales',
              'Búsqueda, recorrido y ordenamiento básico',
              'Selección de estructuras según el problema'
            ]
          },
          {
            nombre: 'Módulo 4: Modularidad, abstracción y desarrollo',
            temas: [
              'Descomposición funcional de programas',
              'Funciones, parámetros y valores de retorno',
              'Procedimientos y alcance de variables',
              'Abstracción y reutilización de componentes',
              'Depuración, pruebas y documentación técnica'
            ]
          },
          {
            nombre: 'Módulo 5: Proyecto integrador de programación',
            temas: [
              'Levantamiento y análisis de requisitos',
              'Diseño de la arquitectura lógica del proyecto',
              'Implementación de módulos y estructuras de datos',
              'Pruebas, validación y corrección de errores',
              'Documentación, presentación y evaluación del proyecto'
            ]
          }
        ]
      }
    }
  }
}
