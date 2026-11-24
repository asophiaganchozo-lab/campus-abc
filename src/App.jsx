
import React, { useState } from 'react'
import { niveles, especialidades, curriculo } from './curriculo.js'
import './styles.css'

export default function App() {
  const [pantalla, setPantalla] = useState('inicio')
  const [especialidad, setEspecialidad] = useState('')
  const [nivel, setNivel] = useState('')
  const [materia, setMateria] = useState('')
  const [modulo, setModulo] = useState(null)
  const [tema, setTema] = useState('')

  const contenido = curriculo?.[especialidad]?.[nivel]?.[materia]
  const modulos = contenido?.modulos || []

  const volver = () => {
    const rutas = {
      asignaturas: 'inicio',
      modulos: 'asignaturas',
      temas: 'modulos',
      clase: 'temas',
      actividades: 'clase'
    }
    setPantalla(rutas[pantalla] || 'inicio')
  }

  const tarjeta = (titulo, descripcion, accion) => (
    <button className="tarjeta" onClick={accion} key={titulo}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <span>Entrar →</span>
    </button>
  )

  return (
    <div className="app">
      <header className="header">
        <h1>🎓 Campus ABC</h1>
        <p>Tu espacio de aprendizaje virtual</p>
      </header>

      <main className="principal">
        {pantalla !== 'inicio' && (
          <button className="volver" onClick={volver}>
            ← Regresar
          </button>
        )}

        {pantalla === 'inicio' && (
          <>
            <h2>¡Bienvenido a Campus ABC!</h2>
            <p>Selecciona tu especialidad y año de Bachillerato.</p>

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
                {modulos.map((item, i) =>
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
                El currículo de esta asignatura se incorporará
                próximamente. No se ha eliminado tu selección.
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

            <section className="tarjeta">
              <h3>Objetivo de aprendizaje</h3>
              <p>
                Comprender y aplicar los conceptos relacionados con
                {` ${tema.toLowerCase()}`} mediante análisis y práctica.
              </p>

              <h3>Desarrollo de la clase</h3>
              <p>
                En esta sección se incorporará la explicación completa,
                los conceptos fundamentales, ejemplos resueltos y
                aplicaciones prácticas de este tema.
              </p>

              <h3>Aplicación</h3>
              <p>
                El estudiante trabajará con situaciones y problemas
                relacionados con los contenidos estudiados.
              </p>
            </section>

            <button
              className="continuar"
              onClick={() => setPantalla('actividades')}
            >
              Ir a las actividades →
            </button>
          </>
        )}

        {pantalla === 'actividades' && (
          <>
            <h2>Actividades de aprendizaje</h2>
            <p>{tema}</p>

            <div className="especialidades">
              {[
                'Selección múltiple',
                'Completar',
                'Relacionar conceptos',
                'Ordenar procedimientos',
                'Resolución y análisis de problemas'
              ].map((nombre, i) =>
                tarjeta(
                  `Actividad ${i + 1}: ${nombre}`,
                  '10 ejercicios por actividad.',
                  () => alert(
                    'Los ejercicios de esta actividad se incorporarán en la siguiente etapa.'
                  )
                )
              )}
            </div>
          </>
        )}
      </main>
    </div>
  )
}
