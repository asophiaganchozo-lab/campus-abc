
import React, { useState } from 'react'
import { niveles, especialidades, curriculo } from './curriculo.js'
import { actividades } from './actividades.js'
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

function calificar(actividad, respuestas) {
  const ejercicios = obtenerEjercicios(actividad)
  let correctas = 0

  ejercicios.forEach((ejercicio, i) => {
    const respuesta = respuestas[i]

    if (actividad.tipo === 'seleccion') {
      if (
        normalizar(respuesta) ===
        normalizar(ejercicio.respuesta)
      ) correctas++
    }

    if (actividad.tipo === 'completar') {
      if (
        normalizar(respuesta) ===
        normalizar(ejercicio.respuesta)
      ) correctas++
    }

    if (actividad.tipo === 'relacionar') {
      if (
        normalizar(respuesta) ===
        normalizar(ejercicio.respuesta)
      ) correctas++
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
      ) correctas++
    }

    if (actividad.tipo === 'casos') {
      if (respuesta === true) correctas++
    }
  })

  const total = ejercicios.length
  const intento = respuestas.intento || 1
  const notaMaxima = intento === 1 ? 10 : intento === 2 ? 9 : 8
  const nota = total
    ? Number(((correctas / total) * notaMaxima).toFixed(2))
    : 0

  return { correctas, total, nota, notaMaxima }
}

export default function App() {
  const [pantalla, setPantalla] = useState('inicio')
  const [especialidad, setEspecialidad] = useState('')
  const [nivel, setNivel] = useState('')
  const [materia, setMateria] = useState('')
  const [modulo, setModulo] = useState(null)
  const [tema, setTema] = useState('')
  const [actividadActual, setActividadActual] = useState(null)
  const [respuestas, setRespuestas] = useState({})
  const [intentos, setIntentos] = useState({})
  const [resultado, setResultado] = useState(null)

  const contenido =
    curriculo?.[especialidad]?.[nivel]?.[materia]

  const modulos = contenido?.modulos || []

  const actividadesTema = actividades?.[tema] || []

  const claveActividad = actividadActual
    ? `${especialidad}-${nivel}-${materia}-${tema}-${actividadActual.nombre}`
    : ''

  const intentosUsados = intentos[claveActividad] || 0

  const volver = () => {
    const rutas = {
      asignaturas: 'inicio',
      modulos: 'asignaturas',
      temas: 'modulos',
      clase: 'temas',
      actividades: 'clase',
      ejercicio: 'actividades'
    }

    setPantalla(rutas[pantalla] || 'inicio')
    setResultado(null)
    setRespuestas({})
  }

  const tarjeta = (titulo, descripcion, accion) => (
    <button
      className="tarjeta"
      onClick={accion}
      key={titulo}
      type="button"
    >
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
    const respuestasConIntento = {
      ...respuestas,
      intento: nuevoIntento
    }

    const nota = calificar(
      actividadActual,
      respuestasConIntento
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

  const estilos = {
    panel: {
      background: 'white',
      padding: '22px',
      borderRadius: '14px',
      margin: '20px 0',
      textAlign: 'left',
      boxShadow: '0 3px 12px rgba(0,0,0,0.06)'
    },
    pregunta: {
      borderBottom: '1px solid #e1e6ef',
      padding: '18px 0'
    },
    opcion: {
      display: 'block',
      padding: '9px',
      margin: '7px 0',
      background: '#f2f5fb',
      borderRadius: '8px',
      cursor: 'pointer'
    },
    campo: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccd4e2',
      borderRadius: '8px',
      marginTop: '8px',
      fontSize: '15px'
    }
  }

  const mostrarCorreccion = (ejercicio, indice) => {
    if (!resultado) return null

    return (
      <div style={{ marginTop: '10px', fontSize: '14px' }}>
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
          <p style={{ color: '#596579', marginTop: '6px' }}>
            {ejercicio.explicacion}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🎓 Campus ABC</h1>
        <p>Tu espacio de aprendizaje virtual</p>
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

        {pantalla === 'inicio' && (
          <>
            <h2>¡Bienvenido a Campus ABC!</h2>
            <p>
              Selecciona tu especialidad y año de Bachillerato.
            </p>

            <div className="especialidades">
              {Object.keys(especialidades).map(nombre =>
                tarjeta(
                  nombre,
                  'Explora tus asignaturas y contenidos.',
                  () => setEspecialidad(nombre)
                )
              )}
            </div>

            <h2>Selecciona tu año</h2>

            <select
              value={nivel}
              onChange={e => setNivel(e.target.value)}
            >
              <option value="">Selecciona tu nivel</option>
              {niveles.map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>

            <button
              className="continuar"
              disabled={!especialidad || !nivel}
              onClick={() => setPantalla('asignaturas')}
              type="button"
            >
              Continuar →
            </button>
          </>
        )}

        {pantalla === 'asignaturas' && (
          <>
            <h2>Asignaturas</h2>
            <p>{especialidad} · {nivel}</p>

            <div className="especialidades">
              {(especialidades[especialidad] || []).map(nombre =>
                tarjeta(
                  nombre,
                  'Consulta los módulos y temas de esta asignatura.',
                  () => {
                    setMateria(nombre)
                    setModulo(null)
                    setPantalla('modulos')
                  }
                )
              )}
            </div>
          </>
        )}

        {pantalla === 'modulos' && (
          <>
            <h2>{materia}</h2>
            <p>Nivel: {contenido?.nivel || 'Contenido en preparación'}</p>

            {modulos.length > 0 ? (
              <div className="especialidades">
                {modulos.map(item =>
                  tarjeta(
                    item.nombre,
                    `${item.temas.length} temas de aprendizaje`,
                    () => {
                      setModulo(item)
                      setPantalla('temas')
                    }
                  )
                )}
              </div>
            ) : (
              <p>
                El currículo de esta asignatura todavía está en preparación.
              </p>
            )}
          </>
        )}

        {pantalla === 'temas' && (
          <>
            <h2>{modulo?.nombre}</h2>
            <p>Selecciona un tema para estudiar.</p>

            <div className="especialidades">
              {(modulo?.temas || []).map((nombre, i) =>
                tarjeta(
                  `Tema ${i + 1}: ${nombre}`,
                  'Abrir clase y actividades.',
                  () => {
                    setTema(nombre)
                    setPantalla('clase')
                  }
                )
              )}
            </div>
          </>
        )}

        {pantalla === 'clase' && (
          <>
            <h2>{tema}</h2>
            <p>{materia} · {modulo?.nombre}</p>

            <section style={estilos.panel}>
              <h3>Objetivo de aprendizaje</h3>
              <p>
                Comprender y aplicar los conceptos relacionados con
                {` ${tema.toLowerCase()}`} mediante análisis y práctica.
              </p>

              <h3 style={{ marginTop: '20px' }}>
                Desarrollo de la clase
              </h3>
              <p>
                En esta sección se incorporará la explicación completa,
                los conceptos fundamentales, ejemplos resueltos y
                aplicaciones prácticas de este tema.
              </p>

              <h3 style={{ marginTop: '20px' }}>Aplicación</h3>
              <p>
                El estudiante trabajará con situaciones y problemas
                relacionados con los contenidos estudiados.
              </p>
            </section>

            <button
              className="continuar"
              onClick={() => setPantalla('actividades')}
              type="button"
            >
              Ir a las actividades →
            </button>
          </>
        )}

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
                    () => abrirActividad(actividad)
                  )
                )}
              </div>
            ) : (
              <section style={estilos.panel}>
                <h3>Actividades en preparación</h3>
                <p>
                  Todavía no se han incorporado actividades para este tema.
                </p>
              </section>
            )}
          </>
        )}

        {pantalla === 'ejercicio' && actividadActual && (
          <>
            <h2>{actividadActual.nombre}</h2>
            <p>
              Intento {intentosUsados + (resultado ? 0 : 1)} de 3
            </p>

            {intentosUsados >= 3 && !resultado && (
              <p>Ya utilizaste las tres oportunidades de esta actividad.</p>
            )}

            {obtenerEjercicios(actividadActual).map(
              (ejercicio, i) => (
                <section
                  key={i}
                  style={estilos.panel}
                >
                  <div style={estilos.pregunta}>
                    <h3>
                      {i + 1}. {ejercicio.pregunta || ejercicio.concepto}
                    </h3>

                    {actividadActual.tipo === 'seleccion' && (
                      <div style={{ marginTop: '12px' }}>
                        {(ejercicio.opciones || []).map((opcion, j) => (
                          <label key={j} style={estilos.opcion}>
                            <input
                              type="radio"
                              name={`pregunta-${i}`}
                              value={opcion}
                              disabled={!!resultado || intentosUsados >= 3}
                              checked={respuestas[i] === opcion}
                              onChange={() => actualizarRespuesta(i, opcion)}
                            />{' '}
                            {opcion}
                          </label>
                        ))}
                      </div>
                    )}

                    {actividadActual.tipo === 'completar' && (
                      <input
                        style={estilos.campo}
                        placeholder="Escribe tu respuesta..."
                        value={respuestas[i] || ''}
                        disabled={!!resultado || intentosUsados >= 3}
                        onChange={e =>
                          actualizarRespuesta(i, e.target.value)
                        }
                      />
                    )}

                    {actividadActual.tipo === 'relacionar' && (
                      <select
                        style={estilos.campo}
                        value={respuestas[i] || ''}
                        disabled={!!resultado || intentosUsados >= 3}
                        onChange={e =>
                          actualizarRespuesta(i, e.target.value)
                        }
                      >
                        <option value="">Selecciona la relación</option>
                        {obtenerEjercicios(actividadActual).map(
                          (par, j) => (
                            <option key={j} value={par.respuesta}>
                              {par.respuesta}
                            </option>
                          )
                        )}
                      </select>
                    )}

                    {actividadActual.tipo === 'ordenar' && (
                      <div>
                        <p>Selecciona los pasos en el orden correcto:</p>
                        {(ejercicio.pasos || []).map((paso, j) => (
                          <div key={j} style={{ margin: '8px 0' }}>
                            <label>
                              Posición {j + 1}
                              <select
                                style={estilos.campo}
                                value={
                                  (respuestas[i] || [])[j] || ''
                                }
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
                                {(ejercicio.pasos || []).map(
                                  (opcion, k) => (
                                    <option key={k} value={opcion}>
                                      {opcion}
                                    </option>
                                  )
                                )}
                              </select>
                            </label>
                          </div>
                        ))}
                      </div>
                    )}

                    {actividadActual.tipo === 'casos' && (
                      <div>
                        <textarea
                          style={estilos.campo}
                          rows="4"
                          placeholder="Escribe tu análisis y solución..."
                          disabled={!!resultado || intentosUsados >= 3}
                          value={respuestas[`texto-${i}`] || ''}
                          onChange={e =>
                            actualizarRespuesta(`texto-${i}`, e.target.value)
                          }
                        />

                        {!resultado && (
                          <label style={estilos.opcion}>
                            <input
                              type="checkbox"
                              checked={respuestas[i] === true}
                              disabled={intentosUsados >= 3}
                              onChange={e =>
                                actualizarRespuesta(i, e.target.checked)
                              }
                            />{' '}
                            Considero que mi respuesta incluye las ideas
                            principales de la solución.
                          </label>
                        )}
                      </div>
                    )}

                    {mostrarCorreccion(ejercicio, i)}
                  </div>
                </section>
              )
            )}

            {resultado && (
              <section style={estilos.panel}>
                <h3>Resultado de tu actividad</h3>
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
                    Los casos prácticos se califican mediante
                    autoevaluación. Revisa las respuestas orientativas.
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
    </div>
  )
}
