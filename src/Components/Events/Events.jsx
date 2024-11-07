import React from 'react'
import './Events.css'

function Events() {
  
  const items = [
    { name: 'Instalaciones exclusivas', description: 'de Open Club para el evento'},
    { name: 'Servicios gastronómicos'},
    { name: 'Servicio de bebidas'},
    { name: 'Vinos entrerrianos' },
    { name: 'Climatización (Frio/Calor)'},
    { name: 'Proyector con pantalla gigante.'},
    { name: 'Equipo de Audio. '},
    { name: 'Mobiliario, mantelería y enseres.'},
    { name: 'WIFI'},
    { name: 'Grupos sanitarios', description: 'de damas y caballeros.'},
    { name: 'Dj / Luces y Sonido' }
  ];
  
  return (
    <div>
      <div className='eventsContainer'></div>
      

      <div>
        <h5>Nuestras instalaciones y servicios pensados para tu bienestar</h5>
        <div>
          {
            items.map((e, i)=> (
              <div key={i}>
                <img src="" alt="" />
                <p>{e.name}</p>
                <p>{e.description}</p>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Events