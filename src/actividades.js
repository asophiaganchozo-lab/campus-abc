
import { especialidades, curriculo } from './curriculo.js'

// =====================================
// ABC CAMPUS VIRTUAL
// SISTEMA DE ACTIVIDADES EDUCATIVAS
// =====================================

const crearActividad = (nombre, tipo, ejercicios) => ({
  nombre,
  tipo,
  ejercicios
})

// =====================================
// ESTRUCTURA DE ACTIVIDADES POR TEMA
// =====================================

const crearTema = ({
  seleccion = [],
  completar = [],
  pares = [],
  ordenar = [],
  casos = []
}) => [
  crearActividad(
    'Actividad 1: Selección múltiple',
    'seleccion',
    seleccion
  ),

  crearActividad(
    'Actividad 2: Completar espacios',
    'completar',
    completar
  ),

  crearActividad(
    'Actividad 3: Relacionar conceptos',
    'pares',
    pares
  ),

  crearActividad(
    'Actividad 4: Ordenar procesos',
    'ordenar',
    ordenar
  ),

  crearActividad(
    'Actividad 5: Casos prácticos',
    'casos',
    casos
  )
]

// =====================================
// ACTIVIDADES ESPECÍFICAS
// =====================================

export const actividades = {
  'Análisis y descomposición de problemas complejos': crearTema({
    seleccion: [
      {
        pregunta: '¿Qué significa descomponer un problema?',
        opciones: [
          'Dividirlo en partes más pequeñas',
          'Eliminar todos sus datos',
          'Convertirlo en una imagen',
          'Ignorar sus dificultades'
        ],
        respuesta: 0
      },
      {
        pregunta: '¿Cuál es una ventaja de dividir un problema?',
        opciones: [
          'Aumentar su complejidad',
          'Facilitar su análisis y solución',
          'Eliminar la necesidad de planificar',
          'Evitar comprobar resultados'
        ],
        respuesta: 1
      }
    ],

    completar: [
      {
        pregunta: 'La descomposición consiste en dividir un problema en partes más ______.',
        respuesta: 'pequeñas'
      },
      {
        pregunta: 'Cada parte debe poder analizarse y resolverse de manera ______.',
        respuesta: 'independiente'
      }
    ],

    pares: [
      {
        izquierda: 'Descomposición',
        derecha: 'Dividir un problema en partes'
      },
      {
        izquierda: 'Análisis',
        derecha: 'Estudiar las características del problema'
      },
      {
        izquierda: 'Solución',
        derecha: 'Resultado obtenido al resolver el problema'
      }
    ],

    ordenar: [
      {
        pregunta: 'Ordena las etapas para analizar un problema.',
        elementos: [
          'Identificar el problema',
          'Dividirlo en partes',
          'Analizar cada parte',
          'Proponer soluciones',
          'Comprobar los resultados'
        ]
      }
    ],

    casos: [
      {
        pregunta: 'Una institución necesita desarrollar un sistema de matrículas. ¿Cómo puede aplicar la descomposición?',
        respuesta: 'Dividiendo el sistema en módulos como registro de estudiantes, selección de materias, pagos y generación de reportes.'
      }
    ]
  }),

  'Modelación de soluciones mediante abstracción': crearTema({
    seleccion: [
      {
        pregunta: '¿Qué es la abstracción en informática?',
        opciones: [
          'Representar los aspectos esenciales de un problema',
          'Eliminar toda la información',
          'Copiar un programa',
          'Aumentar los datos innecesarios'
        ],
        respuesta: 0
      },
      {
        pregunta: '¿Qué permite una buena abstracción?',
        opciones: [
          'Concentrarse en los detalles importantes',
          'Ignorar el objetivo',
          'Duplicar procesos',
          'Evitar el análisis'
        ],
        respuesta: 0
      }
    ],

    completar: [
      {
        pregunta: 'La abstracción permite concentrarse en las características ______ de un problema.',
        respuesta: 'esenciales'
      },
      {
        pregunta: 'Un modelo representa una versión ______ de una situación real.',
        respuesta: 'simplificada'
      }
    ],

    pares: [
      {
        izquierda: 'Abstracción',
        derecha: 'Identificar características esenciales'
      },
      {
        izquierda: 'Modelo',
        derecha: 'Representación simplificada'
      },
      {
        izquierda: 'Detalle',
        derecha: 'Información específica de un elemento'
      }
    ],

    ordenar: [
      {
        pregunta: 'Ordena el proceso de abstracción.',
        elementos: [
          'Identificar el problema',
          'Reconocer los elementos importantes',
          'Separar los detalles innecesarios',
          'Construir un modelo',
          'Evaluar el modelo'
        ]
      }
    ],

    casos: [
      {
        pregunta: 'Se necesita representar una biblioteca mediante un sistema informático. ¿Qué elementos principales se deben considerar?',
        respuesta: 'Libros, usuarios, préstamos, devoluciones y disponibilidad de ejemplares.'
      }
    ]
  })
}

// =====================================
// ACTIVIDADES ESPECÍFICAS - CONTINUACIÓN
// =====================================

Object.assign(actividades, {
  'Diseño de algoritmos y pseudocódigo estructurado': crearTema({
    seleccion: [
      {
        pregunta: '¿Qué es un algoritmo?',
        opciones: [
          'Una secuencia ordenada de pasos para resolver un problema',
          'Un dispositivo electrónico',
          'Un lenguaje de diseño gráfico',
          'Una base de datos'
        ],
        respuesta: 0
      },
      {
        pregunta: '¿Qué característica debe tener un algoritmo?',
        opciones: [
          'Ser ambiguo',
          'Tener pasos claros y ordenados',
          'No tener un objetivo',
          'Repetir instrucciones sin control'
        ],
        respuesta: 1
      }
    ],

    completar: [
      {
        pregunta: 'Un algoritmo está formado por una secuencia de ______.',
        respuesta: 'pasos'
      },
      {
        pregunta: 'El pseudocódigo representa un algoritmo mediante un lenguaje ______.',
        respuesta: 'estructurado'
      }
    ],

    pares: [
      {
        izquierda: 'Algoritmo',
        derecha: 'Conjunto ordenado de instrucciones'
      },
      {
        izquierda: 'Pseudocódigo',
        derecha: 'Representación textual de un algoritmo'
      },
      {
        izquierda: 'Instrucción',
        derecha: 'Acción que debe ejecutarse'
      }
    ],

    ordenar: [
      {
        pregunta: 'Ordena las etapas para diseñar un algoritmo.',
        elementos: [
          'Identificar el problema',
          'Definir los datos de entrada',
          'Establecer los procesos',
          'Definir los resultados',
          'Verificar el algoritmo'
        ]
      }
    ],

    casos: [
      {
        pregunta: 'Diseña los pasos de un algoritmo para calcular el promedio de tres calificaciones.',
        respuesta: 'Ingresar las tres calificaciones, sumarlas, dividir el resultado para tres y mostrar el promedio.'
      }
    ]
  }),

  'Diagramas de flujo y estructuras de control': crearTema({
    seleccion: [
      {
        pregunta: '¿Qué representa un diagrama de flujo?',
        opciones: [
          'Gráficamente los pasos de un proceso',
          'Una lista de estudiantes',
          'Una hoja de cálculo',
          'Un archivo de imágenes'
        ],
        respuesta: 0
      },
      {
        pregunta: '¿Qué símbolo representa una decisión?',
        opciones: [
          'Rectángulo',
          'Rombo',
          'Óvalo',
          'Línea'
        ],
        respuesta: 1
      }
    ],

    completar: [
      {
        pregunta: 'El símbolo de rombo representa una ______.',
        respuesta: 'decisión'
      },
      {
        pregunta: 'El rectángulo representa un ______ o proceso.',
        respuesta: 'proceso'
      }
    ],

    pares: [
      {
        izquierda: 'Óvalo',
        derecha: 'Inicio o fin'
      },
      {
        izquierda: 'Rectángulo',
        derecha: 'Proceso'
      },
      {
        izquierda: 'Rombo',
        derecha: 'Decisión'
      },
      {
        izquierda: 'Flecha',
        derecha: 'Dirección del flujo'
      }
    ],

    ordenar: [
      {
        pregunta: 'Ordena la estructura básica de un diagrama de flujo.',
        elementos: [
          'Inicio',
          'Entrada de datos',
          'Proceso',
          'Salida de resultados',
          'Fin'
        ]
      }
    ],

    casos: [
      {
        pregunta: 'Una computadora debe determinar si un estudiante aprobó una asignatura. ¿Qué estructura de control puede utilizar?',
        respuesta: 'Una estructura condicional que compare la calificación con la nota mínima y muestre si aprobó o no.'
      }
    ]
  }),

  'Validación, eficiencia y trazabilidad algorítmica': crearTema({
    seleccion: [
      {
        pregunta: '¿Qué significa validar un algoritmo?',
        opciones: [
          'Comprobar que funciona correctamente',
          'Cambiar todos sus nombres',
          'Eliminar sus instrucciones',
          'Duplicar sus resultados'
        ],
        respuesta: 0
      },
      {
        pregunta: '¿Qué busca la eficiencia algorítmica?',
        opciones: [
          'Utilizar adecuadamente los recursos',
          'Aumentar los errores',
          'Eliminar las pruebas',
          'Hacer más lento el programa'
        ],
        respuesta: 0
      }
    ],

    completar: [
      {
        pregunta: 'La validación permite detectar posibles ______.',
        respuesta: 'errores'
      },
      {
        pregunta: 'La trazabilidad permite seguir la ejecución de un ______.',
        respuesta: 'algoritmo'
      }
    ],

    pares: [
      {
        izquierda: 'Validación',
        derecha: 'Comprobar el funcionamiento'
      },
      {
        izquierda: 'Eficiencia',
        derecha: 'Uso adecuado de recursos'
      },
      {
        izquierda: 'Trazabilidad',
        derecha: 'Seguimiento de los pasos ejecutados'
      }
    ],

    ordenar: [
      {
        pregunta: 'Ordena el proceso de validación.',
        elementos: [
          'Diseñar casos de prueba',
          'Ejecutar el algoritmo',
          'Comparar los resultados',
          'Identificar errores',
          'Corregir y volver a probar'
        ]
      }
    ],

    casos: [
      {
        pregunta: 'Un algoritmo calcula incorrectamente el promedio de notas. ¿Qué debería hacer el programador?',
        respuesta: 'Revisar las instrucciones, probar diferentes datos, identificar el error y corregir el algoritmo.'
      }
    ]
  })
})

// =====================================
// GENERADOR DE ACTIVIDADES GENERALES
// PARA LAS DEMÁS MATERIAS
// =====================================

const crearActividadesBase = (tema, materia, modulo) => {
  const nombreTema = String(tema || 'Tema de estudio')

  return crearTema({
    seleccion: [
      {
        pregunta: `¿Cuál es el objetivo principal de ${nombreTema}?`,
        opciones: [
          'Comprender y aplicar sus conceptos principales',
          'Memorizar información sin comprenderla',
          'Evitar el análisis del tema',
          'Ignorar sus aplicaciones'
        ],
        respuesta: 0
      },
      {
        pregunta: `¿Por qué es importante estudiar ${nombreTema}?`,
        opciones: [
          'Porque permite desarrollar conocimientos y habilidades',
          'Porque elimina la necesidad de aprender',
          'Porque no tiene aplicaciones',
          'Porque evita resolver problemas'
        ],
        respuesta: 0
      }
    ],

    completar: [
      {
        pregunta: `El tema ${nombreTema} pertenece al área de conocimiento de ${materia}.`,
        respuesta: materia
      },
      {
        pregunta: `El módulo en el que se estudia este contenido es ${modulo}.`,
        respuesta: modulo
      }
    ],

    pares: [
      {
        izquierda: 'Concepto',
        derecha: 'Idea fundamental de un tema'
      },
      {
        izquierda: 'Aplicación',
        derecha: 'Uso práctico de los conocimientos'
      },
      {
        izquierda: 'Aprendizaje',
        derecha: 'Adquisición de nuevos conocimientos'
      }
    ],

    ordenar: [
      {
        pregunta: `Ordena las etapas para estudiar ${nombreTema}.`,
        elementos: [
          'Identificar los conceptos principales',
          'Investigar información',
          'Analizar los contenidos',
          'Aplicar los conocimientos',
          'Comprobar lo aprendido'
        ]
      }
    ],

    casos: [
      {
        pregunta: `Explica cómo aplicarías los conocimientos de ${nombreTema} en una situación práctica.`,
        respuesta: `Se deben identificar los conceptos principales de ${nombreTema}, analizar la situación y aplicar los conocimientos para proponer una solución adecuada.`
      }
    ]
  })
}

// =====================================
// COMPLETAR ACTIVIDADES DE LAS 15 MATERIAS
// =====================================

for (const listaMaterias of Object.values(especialidades)) {
  for (const materia of listaMaterias) {

    const modulos = curriculo[materia] || []

    for (const modulo of modulos) {

      for (const tema of modulo.temas || []) {

        const nombreTema =
          typeof tema === 'string'
            ? tema
            : tema.nombre

        if (nombreTema && !actividades[nombreTema]) {

          actividades[nombreTema] = crearActividadesBase(
            nombreTema,
            materia,
            modulo.nombre
          )

        }
      }
    }
  }
}

// =====================================
// FIN DEL ARCHIVO ACTIVIDADES.JS
// =====================================
