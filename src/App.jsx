
import React, { useState } from 'react'

const materias = {
  Informatica: [
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
  Contabilidad: [
    'Matemáticas',
    'Física',
    'Lengua y Literatura',
    'Inglés',
    'Emprendimiento y Gestión'
  ]
}

const modulos = [
  'Módulo 1',
  'Módulo 2',
  'Módulo 3',
  'Módulo 4',
  'Módulo 5'
]

const niveles = [
  'Primero de Bachillerato',
  'Segundo de Bachillerato',
  'Tercero de Bachillerato'
]

export default function App() {
  const [pantalla, setPantalla] = useState('inicio')
  const [especialidad, setEspecialidad] = useState('')
  const [nivel, setNivel] = useState('')
  const [materia, setMateria] = useState('')
  const [modulo, setModulo] = useState('')
  const [tema, setTema] = useState('')

  const volver = () => {
    if (pantalla === 'asignaturas') setPantalla('inicio')
    else if (pantalla === 'modulos') setPantalla('asignaturas')
    else if (pantalla === 'temas') setPantalla('modulos')
    else if (pantalla === 'clase') setPantalla('temas')
    else if (pantalla === 'actividades') setPantalla('clase')
  }

  const tarjeta = (titulo, descripcion, accion) => (
    <button className="tarjeta" onClick={accion}>
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
              {Object.keys(materias).map((nombre) =>
                tarjeta(
                  nombre,
                  'Explora tus asignaturas y actividades.',
                  () => setEspecialidad(nombre)
                )
              )}
            </div>

            <h2>Selecciona tu año</h2>
            <select
              value={nivel}
              onChange={(e) => setNivel(e.target.value)}
            >
              <option value="">Selecciona tu nivel</option>
              {niveles.map((n) => <option key={n}>{n}</option>)}
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
              {materias[especialidad].map((nombre) =>
                tarjeta(nombre, 'Cinco módulos de aprendizaje.', () => {
                  setMateria(nombre)
                  setPantalla('modulos')
                })
              )}
            </div>
          </>
        )}

        {pantalla === 'modulos' && (
          <>
            <h2>{materia}</h2>
            <p>Selecciona un módulo.</p>
            <div className="especialidades">
              {modulos.map((nombre) =>
                tarjeta(nombre, 'Cinco temas de aprendizaje.', () => {
                  setModulo(nombre)
                  setPantalla('temas')
                })
              )}
            </div>
          </>
        )}

        {pantalla === 'temas' && (
          <>
            <h2>{modulo}</h2>
            <p>Selecciona un tema para estudiar.</p>
            <div className="especialidades">
              {[1, 2, 3, 4, 5].map((n) =>
                tarjeta(`Tema ${n}`, 'Clase, ejemplos y actividades.', () => {
                  setTema(`Tema ${n}`)
                  setPantalla('clase')
                })
              )}
            </div>
          </>
        )}

        {pantalla === 'clase' && (
          <>
            <h2>{tema}</h2>
            <p>{materia} · {modulo}</p>
            <p>El contenido de la clase se incorporará en esta sección.</p>
            <button className="continuar" onClick={() => setPantalla('actividades')}>
              Ir a las actividades →
            </button>
          </>
        )}

        {pantalla === 'actividades' && (
          <>
            <h2>Actividades de {tema}</h2>
            <p>Próximamente incorporaremos las cinco actividades con diez ejercicios cada una.</p>
          </>
        )}
      </main>
    </div>
  )
}
