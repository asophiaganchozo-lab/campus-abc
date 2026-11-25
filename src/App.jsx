
import React, { useState } from 'react'
import { especialidades, curriculo } from './curriculo.js'
import { actividades } from './actividades.js'
import { lecciones } from './lecciones.js'
import './styles.css'

const normalizar = valor =>
  String(valor ?? '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')

function obtenerEjercicios(actividad) {
  if (actividad.tipo === 'relacionar') {
    const pares = actividad.ejercicios?.[0]?.pares || []

    return pares.map((par, i) => ({
      ...par,
      pregunta: par.concepto,
      id: i
    }))
  }

  return actividad.ejercicios || []
}

function calificar(actividad, respuestas, intento) {
  const ejercicios = obtenerEjercicios(actividad)
  let correctas = 0

  ejercicios.forEach((ejercicio, i) => {
    const respuesta = respuestas[i]

    if (
      ['seleccion', 'completar', 'relacionar'].includes(actividad.tipo) &&
      normalizar(respuesta) === normalizar(ejercicio.respuesta)
    ) {
      correctas++
    }

    if (actividad.tipo === 'ordenar') {
      const correcta = ejercicio.respuesta || []
      const entregada = respuesta || []

      if (
        correcta.length === entregada.length &&
        correcta.every(
          (paso, j) =>
            normalizar(paso) === normalizar(entregada[j])
        )
      ) {
        correctas++
      }
    }

    if (actividad.tipo === 'casos' && respuesta === true) {
      correctas++
    }
  })

  const total = ejercicios.length
  const notaMaxima = intento === 1 ? 10 : intento === 2 ? 9 : 8
  const nota = total
    ? Number(((correctas / total) * notaMaxima).toFixed(2))
    : 0

  return { correctas, total, nota, notaMaxima }
}

const iconosMaterias = {
  'Programación y Desarrollo de Software': '💻',
  'Diseño y Desarrollo Web': '🌐',
  'Bases de Datos': '🗄️',
  'Sistemas Operativos': '⚙️',
  'Redes y Conectividad': '🔗',
  'Soporte Técnico y Mantenimiento': '🛠️',
  'Aplicaciones Ofimáticas': '📊',
  'Seguridad Informática': '🔐',
  'Inteligencia Artificial Aplicada': '🤖',
  'Ética, Legislación y Ciudadanía Digital': '⚖️',
  'Matemáticas': '📐',
  'Física': '🔬',
  'Lengua y Literatura': '📖',
  'Inglés': '🌎',
  'Emprendimiento y Gestión': '📈'
}

export default function App() {
  const [pantalla, setPantalla] = useState('inicio')
  const [materia, setMateria] = useState('')
  const [modulo, setModulo] = useState(null)
  const [tema, setTema] = useState('')
  const [actividadActual, setActividadActual] = useState(null)
  const [respuestas, setRespuestas] = useState({})
  const [intentos, setIntentos] = useState({})
  const [resultado, setResultado] = useState(null)

  const contenido = curriculo?.[materia]

  const modulos = Array.isArray(contenido)
    ? contenido
    : contenido?.modulos || []

  const leccion = lecciones?.[tema]
  const actividadesTema = actividades?.[tema] || []

  const claveActividad = actividadActual
    ? `${materia}-${tema}-${actividadActual.nombre}`
    : ''

  const intentosUsados = intentos[claveActividad] || 0

  const temasDelModulo = (modulo?.temas || [])
    .map(item => typeof item === 'string' ? item : item.nombre)
    .filter(Boolean)

  const volver = () => {
    const rutas = {
      modulos: 'inicio',
      temas: 'modulos',
      clase: 'temas',
      actividades: 'clase',
      ejercicio: 'actividades'
    }

    setPantalla(rutas[pantalla] || 'inicio')
    setResultado(null)
    setRespuestas({})
  }

  const seleccionarMateria = nombre => {
    setMateria(nombre)
    setModulo(null)
    setTema('')
    setPantalla('modulos')
  }

  const tarjeta = (titulo, descripcion, accion, icono = '✦') => (
    <button
      className="tarjeta"
      onClick={accion}
      key={titulo}
      type="button"
    >
      <span
        style={{
          display: 'block',
          fontSize: '34px',
          marginBottom: '14px'
        }}
      >
        {icono}
      </span>

      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <span>Entrar →</span>
    </button>
  )

  const abrirActividad = actividad => {
    setActividadActual(actividad)
    setRespuestas({})
    setResultado(null)
    setPantalla('ejercicio')
  }

  const actualizarRespuesta = (indice, valor) => {
    setRespuestas(anterior => ({
      ...anterior,
      [indice]: valor
    }))
  }

  const enviarActividad = () => {
    const nuevoIntento = intentosUsados + 1

    const nota = calificar(
      actividadActual,
      respuestas,
      nuevoIntento
    )

    setIntentos(anterior => ({
      ...anterior,
      [claveActividad]: nuevoIntento
    }))

    setResultado({
      ...nota,
      intento: nuevoIntento
    })
  }

  const reiniciarActividad = () => {
    setRespuestas({})
    setResultado(null)
  }

  const mostrarCorreccion = ejercicio => {
    if (!resultado) return null

    return (
      <div style={{ marginTop: '14px' }}>
        {actividadActual.tipo === 'casos' ? (
          <p>
            <strong>Respuesta orientativa:</strong>{' '}
            {ejercicio.respuesta}
          </p>
        ) : (
          <p>
            <strong>Respuesta correcta:</strong>{' '}
            {Array.isArray(ejercicio.respuesta)
              ? ejercicio.respuesta.join(' → ')
              : ejercicio.respuesta}
          </p>
        )}

        {ejercicio.explicacion && (
          <p style={{ marginTop: '8px' }}>
            {ejercicio.explicacion}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="app">

      {/* ENCABEZADO PRINCIPAL */}

      <header className="header">
        <div style={{ fontSize: '42px', marginBottom: '8px' }}>
          🎓 💻
        </div>

        <h1>Campus ABC</h1>

        <p>
          Aprende, descubre y transforma tu futuro
        </p>
      </header>

      <main className="principal">

        {pantalla !== 'inicio' && (
          <button
            className="volver"
            onClick={volver}
            type="button"
          >
            ← Regresar
          </button>
        )}

        {/* INICIO */}

        {pantalla === 'inicio' && (
          <>
            <h2>¡Bienvenidos a Campus ABC!</h2>

            <p>
              Tu espacio de aprendizaje virtual.
              Explora nuestras asignaturas y desarrolla
              nuevos conocimientos.
            </p>

            <h2>Informática</h2>

            <p>Asignaturas de formación técnica.</p>

            <div className="especialidades">
              {(especialidades?.['Informática'] || []).map(nombre =>
                tarjeta(
                  nombre,
                  'Explora módulos, lecciones, ejemplos, videos y actividades.',
                  () => {
                    setMateria(nombre)
                    setModulo(null)
                    setTema('')
                    setPantalla('modulos')
                  },
                  iconosMaterias[nombre] || '💻'
                )
              )}
            </div>

            <h2>Materias comunes</h2>

            <p>Asignaturas de formación general.</p>

            <div className="especialidades">
              {(especialidades?.['Asignaturas básicas'] || []).map(nombre =>
                tarjeta(
                  nombre,
                  'Aprende nuevos contenidos y fortalece tus conocimientos.',
                  () => {
                    setMateria(nombre)
                    setModulo(null)
                    setTema('')
                    setPantalla('modulos')
                  },
                  iconosMaterias[nombre] || '📚'
                )
              )}
            </div>
          </>
        )}

        {/* MÓDULOS */}

        {pantalla === 'modulos' && (
          <>
            <h2>{materia}</h2>

            <p>
              Formación académica · 5 módulos de aprendizaje
            </p>

            {modulos.length > 0 ? (
              <div className="especialidades">
                {modulos.map((item, i) =>
                  tarjeta(
                    `Módulo ${i + 1}: ${item.nombre}`,
                    `${(item.temas || []).length} temas de aprendizaje`,
                    () => {
                      setModulo(item)
                      setPantalla('temas')
                    },
                    '📘'
                  )
                )}
              </div>
            ) : (
              <section className="panel">
                <h3>Contenido en preparación</h3>

                <p>
                  Esta asignatura está incorporada al campus.
                  Estamos preparando sus módulos, clases,
                  videos, actividades y evaluaciones.
                </p>
              </section>
            )}
          </>
        )}

        {/* TEMAS */}

        {pantalla === 'temas' && (
          <>
            <h2>{modulo?.nombre}</h2>

            <p>Selecciona un tema para estudiar.</p>

            <div className="especialidades">
              {temasDelModulo.map((nombre, i) =>
                tarjeta(
                  `Tema ${i + 1}: ${nombre}`,
                  'Estudia los conceptos, ejemplos, videos y actividades.',
                  () => {
                    setTema(nombre)
                    setPantalla('clase')
                  },
                  '📖'
                )
              )}
            </div>
          </>
        )}

        {/* LECCIÓN */}

        {pantalla === 'clase' && (
          <>
            <h2>{tema}</h2>

            <p>
              {materia} · {modulo?.nombre}
            </p>

            {leccion ? (
              <>
                <section className="panel">
                  <h3>🎯 Objetivo de aprendizaje</h3>
                  <p>{leccion.objetivo}</p>
                </section>

                <section className="panel">
                  <h3>📚 Conceptos y explicaciones</h3>

                  <p>
                    Lee con atención cada concepto antes
                    de realizar las actividades.
                  </p>

                  {(leccion.conceptos || []).map((concepto, i) => (
                    <article className="concepto" key={i}>
                      <h3>
                        {i + 1}. {concepto.titulo}
                      </h3>

                      <p>{concepto.texto}</p>
                    </article>
                  ))}
                </section>

                {leccion.ejemplo && (
                  <section className="panel">
                    <div className="ejemplo">
                      <h3>💡 {leccion.ejemplo.titulo}</h3>

                      <ol>
                        {(leccion.ejemplo.pasos || []).map((paso, i) => (
                          <li key={i} style={{ margin: '10px 0' }}>
                            {paso}
                          </li>
                        ))}
                      </ol>

                      <h4>Solución explicada</h4>
                      <p>{leccion.ejemplo.solucion}</p>
                    </div>
                  </section>
                )}

                {leccion.video && (
                  <section className="panel">
                    <h3>🎥 Video educativo</h3>

                    <p>{leccion.video.titulo}</p>

                    <p>
                      Refuerza lo aprendido con este recurso audiovisual.
                    </p>

                    <a
                      href={leccion.video.url}
                      target="_blank"
                      rel="noreferrer"
                      className="continuar"
                      style={{
                        display: 'inline-block',
                        textDecoration: 'none',
                        marginTop: '10px'
                      }}
                    >
                      Ver video educativo →
                    </a>
                  </section>
                )}
              </>
            ) : (
              <section className="panel">
                <h3>Lección pendiente de incorporar</h3>

                <p>
                  Estamos preparando la explicación completa,
                  los ejemplos y los recursos educativos de este tema.
                </p>
              </section>
            )}

            <button
              className="continuar"
              onClick={() => setPantalla('actividades')}
              type="button"
            >
              Ir a las actividades →
            </button>
          </>
        )}

        {/* ACTIVIDADES */}

        {pantalla === 'actividades' && (
          <>
            <h2>Actividades de aprendizaje</h2>

            <p>{tema}</p>

            {actividadesTema.length > 0 ? (
              <div className="especialidades">
                {actividadesTema.map((actividad, i) =>
                  tarjeta(
                    actividad.nombre || `Actividad ${i + 1}`,
                    `${obtenerEjercicios(actividad).length} ejercicios`,
                    () => abrirActividad(actividad),
                    '✏️'
                  )
                )}
              </div>
            ) : (
              <section className="panel">
                <h3>Actividades pendientes</h3>

                <p>
                  Estamos preparando ejercicios variados
                  y funcionales para este tema.
                </p>
              </section>
            )}
          </>
        )}

        {/* EJERCICIOS */}

        {pantalla === 'ejercicio' && actividadActual && (
          <>
            <h2>{actividadActual.nombre}</h2>

            <p>
              Intento {intentosUsados + (resultado ? 0 : 1)} de 3
            </p>

            {obtenerEjercicios(actividadActual).map((ejercicio, i) => (
              <section className="panel" key={i}>
                <h3>
                  {i + 1}. {ejercicio.pregunta || ejercicio.concepto}
                </h3>

                {/* SELECCIÓN MÚLTIPLE */}

                {actividadActual.tipo === 'seleccion' && (
                  <div>
                    {(ejercicio.opciones || []).map((opcion, j) => (
                      <label className="opcion" key={j}>
                        <input
                          type="radio"
                          name={`pregunta-${i}`}
                          value={opcion}
                          disabled={!!resultado || intentosUsados >= 3}
                          checked={respuestas[i] === opcion}
                          onChange={() =>
                            actualizarRespuesta(i, opcion)
                          }
                        />{' '}
                        {opcion}
                      </label>
                    ))}
                  </div>
                )}

                {/* COMPLETAR */}

                {actividadActual.tipo === 'completar' && (
                  <input
                    className="campo"
                    placeholder="Escribe tu respuesta..."
                    value={respuestas[i] || ''}
                    disabled={!!resultado || intentosUsados >= 3}
                    onChange={e =>
                      actualizarRespuesta(i, e.target.value)
                    }
                  />
                )}

                {/* RELACIONAR */}

                {actividadActual.tipo === 'relacionar' && (
                  <select
                    className="campo"
                    value={respuestas[i] || ''}
                    disabled={!!resultado || intentosUsados >= 3}
                    onChange={e =>
                      actualizarRespuesta(i, e.target.value)
                    }
                  >
                    <option value="">Selecciona la relación</option>

                    {obtenerEjercicios(actividadActual).map((par, j) => (
                      <option key={j} value={par.respuesta}>
                        {par.respuesta}
                      </option>
                    ))}
                  </select>
                )}

                {/* ORDENAR */}

                {actividadActual.tipo === 'ordenar' && (
                  <div>
                    <p>
                      Selecciona los pasos en el orden correcto:
                    </p>

                    {(ejercicio.pasos || []).map((paso, j) => (
                      <label
                        key={j}
                        style={{
                          display: 'block',
                          margin: '12px 0'
                        }}
                      >
                        Posición {j + 1}

                        <select
                          className="campo"
                          value={(respuestas[i] || [])[j] || ''}
                          disabled={!!resultado || intentosUsados >= 3}
                          onChange={e => {
                            const actual = [
                              ...(respuestas[i] || [])
                            ]

                            actual[j] = e.target.value
                            actualizarRespuesta(i, actual)
                          }}
                        >
                          <option value="">Selecciona un paso</option>

                          {(ejercicio.pasos || []).map((opcion, k) => (
                            <option key={k} value={opcion}>
                              {opcion}
                            </option>
                          ))}
                        </select>
                      </label>
                    ))}
                  </div>
                )}

                {/* CASOS PRÁCTICOS */}

                {actividadActual.tipo === 'casos' && (
                  <div>
                    <textarea
                      className="campo"
                      rows="4"
                      placeholder="Escribe tu análisis y solución..."
                      disabled={!!resultado || intentosUsados >= 3}
                      value={respuestas[`texto-${i}`] || ''}
                      onChange={e =>
                        actualizarRespuesta(
                          `texto-${i}`,
                          e.target.value
                        )
                      }
                    />

                    {!resultado && (
                      <label className="opcion">
                        <input
                          type="checkbox"
                          checked={respuestas[i] === true}
                          disabled={intentosUsados >= 3}
                          onChange={e =>
                            actualizarRespuesta(i, e.target.checked)
                          }
                        />{' '}
                        Considero que mi respuesta incluye
                        las ideas principales de la solución.
                      </label>
                    )}
                  </div>
                )}

                {mostrarCorreccion(ejercicio)}
              </section>
            ))}

            {/* RESULTADO */}

            {resultado && (
              <section className="panel">
                <h3>🏆 Resultado de tu actividad</h3>

                <p>
                  Respuestas correctas: {resultado.correctas} de{' '}
                  {resultado.total}
                </p>

                <p>
                  Calificación: {resultado.nota} / 10
                </p>

                <p>
                  Oportunidad utilizada: {resultado.intento} de 3
                </p>

                {actividadActual.tipo === 'casos' && (
                  <p>
                    Los casos prácticos utilizan autoevaluación.
                    Revisa las respuestas orientativas.
                  </p>
                )}
              </section>
            )}

            {!resultado && intentosUsados < 3 && (
              <button
                className="continuar"
                onClick={enviarActividad}
                type="button"
              >
                Enviar respuestas y calificar
              </button>
            )}

            {resultado && intentosUsados < 3 && (
              <button
                className="continuar"
                onClick={reiniciarActividad}
                type="button"
              >
                Realizar otro intento
              </button>
            )}

            {resultado && intentosUsados >= 3 && (
              <p>
                Has completado las tres oportunidades de esta actividad.
              </p>
            )}
          </>
        )}
      </main>

      <footer>
        <p>Campus ABC · Tu aprendizaje, nuestra misión</p>
        <p>Aprende, descubre y transforma tu futuro.</p>
      </footer>
    </div>
  )
}
