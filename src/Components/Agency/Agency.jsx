import React from 'react'
import './Agency.css'
import nautico from '../../assets/agencyrio.jpg'
import mono1 from '../../assets/mono1.png'
import mono2 from '../../assets/mono2.png'

function Agency() {
  
  const agency = [
    { name: 'VISITA A VIÑEDOS', image: nautico},
    { name: 'PASEO NAUTICO', image: mono1},
    { name: 'ATARDECER CON BRINDIS', image: mono2 }
  ];
  return (
    <div>
      <div className='agencyContainer'></div>

      <div>
        <h5>Costanera 241</h5>
        <p>
          La Mayor Organización de Turismo en la Región.
          Con una experiencia de más de 30 años, la empresa cuenta con 10 áreas de distintos productos turísticos, entre ellas destacamos:
          Paraná Tu Río y Vinos de Ríos. las cuales te invitan a disfrutar distintas excursiones en la ciudad.
        </p>

        <div>
          {
            agency.map((e, i)=> (
              <div key={i}>
                <p>{e.name}</p>
                <img src={e.image} alt="" width={100}/>
              </div>
            ))
          }
        </div>

        <div>
          <p>CONTACTO</p>

          <p>Paraná tu rio</p>
          <p>Vinos de ríos</p>
        </div>
      </div>
    </div>
  )
}

export default Agency