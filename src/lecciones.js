
import { curriculo, especialidades } from './curriculo.js'

const lecciones = {}

const crearLeccion = (asignatura, modulo, tema) => {
  const busqueda = `${asignatura} ${modulo} ${tema} explicación educativa`

  return {
    objetivo: `Comprender ${tema.toLowerCase()}, identificar sus características principales y aplicar sus conocimientos en situaciones prácticas relacionadas con ${asignatura}.`,

    conceptos: [
      {
        titulo: `¿Qué es ${tema}?`,
        texto: `${tema} es un contenido importante de ${asignatura}. Su estudio permite comprender los fundamentos, características y aplicaciones de este tema.`
      },
      {
        titulo: 'Características principales',
        texto: `Para estudiar ${tema}, es necesario reconocer sus elementos, propiedades y funciones. Estos aspectos permiten comprender cómo se relaciona con otros conocimientos de la materia.`
      },
      {
        titulo: 'Elementos fundamentales',
        texto: `Los elementos fundamentales de ${tema} permiten organizar la información, identificar sus componentes y comprender su funcionamiento.`
      },
      {
        titulo: 'Aplicación práctica',
        texto: `En situaciones reales, ${tema} puede aplicarse para analizar necesidades, resolver problemas y desarrollar soluciones relacionadas con ${asignatura}.`
      },
      {
        titulo: 'Importancia y buenas prácticas',
        texto: `Es importante aplicar correctamente los conocimientos de ${tema}, seguir procedimientos ordenados, verificar los resultados y documentar el trabajo realizado.`
      }
    ],

    ejemplo: {
      titulo: `Ejemplo práctico: aplicación de ${tema}`,
      pasos: [
        `Identificar el problema o necesidad relacionada con ${tema}.`,
        `Reconocer los elementos y conocimientos necesarios para resolverlo.`,
        `Organizar un procedimiento lógico para desarrollar la solución.`,
        `Aplicar los conocimientos estudiados y comprobar el resultado.`
      ],
      solucion: `La solución consiste en aplicar los conceptos de ${tema} de manera ordenada, comprobar que el resultado responda a la necesidad planteada y registrar el procedimiento utilizado.`
    },

    video: {
      titulo: `Video educativo: ${tema}`,
      url: `https://www.youtube.com/results?search_query=${encodeURIComponent(busqueda)}`
    }
  }
}

// Generar las 25 lecciones de cada materia de Informática.
especialidades.Informática.forEach(asignatura => {
  const modulos = curriculo[asignatura] || []

  modulos.forEach(modulo => {
    modulo.temas.forEach(tema => {
      lecciones[tema.nombre] = crearLeccion(
        asignatura,
        modulo.nombre,
        tema.nombre
      )
    })
  })
})

export { lecciones }
