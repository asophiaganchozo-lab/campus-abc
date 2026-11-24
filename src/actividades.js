
const crearActividad = (nombre, tipo, ejercicios) => ({
  nombre,
  tipo,
  ejercicios
})

const crearTema = ({ seleccion, completar, pares, ordenar, casos }) => [
  crearActividad(
    'Actividad 1: Selección múltiple',
    'seleccion',
    seleccion.map(([pregunta, correcta, a, b, c, explicacion]) => ({
      pregunta,
      opciones: [correcta, a, b, c],
      respuesta: correcta,
      explicacion
    }))
  ),

  crearActividad(
    'Actividad 2: Completar',
    'completar',
    completar.map(([pregunta, respuesta, explicacion]) => ({
      pregunta,
      respuesta,
      explicacion
    }))
  ),

  crearActividad(
    'Actividad 3: Relacionar conceptos',
    'relacionar',
    [{
      pregunta: 'Relaciona cada concepto con su definición correcta.',
      pares: pares.map(([concepto, respuesta]) => ({
        concepto,
        respuesta
      }))
    }]
  ),

  crearActividad(
    'Actividad 4: Ordenar procesos',
    'ordenar',
    ordenar.map(([pregunta, pasos, respuesta]) => ({
      pregunta,
      pasos,
      respuesta
    }))
  ),

  crearActividad(
    'Actividad 5: Casos prácticos',
    'casos',
    casos.map(([pregunta, respuesta, explicacion]) => ({
      pregunta,
      respuesta,
      explicacion
    }))
  )
]

export const actividades = {

  // MÓDULO 1: DISEÑO ALGORÍTMICO Y RESOLUCIÓN COMPUTACIONAL

  'Análisis y descomposición de problemas complejos': crearTema({

    seleccion: [
      ['¿Qué se realiza primero al resolver un problema computacional?', 'Identificar y comprender el problema', 'Escribir código inmediatamente', 'Elegir colores para la interfaz', 'Instalar cualquier programa', 'Comprender el problema permite establecer una solución adecuada.'],
      ['¿Qué significa descomponer un problema?', 'Dividirlo en partes más pequeñas', 'Eliminar todos sus datos', 'Convertirlo directamente en código', 'Duplicar sus instrucciones', 'La descomposición facilita resolver cada parte por separado.'],
      ['¿Qué es una entrada en un problema?', 'Un dato que recibe el sistema', 'El resultado final', 'Un error del programa', 'Una instrucción de salida', 'Las entradas son los datos que utiliza el proceso.'],
      ['¿Qué representa una salida?', 'El resultado producido por el proceso', 'Una variable sin utilizar', 'El código fuente', 'Una condición falsa', 'La salida es la información que genera la solución.'],
      ['¿Para qué sirve identificar restricciones?', 'Para reconocer las condiciones y límites del problema', 'Para evitar analizar los datos', 'Para eliminar las pruebas', 'Para cambiar el objetivo', 'Las restricciones determinan qué soluciones son válidas.'],
      ['¿Qué es un requisito funcional?', 'Una función que el sistema debe realizar', 'El color del teclado', 'La marca del computador', 'El tamaño del escritorio', 'Describe un comportamiento que debe ofrecer el sistema.'],
      ['¿Qué técnica permite dividir un problema en subproblemas?', 'Descomposición', 'Compilación', 'Formateo', 'Cifrado', 'La descomposición organiza el problema en partes manejables.'],
      ['¿Qué permite un análisis correcto?', 'Comprender datos, objetivos y restricciones', 'Programar sin planificación', 'Evitar documentar', 'Ignorar al usuario', 'El análisis establece las bases de la solución.'],
      ['¿Qué es un problema computacional?', 'Una situación que puede resolverse mediante un procedimiento computable', 'Un dispositivo dañado necesariamente', 'Un archivo de imagen', 'Una conexión eléctrica', 'Puede expresarse mediante datos, procesos y resultados.'],
      ['¿Qué se debe hacer después de proponer una solución?', 'Comprobar que satisface los requisitos', 'Eliminar el planteamiento', 'Ignorar los resultados', 'Cambiar todos los datos', 'La validación comprueba que la solución responde al problema.']
    ],

    completar: [
      ['El primer paso es comprender el ______ que se desea resolver.', 'problema', 'El análisis comienza identificando el problema.'],
      ['Los datos que recibe un algoritmo se llaman ______.', 'entradas', 'Las entradas proporcionan información al algoritmo.'],
      ['Los resultados producidos se llaman ______.', 'salidas', 'Las salidas representan los resultados.'],
      ['Dividir un problema en partes pequeñas se denomina ______.', 'descomposición', 'La descomposición facilita el análisis.'],
      ['Las condiciones que limitan una solución son las ______.', 'restricciones', 'Las restricciones establecen límites.'],
      ['Las características que debe cumplir un sistema son sus ______.', 'requisitos', 'Los requisitos describen las necesidades del sistema.'],
      ['Una parte pequeña de un problema puede llamarse ______.', 'subproblema', 'Cada subproblema aborda una parte específica.'],
      ['La información que utiliza un proceso está formada por ______.', 'datos', 'Los datos permiten ejecutar el proceso.'],
      ['Comprobar que una solución cumple los requisitos es ______.', 'validar', 'La validación verifica el cumplimiento.'],
      ['El resultado esperado debe coincidir con el ______ del problema.', 'objetivo', 'El objetivo define qué se quiere conseguir.']
    ],

    pares: [
      ['Entrada', 'Dato recibido por el sistema'],
      ['Salida', 'Resultado generado'],
      ['Proceso', 'Transformación de datos'],
      ['Restricción', 'Condición o límite'],
      ['Requisito', 'Necesidad que debe cumplir el sistema'],
      ['Descomposición', 'División de un problema'],
      ['Subproblema', 'Parte de un problema mayor'],
      ['Análisis', 'Estudio de la situación'],
      ['Validación', 'Comprobación de requisitos'],
      ['Objetivo', 'Resultado que se desea alcanzar']
    ],

    ordenar: [
      ['Ordena el análisis inicial de un problema.', ['Identificar los datos disponibles', 'Comprender la situación', 'Definir el objetivo', 'Reconocer restricciones'], ['Comprender la situación', 'Definir el objetivo', 'Identificar los datos disponibles', 'Reconocer restricciones']],
      ['Ordena el proceso de solución.', ['Validar el resultado', 'Analizar el problema', 'Diseñar una solución', 'Identificar entradas y salidas'], ['Analizar el problema', 'Identificar entradas y salidas', 'Diseñar una solución', 'Validar el resultado']],
      ['Ordena la descomposición.', ['Resolver cada parte', 'Identificar el problema general', 'Unir las soluciones', 'Dividir en subproblemas'], ['Identificar el problema general', 'Dividir en subproblemas', 'Resolver cada parte', 'Unir las soluciones']],
      ['Ordena la identificación de requisitos.', ['Documentar requisitos', 'Consultar necesidades', 'Clasificar requisitos', 'Analizar respuestas'], ['Consultar necesidades', 'Analizar respuestas', 'Clasificar requisitos', 'Documentar requisitos']],
      ['Ordena la identificación de entradas y salidas.', ['Determinar resultados', 'Reconocer datos disponibles', 'Establecer transformaciones', 'Definir información necesaria'], ['Reconocer datos disponibles', 'Definir información necesaria', 'Establecer transformaciones', 'Determinar resultados']],
      ['Ordena la evaluación de una propuesta.', ['Comparar resultados', 'Definir criterios', 'Ejecutar pruebas', 'Registrar observaciones'], ['Definir criterios', 'Ejecutar pruebas', 'Registrar observaciones', 'Comparar resultados']],
      ['Ordena el diseño de subproblemas.', ['Establecer relaciones', 'Identificar tareas', 'Asignar responsabilidades', 'Definir cada tarea'], ['Identificar tareas', 'Definir cada tarea', 'Establecer relaciones', 'Asignar responsabilidades']],
      ['Ordena la documentación.', ['Revisar el documento', 'Registrar el problema', 'Describir la solución', 'Incluir requisitos'], ['Registrar el problema', 'Incluir requisitos', 'Describir la solución', 'Revisar el documento']],
      ['Ordena la toma de decisiones.', ['Seleccionar una alternativa', 'Definir criterios', 'Comparar alternativas', 'Identificar opciones'], ['Identificar opciones', 'Definir criterios', 'Comparar alternativas', 'Seleccionar una alternativa']],
      ['Ordena la revisión final.', ['Corregir deficiencias', 'Comprobar requisitos', 'Registrar resultados', 'Ejecutar la solución'], ['Ejecutar la solución', 'Comprobar requisitos', 'Registrar resultados', 'Corregir deficiencias']]
    ],

    casos: [
      ['Una biblioteca necesita registrar préstamos, devoluciones y usuarios. ¿Cómo dividirías el problema?', 'Separaría el sistema en módulos de usuarios, catálogo, préstamos y devoluciones.', 'La descomposición permite organizar las funciones de la biblioteca.'],
      ['Una aplicación recibe tres calificaciones y calcula un promedio. Identifica sus entradas y salida.', 'Las entradas son las tres calificaciones y la salida es el promedio calculado.', 'Las entradas son los datos utilizados y la salida es el resultado.'],
      ['Un sistema debe funcionar sin conexión a internet. ¿Qué representa esta condición?', 'Es una restricción del sistema que debe considerarse en el diseño.', 'Las restricciones establecen condiciones de funcionamiento.'],
      ['Una institución solicita una plataforma para registrar estudiantes. ¿Qué harías antes de programarla?', 'Identificaría las necesidades, los usuarios, los datos y las funciones requeridas.', 'Primero se analizan los requisitos.'],
      ['Un programa tiene demasiadas tareas dentro de una sola función. ¿Qué propones?', 'Dividiría las tareas en funciones o módulos más pequeños.', 'La modularidad facilita el mantenimiento.'],
      ['Una tienda necesita calcular el total de una compra. ¿Qué datos necesita?', 'Necesita los productos, sus precios y cantidades; debe producir el total.', 'Los datos de entrada permiten calcular el resultado.'],
      ['El resultado de un sistema no coincide con lo solicitado. ¿Qué debes revisar?', 'Revisaría los requisitos, el proceso y los resultados obtenidos.', 'La validación permite detectar incumplimientos.'],
      ['Un equipo no comprende una solicitud de software. ¿Qué debe hacer?', 'Consultar al usuario y aclarar el objetivo y las condiciones del proyecto.', 'Los requisitos deben comprenderse antes del desarrollo.'],
      ['Un problema contiene tareas independientes. ¿Qué estrategia aplicarías?', 'Identificaría cada tarea, definiría sus entradas y salidas y resolvería cada una.', 'Las tareas independientes pueden analizarse por separado.'],
      ['Dos soluciones cumplen el objetivo, pero una utiliza menos recursos. ¿Qué evaluarías?', 'Compararía su eficiencia, costo, tiempo y cumplimiento de requisitos.', 'La mejor alternativa debe evaluarse con criterios claros.']
    ]
  }),

  'Modelación de soluciones mediante abstracción': crearTema({

    seleccion: [
      ['¿Qué es la abstracción en informática?', 'Representar lo esencial de un problema', 'Copiar todos los datos sin analizarlos', 'Eliminar el objetivo', 'Ejecutar instrucciones al azar', 'La abstracción se concentra en los aspectos relevantes.'],
      ['¿Qué es un modelo?', 'Una representación simplificada de un sistema', 'Un error de compilación', 'Un dispositivo físico obligatorio', 'Una contraseña', 'Un modelo permite comprender y analizar un sistema.'],
      ['¿Qué se elimina durante una abstracción?', 'Los detalles que no son relevantes', 'Los objetivos principales', 'Los datos necesarios', 'Las reglas esenciales', 'Se conservan los elementos importantes para el propósito.'],
      ['¿Para qué sirve un diagrama de contexto?', 'Mostrar el sistema y su relación con el entorno', 'Escribir código máquina', 'Medir la temperatura', 'Crear contraseñas', 'El diagrama representa límites e interacciones.'],
      ['¿Qué representa una entidad en un modelo?', 'Un elemento importante del dominio', 'Una instrucción repetitiva', 'Una salida de pantalla', 'Un error lógico', 'Una entidad representa un objeto o concepto del sistema.'],
      ['¿Qué es una variable en un modelo?', 'Un elemento que puede almacenar un valor', 'Una conexión física', 'Una imagen decorativa', 'Una condición permanente', 'Las variables representan información que puede cambiar.'],
      ['¿Qué permite un modelo de datos?', 'Describir información y relaciones', 'Aumentar el brillo', 'Eliminar requisitos', 'Reemplazar las pruebas', 'Un modelo de datos organiza la información.'],
      ['¿Qué es una simplificación?', 'Reducir complejidad sin perder lo esencial', 'Eliminar toda la información', 'Duplicar procesos', 'Evitar el análisis', 'La simplificación mantiene lo necesario para comprender.'],
      ['¿Qué se debe definir antes de modelar?', 'El propósito y alcance del modelo', 'El color del escritorio', 'La marca del monitor', 'El tamaño del teclado', 'El propósito determina qué aspectos representar.'],
      ['¿Qué ventaja ofrece la abstracción?', 'Facilita comprender sistemas complejos', 'Impide documentar', 'Elimina la necesidad de requisitos', 'Garantiza que no existan errores', 'La abstracción reduce la complejidad del análisis.']
    ],

    completar: [
      ['La ______ permite representar lo esencial de un problema.', 'abstracción', 'La abstracción omite detalles secundarios.'],
      ['Un ______ es una representación simplificada.', 'modelo', 'Los modelos representan sistemas.'],
      ['El ______ define qué se incluye en un sistema.', 'alcance', 'El alcance establece los límites.'],
      ['Los detalles que no aportan al objetivo pueden ______.', 'omitirse', 'La abstracción conserva lo relevante.'],
      ['Una ______ representa un elemento del dominio.', 'entidad', 'Las entidades representan objetos o conceptos.'],
      ['Un modelo debe tener un ______ definido.', 'propósito', 'El propósito guía la representación.'],
      ['La relación entre elementos muestra cómo se ______.', 'conectan', 'Las relaciones describen asociaciones.'],
      ['Un modelo de datos organiza la ______ del sistema.', 'información', 'La información se representa de forma estructurada.'],
      ['La simplificación reduce la ______ del problema.', 'complejidad', 'Simplificar facilita la comprensión.'],
      ['El ______ de contexto muestra las interacciones con el entorno.', 'diagrama', 'El diagrama de contexto muestra el sistema y su entorno.']
    ],

    pares: [
      ['Abstracción', 'Representación de lo esencial'],
      ['Modelo', 'Representación simplificada'],
      ['Entidad', 'Elemento del dominio'],
      ['Atributo', 'Característica de una entidad'],
      ['Relación', 'Asociación entre elementos'],
      ['Alcance', 'Límites del sistema'],
      ['Contexto', 'Entorno del sistema'],
      ['Simplificación', 'Reducción de detalles secundarios'],
      ['Propósito', 'Razón para crear el modelo'],
      ['Dominio', 'Área del problema que se estudia']
    ],

    ordenar: [
      ['Ordena la creación de un modelo.', ['Representar elementos', 'Definir el propósito', 'Revisar el modelo', 'Identificar información relevante'], ['Definir el propósito', 'Identificar información relevante', 'Representar elementos', 'Revisar el modelo']],
      ['Ordena la abstracción de un sistema.', ['Eliminar detalles secundarios', 'Identificar elementos esenciales', 'Definir el objetivo', 'Construir la representación'], ['Definir el objetivo', 'Identificar elementos esenciales', 'Eliminar detalles secundarios', 'Construir la representación']],
      ['Ordena la construcción de un modelo de datos.', ['Definir relaciones', 'Identificar entidades', 'Revisar atributos', 'Establecer atributos'], ['Identificar entidades', 'Establecer atributos', 'Definir relaciones', 'Revisar atributos']],
      ['Ordena el análisis del contexto.', ['Identificar actores externos', 'Definir límites', 'Representar interacciones', 'Identificar el sistema'], ['Identificar el sistema', 'Definir límites', 'Identificar actores externos', 'Representar interacciones']],
      ['Ordena la revisión de un modelo.', ['Corregir inconsistencias', 'Comparar con requisitos', 'Construir el modelo', 'Recopilar información'], ['Recopilar información', 'Construir el modelo', 'Comparar con requisitos', 'Corregir inconsistencias']],
      ['Ordena la selección de atributos.', ['Eliminar atributos innecesarios', 'Identificar características', 'Relacionar atributos con entidades', 'Definir entidades'], ['Definir entidades', 'Identificar características', 'Relacionar atributos con entidades', 'Eliminar atributos innecesarios']],
      ['Ordena la representación de una solución.', ['Documentar el modelo', 'Identificar componentes', 'Definir relaciones', 'Establecer el propósito'], ['Establecer el propósito', 'Identificar componentes', 'Definir relaciones', 'Documentar el modelo']],
      ['Ordena el análisis de un dominio.', ['Clasificar conceptos', 'Identificar conceptos principales', 'Establecer relaciones', 'Definir el área de estudio'], ['Definir el área de estudio', 'Identificar conceptos principales', 'Clasificar conceptos', 'Establecer relaciones']],
      ['Ordena la simplificación de un problema.', ['Conservar lo importante', 'Analizar los detalles', 'Determinar el objetivo', 'Omitir información irrelevante'], ['Determinar el objetivo', 'Analizar los detalles', 'Omitir información irrelevante', 'Conservar lo importante']],
      ['Ordena la validación de un modelo.', ['Ajustar el modelo', 'Comparar con el sistema real', 'Definir criterios', 'Registrar diferencias'], ['Definir criterios', 'Comparar con el sistema real', 'Registrar diferencias', 'Ajustar el modelo']]
    ],

    casos: [
      ['Una universidad desea modelar la inscripción de estudiantes. ¿Qué elementos esenciales incluirías?', 'Estudiantes, asignaturas, períodos, matrículas y relaciones entre ellos.', 'El modelo debe representar los elementos importantes del proceso.'],
      ['Un sistema de ventas incluye detalles decorativos que no afectan las operaciones. ¿Qué harías?', 'Los excluiría del modelo si no son relevantes para su propósito.', 'La abstracción evita información innecesaria.'],
      ['Debes explicar una aplicación compleja a un equipo nuevo. ¿Qué recurso usarías?', 'Un modelo simplificado que muestre sus componentes y relaciones principales.', 'Los modelos facilitan la comunicación.'],
      ['Una entidad Estudiante tiene nombre, identificación y correo. ¿Qué representan estos datos?', 'Son atributos que describen a la entidad Estudiante.', 'Los atributos representan características.'],
      ['Un modelo no muestra cómo se relacionan los usuarios con el sistema. ¿Qué falta?', 'Falta representar los actores y sus interacciones con el sistema.', 'El contexto muestra las interacciones externas.'],
      ['El equipo no sabe qué información incluir en un modelo. ¿Qué debe definir primero?', 'Debe establecer el propósito y alcance del modelo.', 'El propósito determina los detalles relevantes.'],
      ['Un modelo contiene información repetida y confusa. ¿Qué propones?', 'Revisar entidades y atributos para eliminar duplicaciones y organizar la información.', 'Un modelo claro evita redundancias.'],
      ['Una empresa quiere representar su inventario. ¿Qué entidades podrían ser necesarias?', 'Productos, categorías, proveedores y movimientos de inventario.', 'Las entidades representan conceptos del dominio.'],
      ['El modelo no coincide con las necesidades del usuario. ¿Qué se debe hacer?', 'Compararlo con los requisitos y corregir sus elementos y relaciones.', 'La validación verifica la utilidad del modelo.'],
      ['Necesitas representar un proceso sin describir cada detalle técnico. ¿Qué aplicarías?', 'Abstracción, mostrando los pasos y elementos esenciales.', 'La abstracción permite comprender el proceso a un nivel general.']
    ]
  }),

  'Diseño de algoritmos y pseudocódigo estructurado': crearTema({

    seleccion: [
      ['¿Qué es un algoritmo?', 'Una secuencia finita y ordenada de pasos', 'Un dispositivo de almacenamiento', 'Un lenguaje de marcado', 'Una imagen digital', 'Un algoritmo describe pasos para resolver un problema.'],
      ['¿Qué característica debe tener un algoritmo?', 'Ser preciso y finito', 'Ser infinito', 'No tener orden', 'Depender del azar', 'Un algoritmo debe terminar y tener instrucciones claras.'],
      ['¿Qué es el pseudocódigo?', 'Una descripción estructurada de un algoritmo', 'Un lenguaje de máquina', 'Una base de datos', 'Un sistema operativo', 'El pseudocódigo facilita planificar la solución.'],
      ['¿Qué estructura permite tomar decisiones?', 'Condicional', 'Secuencial', 'Archivo', 'Comentario', 'La estructura condicional evalúa una condición.'],
      ['¿Qué estructura repite instrucciones?', 'Repetitiva', 'Secuencial', 'Declarativa', 'Estática', 'Los ciclos ejecutan instrucciones varias veces.'],
      ['¿Qué representa una variable?', 'Un espacio lógico para almacenar un dato', 'Una constante física', 'Un archivo ejecutable', 'Una pantalla', 'Las variables guardan valores durante la ejecución.'],
      ['¿Qué operador compara dos valores?', '==', '+', '*', '/', 'El operador de igualdad compara valores.'],
      ['¿Qué significa inicializar una variable?', 'Asignarle un valor inicial', 'Eliminarla', 'Imprimirla siempre', 'Convertirla en archivo', 'La inicialización establece su valor inicial.'],
      ['¿Qué es una condición lógica?', 'Una expresión que puede ser verdadera o falsa', 'Una imagen', 'Un texto obligatorio', 'Un archivo comprimido', 'Las condiciones permiten controlar decisiones.'],
      ['¿Qué es una prueba de escritorio?', 'Simular manualmente la ejecución de un algoritmo', 'Instalar un programa', 'Cambiar el teclado', 'Diseñar una página', 'Permite verificar el comportamiento paso a paso.']
    ],

    completar: [
      ['Un algoritmo está compuesto por una secuencia de ______.', 'pasos', 'Los pasos describen el procedimiento.'],
      ['El pseudocódigo utiliza un lenguaje ______.', 'estructurado', 'Permite expresar la lógica sin depender de un lenguaje específico.'],
      ['La estructura ______ ejecuta instrucciones una después de otra.', 'secuencial', 'La secuencia mantiene el orden de ejecución.'],
      ['La estructura ______ permite tomar decisiones.', 'condicional', 'La condición selecciona una alternativa.'],
      ['Los ciclos son estructuras ______.', 'repetitivas', 'Repiten un conjunto de instrucciones.'],
      ['Una variable debe tener un ______ definido.', 'identificador', 'El identificador permite reconocer la variable.'],
      ['La asignación almacena un ______ en una variable.', 'valor', 'La asignación establece el contenido de una variable.'],
      ['La prueba de ______ simula manualmente un algoritmo.', 'escritorio', 'Permite revisar la ejecución paso a paso.'],
      ['Una condición puede ser verdadera o ______.', 'falsa', 'Una expresión lógica tiene un resultado booleano.'],
      ['Un algoritmo debe terminar después de un número ______ de pasos.', 'finito', 'La finitud es una propiedad fundamental.']
    ],

    pares: [
      ['Algoritmo', 'Secuencia ordenada de instrucciones'],
      ['Pseudocódigo', 'Representación textual de la lógica'],
      ['Variable', 'Espacio para almacenar un valor'],
      ['Constante', 'Valor que no cambia durante la ejecución'],
      ['Condición', 'Expresión lógica'],
      ['Ciclo', 'Estructura que repite instrucciones'],
      ['Asignación', 'Operación que guarda un valor'],
      ['Secuencia', 'Ejecución ordenada de pasos'],
      ['Prueba de escritorio', 'Simulación manual'],
      ['Finito', 'Que termina después de cierta cantidad de pasos']
    ],

    ordenar: [
      ['Ordena el diseño de un algoritmo.', ['Escribir los pasos', 'Analizar el problema', 'Probar el algoritmo', 'Definir entradas y salidas'], ['Analizar el problema', 'Definir entradas y salidas', 'Escribir los pasos', 'Probar el algoritmo']],
      ['Ordena una asignación.', ['Verificar el valor', 'Declarar la variable', 'Asignar el dato', 'Utilizar la variable'], ['Declarar la variable', 'Asignar el dato', 'Verificar el valor', 'Utilizar la variable']],
      ['Ordena una decisión condicional.', ['Ejecutar la alternativa correspondiente', 'Evaluar la condición', 'Definir las alternativas', 'Continuar el algoritmo'], ['Definir las alternativas', 'Evaluar la condición', 'Ejecutar la alternativa correspondiente', 'Continuar el algoritmo']],
      ['Ordena una repetición controlada.', ['Actualizar el contador', 'Inicializar el contador', 'Evaluar la condición', 'Ejecutar las instrucciones'], ['Inicializar el contador', 'Evaluar la condición', 'Ejecutar las instrucciones', 'Actualizar el contador']],
      ['Ordena la prueba de escritorio.', ['Comparar el resultado esperado', 'Registrar valores iniciales', 'Ejecutar cada instrucción', 'Anotar cambios de variables'], ['Registrar valores iniciales', 'Ejecutar cada instrucción', 'Anotar cambios de variables', 'Comparar el resultado esperado']],
      ['Ordena la construcción de pseudocódigo.', ['Definir estructuras', 'Identificar datos', 'Describir operaciones', 'Revisar la lógica'], ['Identificar datos', 'Describir operaciones', 'Definir estructuras', 'Revisar la lógica']],
      ['Ordena el cálculo de un promedio.', ['Mostrar el promedio', 'Sumar las calificaciones', 'Leer las calificaciones', 'Dividir entre la cantidad'], ['Leer las calificaciones', 'Sumar las calificaciones', 'Dividir entre la cantidad', 'Mostrar el promedio']],
      ['Ordena una búsqueda simple.', ['Informar si se encontró', 'Recorrer los elementos', 'Leer el dato buscado', 'Comparar cada elemento'], ['Leer el dato buscado', 'Recorrer los elementos', 'Comparar cada elemento', 'Informar si se encontró']],
      ['Ordena la validación de datos.', ['Aceptar o solicitar nuevamente', 'Leer el dato', 'Evaluar la regla', 'Definir la regla de validación'], ['Definir la regla de validación', 'Leer el dato', 'Evaluar la regla', 'Aceptar o solicitar nuevamente']],
      ['Ordena la documentación de un algoritmo.', ['Explicar su funcionamiento', 'Identificar su propósito', 'Describir entradas y salidas', 'Revisar la claridad'], ['Identificar su propósito', 'Describir entradas y salidas', 'Explicar su funcionamiento', 'Revisar la claridad']]
    ],

    casos: [
      ['Diseña la lógica para calcular el área de un rectángulo. ¿Qué datos necesitas?', 'Necesito la base y la altura; multiplico ambos valores y presento el área.', 'El área se calcula mediante base por altura.'],
      ['Un sistema debe indicar si una persona aprobó con una nota mínima de 7. ¿Qué estructura usarías?', 'Una estructura condicional que compare la nota con 7.', 'La decisión depende de una condición.'],
      ['Debes mostrar los números del 1 al 100. ¿Qué estructura conviene?', 'Una estructura repetitiva con un contador que avance hasta 100.', 'Un ciclo permite repetir la impresión.'],
      ['Un algoritmo nunca termina porque su condición de repetición no cambia. ¿Qué ocurre?', 'Se produce un ciclo infinito; debe actualizarse la variable de control o corregirse la condición.', 'El ciclo debe tener una condición de salida alcanzable.'],
      ['Un programa calcula el promedio de cinco notas. ¿Cómo organizarías sus pasos?', 'Leer las cinco notas, sumarlas, dividir la suma entre cinco y mostrar el promedio.', 'La secuencia define las operaciones necesarias.'],
      ['Una aplicación solicita una edad y no acepta valores negativos. ¿Qué aplicarías?', 'Una validación que compruebe que la edad sea mayor o igual a cero.', 'La validación controla los datos ingresados.'],
      ['Un algoritmo produce un resultado incorrecto. ¿Cómo puedes revisar su lógica sin ejecutarlo?', 'Realizaría una prueba de escritorio siguiendo cada instrucción y registrando las variables.', 'La simulación manual ayuda a detectar errores.'],
      ['Debes elegir entre dos tarifas según el consumo. ¿Qué estructura usarías?', 'Una estructura condicional que compare el consumo con el límite establecido.', 'Las condiciones permiten seleccionar alternativas.'],
      ['Una aplicación debe repetir una pregunta hasta recibir una respuesta válida. ¿Qué usarías?', 'Un ciclo que repita la solicitud mientras la respuesta no cumpla la validación.', 'La repetición permite solicitar nuevamente el dato.'],
      ['Dos instrucciones están en un orden incorrecto y alteran el resultado. ¿Qué propiedad del algoritmo se incumple?', 'Se incumple la secuencia lógica y ordenada de instrucciones.', 'El orden de ejecución influye en el resultado.']
    ]
  }),

  'Diagramas de flujo y estructuras de control': crearTema({

    seleccion: [
      ['¿Qué representa un diagrama de flujo?', 'Un proceso mediante símbolos conectados', 'Una lista de archivos', 'Una tabla de precios', 'Un circuito eléctrico', 'Los diagramas muestran gráficamente un procedimiento.'],
      ['¿Qué símbolo representa normalmente el inicio o fin?', 'Óvalo', 'Rombo', 'Rectángulo', 'Paralelogramo', 'El óvalo representa terminales del proceso.'],
      ['¿Qué símbolo representa una decisión?', 'Rombo', 'Óvalo', 'Rectángulo', 'Flecha', 'El rombo contiene una condición.'],
      ['¿Qué representa un rectángulo?', 'Un proceso o instrucción', 'Una decisión', 'El inicio', 'Una conexión externa', 'El rectángulo representa una operación.'],
      ['¿Qué representa un paralelogramo?', 'Entrada o salida de datos', 'Una condición', 'Un ciclo por sí solo', 'El final del programa', 'Se utiliza para operaciones de entrada y salida.'],
      ['¿Para qué sirven las flechas?', 'Indicar la dirección del flujo', 'Guardar variables', 'Crear condiciones', 'Mostrar resultados numéricos', 'Las flechas conectan los símbolos y muestran el orden.'],
      ['¿Qué es una estructura secuencial?', 'Una serie de pasos en orden', 'Una decisión doble', 'Una repetición infinita', 'Una conexión de red', 'La secuencia ejecuta instrucciones en orden.'],
      ['¿Qué es una estructura selectiva?', 'Una estructura que elige entre alternativas', 'Una operación matemática', 'Un archivo de texto', 'Una variable constante', 'La selección depende de una condición.'],
      ['¿Qué representa un ciclo?', 'La repetición de instrucciones', 'La finalización obligatoria', 'La declaración de una constante', 'La entrada de un dato', 'Un ciclo repite un bloque de instrucciones.'],
      ['¿Por qué se revisa un diagrama antes de programar?', 'Para detectar errores de lógica y flujo', 'Para cambiar el hardware', 'Para borrar los requisitos', 'Para evitar documentar', 'La revisión permite mejorar la solución antes de implementarla.']
    ],

    completar: [
      ['El símbolo de inicio y fin suele ser un ______.', 'óvalo', 'El óvalo representa los terminales.'],
      ['El ______ representa una decisión.', 'rombo', 'El rombo evalúa condiciones.'],
      ['El rectángulo representa un ______.', 'proceso', 'El rectángulo contiene operaciones.'],
      ['El paralelogramo representa entrada o ______.', 'salida', 'Se usa para leer o mostrar datos.'],
      ['Las ______ indican la dirección del flujo.', 'flechas', 'Las flechas conectan los símbolos.'],
      ['Una estructura ______ ejecuta instrucciones en orden.', 'secuencial', 'La secuencia sigue un orden.'],
      ['Una estructura selectiva permite tomar ______.', 'decisiones', 'La selección elige alternativas.'],
      ['Un ciclo permite ______ instrucciones.', 'repetir', 'La repetición ejecuta un bloque varias veces.'],
      ['El diagrama de flujo es una representación ______.', 'gráfica', 'Utiliza símbolos y conexiones.'],
      ['Revisar un diagrama ayuda a encontrar ______ de lógica.', 'errores', 'La revisión permite corregir problemas.']
    ],

    pares: [
      ['Óvalo', 'Inicio o fin'],
      ['Rombo', 'Decisión'],
      ['Rectángulo', 'Proceso'],
      ['Paralelogramo', 'Entrada o salida'],
      ['Flecha', 'Dirección del flujo'],
      ['Secuencia', 'Pasos ordenados'],
      ['Selección', 'Elección entre alternativas'],
      ['Repetición', 'Ejecución de un bloque varias veces'],
      ['Conector', 'Unión de partes del diagrama'],
      ['Flujo', 'Recorrido de la ejecución']
    ],

    ordenar: [
      ['Ordena un diagrama sencillo.', ['Conectar los símbolos', 'Identificar entradas y salidas', 'Definir el proceso', 'Establecer inicio y fin'], ['Establecer inicio y fin', 'Identificar entradas y salidas', 'Definir el proceso', 'Conectar los símbolos']],
      ['Ordena una decisión.', ['Representar las alternativas', 'Evaluar la condición', 'Continuar el flujo', 'Definir la condición'], ['Definir la condición', 'Evaluar la condición', 'Representar las alternativas', 'Continuar el flujo']],
      ['Ordena un proceso repetitivo.', ['Regresar a la condición si corresponde', 'Ejecutar las instrucciones', 'Evaluar la condición', 'Definir el ciclo'], ['Definir el ciclo', 'Evaluar la condición', 'Ejecutar las instrucciones', 'Regresar a la condición si corresponde']],
      ['Ordena la lectura de datos.', ['Procesar la información', 'Mostrar el resultado', 'Leer los datos', 'Definir las operaciones'], ['Leer los datos', 'Definir las operaciones', 'Procesar la información', 'Mostrar el resultado']],
      ['Ordena la revisión de un diagrama.', ['Corregir conexiones', 'Comprobar símbolos', 'Recorrer el flujo', 'Verificar resultados'], ['Comprobar símbolos', 'Recorrer el flujo', 'Verificar resultados', 'Corregir conexiones']],
      ['Ordena el diseño de un proceso.', ['Conectar actividades', 'Identificar actividades', 'Definir el objetivo', 'Establecer el orden'], ['Definir el objetivo', 'Identificar actividades', 'Establecer el orden', 'Conectar actividades']],
      ['Ordena una estructura de selección.', ['Ejecutar la opción elegida', 'Definir las opciones', 'Evaluar la condición', 'Continuar el proceso'], ['Definir las opciones', 'Evaluar la condición', 'Ejecutar la opción elegida', 'Continuar el proceso']],
      ['Ordena un diagrama de cálculo.', ['Mostrar el resultado', 'Leer valores', 'Realizar el cálculo', 'Iniciar el proceso'], ['Iniciar el proceso', 'Leer valores', 'Realizar el cálculo', 'Mostrar el resultado']],
      ['Ordena la documentación gráfica.', ['Explicar los símbolos', 'Guardar el diagrama', 'Crear el diagrama', 'Describir el propósito'], ['Describir el propósito', 'Crear el diagrama', 'Explicar los símbolos', 'Guardar el diagrama']],
      ['Ordena la prueba del flujo.', ['Registrar el resultado', 'Elegir datos de prueba', 'Seguir las conexiones', 'Comparar con lo esperado'], ['Elegir datos de prueba', 'Seguir las conexiones', 'Registrar el resultado', 'Comparar con lo esperado']]
    ],

    casos: [
      ['Un diagrama utiliza un rombo para mostrar un cálculo matemático. ¿Es correcto?', 'No. El rombo se utiliza para decisiones; un cálculo se representa con un rectángulo.', 'Cada símbolo tiene una función específica.'],
      ['Un proceso necesita leer un número y mostrar su doble. ¿Qué símbolos utilizarías?', 'Un óvalo para inicio y fin, paralelogramos para entrada y salida y un rectángulo para calcular el doble.', 'Los símbolos representan cada tipo de operación.'],
      ['Una condición tiene dos posibles resultados. ¿Cómo se representa?', 'Con un rombo y dos caminos, uno para cada resultado de la condición.', 'Una decisión puede dirigir el flujo por alternativas.'],
      ['Un diagrama no tiene flechas entre sus símbolos. ¿Qué problema presenta?', 'No se identifica claramente el orden ni la dirección del proceso.', 'Las flechas indican el recorrido.'],
      ['Debes representar una operación que se repite diez veces. ¿Qué estructura usarías?', 'Una estructura repetitiva con un contador y una condición de finalización.', 'Los ciclos permiten repetir instrucciones.'],
      ['Un estudiante coloca el símbolo de fin antes de mostrar el resultado. ¿Qué debe revisar?', 'Debe revisar el orden del flujo para que la salida ocurra antes del final.', 'La secuencia debe respetar la lógica del proceso.'],
      ['Una aplicación calcula descuentos según el tipo de cliente. ¿Qué estructura conviene?', 'Una estructura selectiva que evalúe el tipo de cliente y aplique el descuento correspondiente.', 'Las condiciones permiten elegir reglas diferentes.'],
      ['Un diagrama tiene caminos que nunca llegan al final. ¿Qué debes verificar?', 'Revisaría las conexiones y condiciones para asegurar que todos los caminos válidos puedan terminar.', 'El flujo debe estar correctamente conectado.'],
      ['Necesitas explicar un proceso a personas que no programan. ¿Qué ventaja tiene el diagrama?', 'Permite visualizar los pasos y decisiones de forma comprensible.', 'La representación gráfica facilita la comunicación.'],
      ['Un proceso funciona en papel, pero el diagrama tiene una flecha equivocada. ¿Qué podría ocurrir?', 'El recorrido podría ejecutar pasos en un orden incorrecto o saltarse operaciones.', 'Las conexiones afectan el comportamiento del proceso.']
    ]
  }),

  'Validación, eficiencia y trazabilidad algorítmica': crearTema({

    seleccion: [
      ['¿Qué es validar un algoritmo?', 'Comprobar que cumple los requisitos', 'Cambiar su nombre', 'Eliminar sus variables', 'Aumentar el tamaño del archivo', 'La validación comprueba el cumplimiento de lo solicitado.'],
      ['¿Qué es un caso de prueba?', 'Un conjunto de datos y resultados esperados', 'Un comentario del programa', 'Un tipo de teclado', 'Un archivo temporal', 'Los casos de prueba permiten verificar comportamientos.'],
      ['¿Qué es la eficiencia algorítmica?', 'El uso de recursos y tiempo para resolver un problema', 'El color de la interfaz', 'El número de comentarios', 'El tamaño del monitor', 'La eficiencia considera tiempo y recursos.'],
      ['¿Qué es la trazabilidad?', 'La posibilidad de relacionar requisitos, diseño y pruebas', 'La eliminación de documentos', 'La repetición de datos', 'La instalación de software', 'La trazabilidad permite seguir el origen y cumplimiento de requisitos.'],
      ['¿Qué es un error lógico?', 'Una instrucción que produce un resultado incorrecto', 'Una falla del monitor', 'Un archivo vacío necesariamente', 'Una desconexión eléctrica', 'El programa puede ejecutarse y aun así calcular mal.'],
      ['¿Qué es un dato límite?', 'Un valor situado en el borde de un rango permitido', 'Un dato siempre aleatorio', 'Una variable sin valor', 'Una contraseña', 'Los límites ayudan a detectar errores en los extremos.'],
      ['¿Qué permite comparar dos algoritmos?', 'Analizar su tiempo, memoria y resultados', 'Cambiar sus nombres', 'Contar sus colores', 'Revisar el escritorio', 'La comparación debe considerar criterios medibles.'],
      ['¿Qué es una prueba de regresión?', 'Comprobar que cambios no dañaron funciones existentes', 'Eliminar versiones anteriores', 'Crear usuarios nuevos', 'Cambiar el lenguaje', 'Las pruebas de regresión detectan efectos no deseados de cambios.'],
      ['¿Qué representa la complejidad temporal?', 'Cómo varía el tiempo de ejecución con el tamaño de entrada', 'La fecha de creación', 'La cantidad de pantallas', 'El número de usuarios registrados', 'La complejidad temporal estudia el crecimiento del tiempo.'],
      ['¿Por qué documentar las pruebas?', 'Para conservar evidencias y resultados', 'Para ocultar errores', 'Para impedir cambios', 'Para eliminar requisitos', 'La documentación facilita el seguimiento y mantenimiento.']
    ],

    completar: [
      ['La ______ comprueba que el algoritmo cumple los requisitos.', 'validación', 'La validación verifica el cumplimiento.'],
      ['Un caso de ______ contiene datos y resultados esperados.', 'prueba', 'Las pruebas verifican el comportamiento.'],
      ['La ______ considera tiempo y recursos utilizados.', 'eficiencia', 'La eficiencia mide el uso de recursos.'],
      ['La ______ relaciona requisitos, diseño y pruebas.', 'trazabilidad', 'Permite seguir cada requisito.'],
      ['Un error ______ produce resultados incorrectos en la lógica.', 'lógico', 'Los errores lógicos afectan los resultados.'],
      ['Los datos ______ permiten probar extremos de un rango.', 'límite', 'Los valores límite ayudan a descubrir defectos.'],
      ['La complejidad ______ estudia el tiempo de ejecución.', 'temporal', 'Analiza cómo crece el tiempo.'],
      ['La complejidad espacial estudia el uso de ______.', 'memoria', 'La memoria es un recurso del sistema.'],
      ['Las pruebas de ______ verifican que los cambios no afecten funciones existentes.', 'regresión', 'Las pruebas de regresión protegen funciones anteriores.'],
      ['Registrar los resultados permite conservar ______ de las pruebas.', 'evidencias', 'Las evidencias respaldan la validación.']
    ],

    pares: [
      ['Validación', 'Comprobación de requisitos'],
      ['Caso de prueba', 'Datos y resultados esperados'],
      ['Eficiencia', 'Uso adecuado de recursos'],
      ['Trazabilidad', 'Seguimiento de requisitos'],
      ['Error lógico', 'Resultado incorrecto por la lógica'],
      ['Dato límite', 'Valor extremo de un rango'],
      ['Complejidad temporal', 'Crecimiento del tiempo de ejecución'],
      ['Complejidad espacial', 'Uso de memoria'],
      ['Regresión', 'Prueba después de cambios'],
      ['Evidencia', 'Registro que respalda un resultado']
    ],

    ordenar: [
      ['Ordena la validación de un algoritmo.', ['Comparar resultados', 'Definir requisitos', 'Ejecutar pruebas', 'Registrar evidencias'], ['Definir requisitos', 'Ejecutar pruebas', 'Registrar evidencias', 'Comparar resultados']],
      ['Ordena la creación de un caso de prueba.', ['Registrar el resultado real', 'Definir datos de entrada', 'Establecer resultado esperado', 'Ejecutar el algoritmo'], ['Definir datos de entrada', 'Establecer resultado esperado', 'Ejecutar el algoritmo', 'Registrar el resultado real']],
      ['Ordena el análisis de eficiencia.', ['Comparar alternativas', 'Identificar recursos', 'Medir ejecución', 'Analizar crecimiento'], ['Identificar recursos', 'Medir ejecución', 'Analizar crecimiento', 'Comparar alternativas']],
      ['Ordena la trazabilidad.', ['Vincular pruebas', 'Identificar requisitos', 'Registrar el diseño', 'Verificar cumplimiento'], ['Identificar requisitos', 'Registrar el diseño', 'Vincular pruebas', 'Verificar cumplimiento']],
      ['Ordena una prueba de límites.', ['Comparar resultados', 'Definir el rango válido', 'Probar valores extremos', 'Registrar resultados'], ['Definir el rango válido', 'Probar valores extremos', 'Registrar resultados', 'Comparar resultados']],
      ['Ordena la corrección de un error.', ['Volver a probar', 'Identificar el error', 'Aplicar la corrección', 'Analizar la causa'], ['Identificar el error', 'Analizar la causa', 'Aplicar la corrección', 'Volver a probar']],
      ['Ordena una prueba de regresión.', ['Ejecutar pruebas anteriores', 'Realizar cambios', 'Comparar resultados', 'Seleccionar funciones afectadas'], ['Realizar cambios', 'Seleccionar funciones afectadas', 'Ejecutar pruebas anteriores', 'Comparar resultados']],
      ['Ordena el registro de evidencias.', ['Guardar resultados', 'Definir qué se comprobará', 'Ejecutar la prueba', 'Registrar datos utilizados'], ['Definir qué se comprobará', 'Registrar datos utilizados', 'Ejecutar la prueba', 'Guardar resultados']],
      ['Ordena la comparación de algoritmos.', ['Comparar mediciones', 'Seleccionar algoritmos', 'Definir criterios', 'Medir recursos'], ['Seleccionar algoritmos', 'Definir criterios', 'Medir recursos', 'Comparar mediciones']],
      ['Ordena el cierre de una validación.', ['Documentar conclusiones', 'Corregir problemas', 'Repetir pruebas necesarias', 'Revisar resultados'], ['Revisar resultados', 'Corregir problemas', 'Repetir pruebas necesarias', 'Documentar conclusiones']]
    ],

    casos: [
      ['Un algoritmo calcula mal el promedio cuando se ingresan valores decimales. ¿Qué harías?', 'Crearía pruebas con decimales, revisaría los tipos de datos y corregiría el cálculo.', 'Los casos de prueba deben cubrir diferentes tipos de entrada.'],
      ['Un sistema acepta edades negativas. ¿Qué prueba permitiría descubrirlo?', 'Probaría valores negativos, cero y valores positivos para comprobar la validación.', 'Los límites y datos inválidos ayudan a detectar errores.'],
      ['Dos algoritmos producen el mismo resultado, pero uno tarda mucho más. ¿Qué analizarías?', 'Compararía el tiempo de ejecución y los recursos utilizados con distintos tamaños de entrada.', 'La eficiencia se evalúa mediante mediciones.'],
      ['Un requisito no tiene ninguna prueba relacionada. ¿Qué problema existe?', 'Falta trazabilidad; se debe asociar el requisito con una o más pruebas.', 'Cada requisito importante debe poder verificarse.'],
      ['Después de modificar una función, otra deja de funcionar. ¿Qué prueba habría ayudado?', 'Una prueba de regresión para comprobar las funciones existentes.', 'Los cambios pueden producir efectos secundarios.'],
      ['Un algoritmo funciona con diez datos, pero falla con diez mil. ¿Qué revisarías?', 'Analizaría su complejidad temporal y espacial y probaría entradas de mayor tamaño.', 'El tamaño de entrada puede afectar el rendimiento.'],
      ['Una prueba se ejecutó, pero nadie registró el resultado. ¿Qué dificultad genera?', 'No hay evidencia suficiente para demostrar qué ocurrió ni comparar resultados.', 'La documentación permite dar seguimiento a las pruebas.'],
      ['Un sistema debe aceptar valores entre 1 y 100. ¿Qué datos probarías?', 'Probaría 1, 100, valores interiores y valores fuera del rango, como 0 y 101.', 'Los valores límite y externos comprueban la validación.'],
      ['Un equipo afirma que su algoritmo es eficiente sin realizar mediciones. ¿Es suficiente?', 'No. Debe definir criterios y medir tiempo y recursos con casos representativos.', 'La eficiencia debe sustentarse en evidencia.'],
      ['Una actualización cambia el cálculo de impuestos. ¿Qué deberías verificar?', 'Comprobaría los requisitos, ejecutaría casos de prueba y compararía los resultados esperados y reales.', 'La validación asegura que el cambio cumpla las reglas.']
    ]
  }),

  // SE CONSERVA TAMBIÉN EL TEMA DE VARIABLES QUE YA TENÍAS

  'Variables, constantes y sistemas de tipos': crearTema({

    seleccion: [
      ['¿Qué es una variable?', 'Un espacio identificado cuyo valor puede cambiar', 'Un valor que nunca cambia', 'Un símbolo de inicio', 'Una instrucción de salida', 'Las variables almacenan valores modificables.'],
      ['¿Qué es una constante?', 'Un valor que permanece fijo durante la ejecución', 'Un dato que cambia continuamente', 'Un ciclo', 'Una función', 'Una constante representa un valor fijo.'],
      ['¿Qué es un tipo de dato?', 'Una clasificación que determina qué valores pueden almacenarse', 'El nombre del programa', 'Una conexión de red', 'Una instrucción de salida', 'Los tipos determinan la naturaleza de los datos.'],
      ['¿Cuál es un tipo de dato entero?', 'int', 'string', 'boolean', 'char', 'El tipo entero representa números sin parte decimal.'],
      ['¿Cuál es un tipo de dato lógico?', 'boolean', 'float', 'string', 'int', 'Boolean representa verdadero o falso.'],
      ['¿Qué tipo suele almacenar texto?', 'string', 'int', 'boolean', 'float', 'String representa cadenas de caracteres.'],
      ['¿Qué significa inicializar una variable?', 'Asignarle un valor inicial', 'Eliminar su identificador', 'Convertirla en constante siempre', 'Cerrar el programa', 'Inicializar es establecer un valor al crearla o antes de usarla.'],
      ['¿Qué es una conversión de tipos?', 'Cambiar un dato de un tipo a otro', 'Duplicar una variable', 'Eliminar un dato', 'Crear un ciclo', 'La conversión adapta un valor a otro tipo.'],
      ['¿Qué puede ocurrir al dividir dos enteros?', 'El resultado puede depender de las reglas del lenguaje', 'Siempre se obtiene texto', 'Siempre se obtiene verdadero', 'Se elimina el programa', 'Los lenguajes pueden tratar la división entera de forma particular.'],
      ['¿Por qué usar nombres descriptivos?', 'Para mejorar la comprensión del código', 'Para aumentar el tamaño del archivo', 'Para evitar las pruebas', 'Para ocultar variables', 'Los identificadores claros facilitan el mantenimiento.']
    ],

    completar: [
      ['Una ______ puede cambiar su valor.', 'variable', 'Las variables pueden actualizarse.'],
      ['Una ______ mantiene un valor fijo.', 'constante', 'Las constantes representan valores que no deben cambiar.'],
      ['El tipo ______ representa números enteros.', 'int', 'Int representa valores enteros.'],
      ['El tipo ______ representa verdadero o falso.', 'boolean', 'Boolean almacena valores lógicos.'],
      ['El tipo ______ almacena cadenas de texto.', 'string', 'String representa texto.'],
      ['Asignar un valor inicial es ______ una variable.', 'inicializar', 'La inicialización establece un valor inicial.'],
      ['El nombre que identifica una variable se llama ______.', 'identificador', 'El identificador permite referirse a ella.'],
      ['Cambiar un valor de un tipo a otro es una ______.', 'conversión', 'La conversión adapta los tipos.'],
      ['Los tipos de datos ayudan a controlar las operaciones ______.', 'permitidas', 'Cada tipo admite operaciones específicas.'],
      ['Un nombre descriptivo mejora la ______ del código.', 'legibilidad', 'La legibilidad facilita comprender el programa.']
    ],

    pares: [
      ['int', 'Número entero'],
      ['float', 'Número decimal'],
      ['string', 'Cadena de texto'],
      ['boolean', 'Valor verdadero o falso'],
      ['char', 'Carácter individual'],
      ['Variable', 'Dato cuyo valor puede cambiar'],
      ['Constante', 'Dato de valor fijo'],
      ['Identificador', 'Nombre de una variable'],
      ['Inicialización', 'Asignación de un valor inicial'],
      ['Conversión', 'Cambio de un tipo de dato']
    ],

    ordenar: [
      ['Ordena la declaración de una variable.', ['Asignar un valor', 'Elegir un tipo', 'Definir un identificador', 'Utilizar la variable'], ['Elegir un tipo', 'Definir un identificador', 'Asignar un valor', 'Utilizar la variable']],
      ['Ordena el cálculo de una suma.', ['Mostrar el resultado', 'Declarar variables', 'Leer los números', 'Sumar los valores'], ['Declarar variables', 'Leer los números', 'Sumar los valores', 'Mostrar el resultado']],
      ['Ordena la conversión de un dato.', ['Utilizar el nuevo valor', 'Identificar el tipo requerido', 'Realizar la conversión', 'Comprobar el resultado'], ['Identificar el tipo requerido', 'Realizar la conversión', 'Comprobar el resultado', 'Utilizar el nuevo valor']],
      ['Ordena la definición de una constante.', ['Utilizar la constante', 'Asignar el valor fijo', 'Elegir un nombre', 'Definir su tipo'], ['Definir su tipo', 'Elegir un nombre', 'Asignar el valor fijo', 'Utilizar la constante']],
      ['Ordena la lectura de datos.', ['Procesar los datos', 'Declarar variables', 'Solicitar información', 'Guardar los valores'], ['Declarar variables', 'Solicitar información', 'Guardar los valores', 'Procesar los datos']],
      ['Ordena la revisión de tipos.', ['Corregir incompatibilidades', 'Identificar los tipos', 'Revisar las operaciones', 'Probar el programa'], ['Identificar los tipos', 'Revisar las operaciones', 'Corregir incompatibilidades', 'Probar el programa']],
      ['Ordena la actualización de una variable.', ['Comprobar el nuevo valor', 'Declarar la variable', 'Asignar el nuevo valor', 'Utilizarla en el proceso'], ['Declarar la variable', 'Asignar el nuevo valor', 'Comprobar el nuevo valor', 'Utilizarla en el proceso']],
      ['Ordena el cálculo de un promedio.', ['Mostrar el promedio', 'Leer las notas', 'Declarar variables', 'Calcular la suma y dividir'], ['Declarar variables', 'Leer las notas', 'Calcular la suma y dividir', 'Mostrar el promedio']],
      ['Ordena la selección de un tipo de dato.', ['Declarar el dato', 'Analizar la información', 'Elegir el tipo adecuado', 'Probar las operaciones'], ['Analizar la información', 'Elegir el tipo adecuado', 'Declarar el dato', 'Probar las operaciones']],
      ['Ordena la documentación de variables.', ['Revisar los nombres', 'Identificar variables', 'Describir su propósito', 'Registrar sus tipos'], ['Identificar variables', 'Registrar sus tipos', 'Describir su propósito', 'Revisar los nombres']]
    ],

    casos: [
      ['Un programa almacena la edad de una persona. ¿Qué tipo de dato utilizarías?', 'Un tipo entero, porque normalmente la edad se registra en años completos.', 'El tipo debe corresponder con la información almacenada.'],
      ['Una aplicación calcula precios con centavos. ¿Qué tipo de dato conviene?', 'Un tipo numérico decimal, considerando las reglas de precisión del lenguaje.', 'Los precios pueden incluir decimales.'],
      ['El valor de PI se utiliza en muchos cálculos y no debe cambiar. ¿Qué usarías?', 'Una constante para mantener fijo el valor de PI.', 'Las constantes protegen valores que no deben modificarse.'],
      ['Una variable llamada x almacena la cantidad de estudiantes. ¿Cómo mejorarías su nombre?', 'La llamaría cantidadEstudiantes para que su propósito sea claro.', 'Los nombres descriptivos mejoran la legibilidad.'],
      ['Un programa intenta sumar un número con una cadena de texto. ¿Qué revisarías?', 'Revisaría los tipos y realizaría una conversión válida si corresponde.', 'Las operaciones deben ser compatibles con los tipos.'],
      ['Una aplicación pregunta si un usuario aceptó los términos. ¿Qué tipo usarías?', 'Un tipo booleano, porque la respuesta puede ser verdadera o falsa.', 'Boolean representa dos estados lógicos.'],
      ['Un sistema almacena el nombre completo de un estudiante. ¿Qué tipo conviene?', 'Un tipo cadena de texto.', 'Los nombres se almacenan como texto.'],
      ['Una variable se utiliza antes de recibir un valor. ¿Qué riesgo existe?', 'Puede producir un resultado incorrecto o un error según el lenguaje.', 'Es importante inicializar las variables.'],
      ['Un programa debe contar intentos realizados. ¿Qué tipo utilizarías?', 'Un tipo entero, porque los intentos se cuentan en números completos.', 'Los contadores suelen usar tipos enteros.'],
      ['Una aplicación necesita guardar la primera letra de un código. ¿Qué tipo podría utilizar?', 'Un tipo carácter, si el lenguaje lo admite.', 'Char representa un carácter individual.']
    ]
  })

}
