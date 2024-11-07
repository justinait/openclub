import React from 'react'
import './Accommodations.css'
import duplex from '../../assets/duplex.png'
import mono from '../../assets/mono.jpg'
import mono1 from '../../assets/mono1.png'
import mono2 from '../../assets/mono2.png'

import wifi from '../../assets/icons/wifi.png'
import parking from '../../assets/icons/parking.png'
import pool from '../../assets/icons/pool.png'
import bath from '../../assets/icons/bath.png'
import resto from '../../assets/icons/resto.png'
import parrilla from '../../assets/icons/parrilla.png'
import tv from '../../assets/icons/tv.png'


function Accommodations() {
  
  const icons = [
    { name: 'wifi', image: wifi},
    { name: 'estacionamiento', image: parking},
    { name: 'pileta', image: pool},
    { name: 'Vestuarios', image: bath },
    { name: 'resto', image: resto},
    { name: 'parrilla', image: parrilla},
    { name: 'tv', image: tv},
    // faltan 3
  ];

  const alojamiento = [
    { name: 'DUPLEX', image: duplex},
    { name: 'MONOAMBIENTE STANDAR', image: mono},
    { name: 'MONOAMBIENTE SUPERIOR I', image: mono1},
    { name: 'MONOAMBIENTE SUPERIOR II', image: mono2 }
  ];

  return (
    <div>
      <div className='accommodationsContainer'></div>

      <div>
        {
          alojamiento.map((e, i)=> (
            <div key={i}>
              <p>{e.name}</p>
              <img src={e.image} alt="" width={100}/>
            </div>
          ))
        }
      </div>

      <div>

        <p>NUESTRAS INSTALACIONES Y SERVCIOS</p>
        <div>
          {
            icons.map((e, i)=> (
              <img src={e.image} alt={e.name} width='20' />
            ))
          }
        </div>

        <p>HORARIO DE INGRESOS Y EGRESOS:</p>
        <p>
          CHECK-IN:  A PARTIR DE LAS 13:00 HS
          CHECK-OUT: HASTA LAS 11:00 HS
        </p>

        <button>Reservar</button>
      </div>
    </div>
  )
}

export default Accommodations