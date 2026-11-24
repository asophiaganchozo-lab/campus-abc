
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

export { lecciones }
