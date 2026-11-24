
export const actividades = {
  'Análisis y descomposición de problemas complejos': [
    {
      nombre: 'Actividad 1: Selección múltiple y razonamiento',
      tipo: 'seleccion',
      ejercicios: [
        {
          pregunta: '¿Cuál es el propósito principal de descomponer un problema complejo?',
          opciones: ['Eliminar todos los datos', 'Dividirlo en partes manejables', 'Evitar el análisis', 'Aumentar su complejidad'],
          respuesta: 'Dividirlo en partes manejables',
          explicacion: 'La descomposición permite resolver partes pequeñas y organizar la solución.'
        },
        {
          pregunta: 'En el desarrollo de un sistema de matrículas, ¿qué representa un subproblema?',
          opciones: ['Todo el sistema completo', 'El diseño de un módulo de registro', 'La computadora utilizada', 'El nombre del proyecto'],
          respuesta: 'El diseño de un módulo de registro',
          explicacion: 'El registro puede analizarse como una parte independiente del sistema.'
        },
        {
          pregunta: '¿Qué técnica permite identificar entradas, procesos y salidas?',
          opciones: ['Modelo IPO', 'Compresión de archivos', 'Diseño gráfico', 'Codificación hexadecimal'],
          respuesta: 'Modelo IPO',
          explicacion: 'IPO organiza la información en entradas, procesos y salidas.'
        },
        {
          pregunta: '¿Qué ocurre si se comienza a programar sin comprender el problema?',
          opciones: ['Se garantiza una solución correcta', 'Pueden aparecer errores de diseño', 'El programa se optimiza automáticamente', 'Desaparecen los requisitos'],
          respuesta: 'Pueden aparecer errores de diseño',
          explicacion: 'Una comprensión insuficiente puede producir soluciones que no cumplen los requisitos.'
        },
        {
          pregunta: '¿Cuál es una característica de un problema bien definido?',
          opciones: ['No tiene objetivos', 'Sus requisitos son ambiguos', 'Tiene entradas, restricciones y resultados esperados', 'No necesita validación'],
          respuesta: 'Tiene entradas, restricciones y resultados esperados',
          explicacion: 'Definir estos elementos permite construir y comprobar una solución.'
        },
        {
          pregunta: '¿Qué representa una restricción en un problema computacional?',
          opciones: ['Una condición que limita las soluciones posibles', 'Un resultado aleatorio', 'Una instrucción decorativa', 'Un error de sintaxis'],
          respuesta: 'Una condición que limita las soluciones posibles',
          explicacion: 'Las restricciones delimitan qué soluciones son válidas.'
        },
        {
          pregunta: '¿Qué conviene identificar antes de diseñar un algoritmo?',
          opciones: ['El color de la interfaz', 'Los datos disponibles y el resultado esperado', 'La marca del teclado', 'El tamaño del monitor'],
          respuesta: 'Los datos disponibles y el resultado esperado',
          explicacion: 'Las entradas y salidas orientan el diseño de la solución.'
        },
        {
          pregunta: '¿Qué ventaja ofrece separar un sistema en módulos?',
          opciones: ['Impide probarlo', 'Facilita el análisis y mantenimiento', 'Elimina la necesidad de requisitos', 'Hace imposible reutilizar código'],
          respuesta: 'Facilita el análisis y mantenimiento',
          explicacion: 'Los módulos permiten trabajar y probar componentes de manera organizada.'
        },
        {
          pregunta: '¿Qué se debe hacer cuando dos subproblemas dependen entre sí?',
          opciones: ['Ignorar la dependencia', 'Identificar y documentar la relación', 'Eliminar ambos', 'Duplicar los datos sin control'],
          respuesta: 'Identificar y documentar la relación',
          explicacion: 'Las dependencias deben considerarse para integrar correctamente las partes.'
        },
        {
          pregunta: '¿Cómo se comprueba que la descomposición representa el problema original?',
          opciones: ['Verificando que las partes cubran los requisitos', 'Cambiando el nombre del programa', 'Evitando las pruebas', 'Eliminando las entradas'],
          respuesta: 'Verificando que las partes cubran los requisitos',
          explicacion: 'La descomposición debe conservar los objetivos y condiciones del problema.'
        }
      ]
    },
    {
      nombre: 'Actividad 2: Completar conceptos',
      tipo: 'completar',
      ejercicios: [
        { pregunta: 'La __________ consiste en dividir un problema complejo en partes más pequeñas.', respuesta: 'descomposición', explicacion: 'Es una estrategia fundamental para organizar problemas.' },
        { pregunta: 'Los datos que recibe un sistema se denominan __________.', respuesta: 'entradas', explicacion: 'Las entradas son los datos iniciales del proceso.' },
        { pregunta: 'El resultado producido por un sistema se denomina __________.', respuesta: 'salida', explicacion: 'La salida es el resultado del procesamiento.' },
        { pregunta: 'Una condición que limita las soluciones posibles se llama __________.', respuesta: 'restricción', explicacion: 'Las restricciones establecen límites.' },
        { pregunta: 'La representación de entradas, procesos y salidas se conoce como modelo __________.', respuesta: 'IPO', explicacion: 'IPO significa Input, Process, Output.' },
        { pregunta: 'Una parte independiente de un sistema puede organizarse como un __________.', respuesta: 'módulo', explicacion: 'Los módulos agrupan responsabilidades relacionadas.' },
        { pregunta: 'El documento que describe las necesidades del sistema contiene los __________.', respuesta: 'requisitos', explicacion: 'Los requisitos expresan lo que debe cumplir la solución.' },
        { pregunta: 'La relación entre tareas que dependen unas de otras se denomina __________.', respuesta: 'dependencia', explicacion: 'Una dependencia indica que una tarea necesita otra.' },
        { pregunta: 'Antes de programar se debe comprender y __________ el problema.', respuesta: 'analizar', explicacion: 'El análisis permite entender las condiciones del problema.' },
        { pregunta: 'Comprobar que una solución cumple sus condiciones es realizar una __________.', respuesta: 'validación', explicacion: 'La validación verifica el cumplimiento de requisitos.' }
      ]
    },
    {
      nombre: 'Actividad 3: Relacionar conceptos',
      tipo: 'relacionar',
      ejercicios: [
        { pregunta: 'Relaciona cada concepto con su definición.', pares: [
          { concepto: 'Entrada', respuesta: 'Dato recibido por el sistema' },
          { concepto: 'Proceso', respuesta: 'Transformación de los datos' },
          { concepto: 'Salida', respuesta: 'Resultado generado' },
          { concepto: 'Restricción', respuesta: 'Condición que limita una solución' },
          { concepto: 'Módulo', respuesta: 'Parte organizada de un sistema' },
          { concepto: 'Requisito', respuesta: 'Necesidad que debe cumplir la solución' },
          { concepto: 'Descomposición', respuesta: 'División en partes manejables' },
          { concepto: 'Dependencia', respuesta: 'Relación entre tareas vinculadas' },
          { concepto: 'Validación', respuesta: 'Comprobación del cumplimiento' },
          { concepto: 'Abstracción', respuesta: 'Selección de detalles relevantes' }
        ]}
      ]
    },
    {
      nombre: 'Actividad 4: Ordenar procedimientos',
      tipo: 'ordenar',
      ejercicios: [
        { pregunta: 'Ordena las etapas para resolver un problema computacional.', pasos: ['Identificar el problema', 'Determinar entradas y salidas', 'Establecer restricciones', 'Descomponer en subproblemas', 'Diseñar la solución', 'Probar la solución'], respuesta: ['Identificar el problema', 'Determinar entradas y salidas', 'Establecer restricciones', 'Descomponer en subproblemas', 'Diseñar la solución', 'Probar la solución'] },
        { pregunta: 'Ordena el proceso de análisis de un sistema de matrículas.', pasos: ['Definir los requisitos', 'Identificar los datos del estudiante', 'Separar registro y validación', 'Establecer las relaciones entre módulos', 'Comprobar los resultados'], respuesta: ['Definir los requisitos', 'Identificar los datos del estudiante', 'Separar registro y validación', 'Establecer las relaciones entre módulos', 'Comprobar los resultados'] },
        { pregunta: 'Ordena las etapas de aplicación del modelo IPO.', pasos: ['Identificar entradas', 'Definir el procesamiento', 'Determinar las salidas', 'Verificar los resultados'], respuesta: ['Identificar entradas', 'Definir el procesamiento', 'Determinar las salidas', 'Verificar los resultados'] },
        { pregunta: 'Ordena la planificación de una solución modular.', pasos: ['Reconocer las funciones necesarias', 'Agrupar funciones relacionadas', 'Definir responsabilidades', 'Establecer dependencias', 'Planificar las pruebas'], respuesta: ['Reconocer las funciones necesarias', 'Agrupar funciones relacionadas', 'Definir responsabilidades', 'Establecer dependencias', 'Planificar las pruebas'] },
        { pregunta: 'Ordena la revisión de requisitos.', pasos: ['Recopilar necesidades', 'Detectar ambigüedades', 'Definir condiciones verificables', 'Revisar con los interesados'], respuesta: ['Recopilar necesidades', 'Detectar ambigüedades', 'Definir condiciones verificables', 'Revisar con los interesados'] },
        { pregunta: 'Ordena el análisis de un problema de inventario.', pasos: ['Definir el objetivo del inventario', 'Identificar productos y cantidades', 'Establecer reglas de actualización', 'Diseñar los módulos', 'Verificar las operaciones'], respuesta: ['Definir el objetivo del inventario', 'Identificar productos y cantidades', 'Establecer reglas de actualización', 'Diseñar los módulos', 'Verificar las operaciones'] },
        { pregunta: 'Ordena la identificación de dependencias.', pasos: ['Listar las tareas', 'Identificar qué tarea necesita otra', 'Representar las relaciones', 'Establecer el orden de ejecución'], respuesta: ['Listar las tareas', 'Identificar qué tarea necesita otra', 'Representar las relaciones', 'Establecer el orden de ejecución'] },
        { pregunta: 'Ordena la preparación de una prueba.', pasos: ['Definir qué requisito se comprobará', 'Preparar los datos de prueba', 'Ejecutar el procedimiento', 'Comparar el resultado esperado y obtenido'], respuesta: ['Definir qué requisito se comprobará', 'Preparar los datos de prueba', 'Ejecutar el procedimiento', 'Comparar el resultado esperado y obtenido'] },
        { pregunta: 'Ordena la descomposición de un sistema de biblioteca.', pasos: ['Definir las funciones del sistema', 'Separar gestión de libros y usuarios', 'Definir préstamos y devoluciones', 'Relacionar los módulos', 'Validar el funcionamiento conjunto'], respuesta: ['Definir las funciones del sistema', 'Separar gestión de libros y usuarios', 'Definir préstamos y devoluciones', 'Relacionar los módulos', 'Validar el funcionamiento conjunto'] },
        { pregunta: 'Ordena el cierre del análisis.', pasos: ['Revisar que no falten requisitos', 'Comprobar las restricciones', 'Confirmar las entradas y salidas', 'Aprobar el diseño de la solución'], respuesta: ['Revisar que no falten requisitos', 'Comprobar las restricciones', 'Confirmar las entradas y salidas', 'Aprobar el diseño de la solución'] }
      ]
    },
    {
      nombre: 'Actividad 5: Casos prácticos y análisis',
      tipo: 'casos',
      ejercicios: [
        { pregunta: 'Una institución necesita un sistema para registrar estudiantes, controlar matrículas y emitir reportes. Escribe tres subproblemas en los que dividirías el sistema.', respuesta: 'registro de estudiantes; control de matrículas; emisión de reportes', explicacion: 'Separa las responsabilidades principales del sistema.' },
        { pregunta: 'Un programa recibe las horas trabajadas y el pago por hora. ¿Qué operación debe realizar para calcular el pago bruto?', respuesta: 'multiplicar las horas trabajadas por el pago por hora', explicacion: 'El procesamiento combina ambas entradas mediante una multiplicación.' },
        { pregunta: 'Un sistema de inventario no puede aceptar cantidades negativas. Identifica la restricción.', respuesta: 'la cantidad debe ser mayor o igual a cero', explicacion: 'La condición limita los valores permitidos.' },
        { pregunta: 'Un equipo desarrolla un sistema sin definir qué debe producir. ¿Qué elemento del modelo IPO falta especificar?', respuesta: 'salida', explicacion: 'Debe determinarse qué resultados entregará el sistema.' },
        { pregunta: 'En un sistema de biblioteca, el préstamo necesita consultar primero si el libro está disponible. ¿Qué dependencia existe?', respuesta: 'el préstamo depende de la consulta de disponibilidad', explicacion: 'La disponibilidad debe comprobarse antes de confirmar el préstamo.' },
        { pregunta: 'Un sistema escolar repite la misma validación en cuatro módulos. Propón una mejora de diseño.', respuesta: 'crear un módulo reutilizable de validación', explicacion: 'La reutilización evita duplicar lógica y facilita el mantenimiento.' },
        { pregunta: 'Una aplicación recibe una fecha de nacimiento y debe calcular la edad. Menciona una entrada y una salida.', respuesta: 'entrada: fecha de nacimiento; salida: edad', explicacion: 'La respuesta identifica los datos recibidos y el resultado.' },
        { pregunta: 'Un requisito dice que el sistema debe ser rápido. ¿Por qué es ambiguo y cómo lo mejorarías?', respuesta: 'es ambiguo porque no define un tiempo medible; debe establecerse un límite de respuesta', explicacion: 'Los requisitos verificables necesitan criterios medibles.' },
        { pregunta: 'Un sistema de calificaciones debe calcular promedios y generar reportes. ¿Qué dos módulos principales propondrías?', respuesta: 'módulo de cálculo de promedios y módulo de generación de reportes', explicacion: 'Cada módulo agrupa una responsabilidad específica.' },
        { pregunta: 'Después de dividir un problema, el equipo descubre que olvidó una restricción importante. ¿Qué debe hacer?', respuesta: 'revisar el análisis y actualizar el diseño y las pruebas', explicacion: 'Las restricciones omitidas deben incorporarse antes de validar la solución.' }
      ]
    }
  ]
}
