import React, { useState } from 'react'

export default function App() {
  const [especialidad, setEspecialidad] = useState('')
  const [nivel, setNivel] = useState('')

  const especialidades = [
    {
      nombre: 'Informática',
      icono: '💻',
      descripcion: 'Programación, redes, bases de datos e inteligencia artificial.'
    },
    {
      nombre: 'Ciencias Naturales',
      icono: '🔬',
      descripcion: 'Ciencias, investigación, matemáticas y física.'
    },
    {
      nombre: 'Contabilidad',
      icono: '📊',
      descripcion: 'Contabilidad, finanzas y gestión empresarial.'
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>🎓 Campus ABC</h1>
        <p>Tu espacio de aprendizaje virtual</p>
      </header>

      <main className="principal">
        <h2>¡Bienvenido a Campus ABC!</h2>
        <p>Aprende, practica y desarrolla todo tu potencial académico.</p>

        <h2>Selecciona tu especialidad</h2>

        <section className="especialidades">
          {especialidades.map((item) => (
            <article
              key={item.nombre}
              onClick={() => setEspecialidad(item.nombre)}
              style={{
                cursor: 'pointer',
                border: especialidad === item.nombre
                  ? '3px solid #2454a6'
                  : '2px solid transparent'
              }}
            >
              <h3>{item.icono} {item.nombre}</h3>
              <p>{item.descripcion}</p>
            </article>
          ))}
        </section>

        <h2 style={{ marginTop: '35px' }}>Selecciona tu año</h2>

        <select
          value={nivel}
          onChange={(e) => setNivel(e.target.value)}
          style={{ padding: '12px', marginTop: '15px' }}
        >
          <option value="">Selecciona tu nivel</option>
          <option>Primero de Bachillerato</option>
          <option>Segundo de Bachillerato</option>
          <option>Tercero de Bachillerato</option>
        </select>

        <p style={{ marginTop: '25px' }}>
          {especialidad && `Especialidad: ${especialidad}`}
        </p>
        <p>{nivel && `Nivel: ${nivel}`}</p>
      </main>
    </div>
  )
}
