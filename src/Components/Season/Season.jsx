import React from 'react'
import './Season.css'
import nautico from '../../assets/agencyrio.jpg'
import mono1 from '../../assets/mono1.png'
import mono2 from '../../assets/mono2.png'

function Season() {

  const season = [
    { name: 'VISITA A VIÑEDOS', image: nautico},
    { name: 'PASEO NAUTICO', image: mono1},
    { name: 'ATARDECER CON BRINDIS', image: mono2 },
    { name: 'VISITA A VIÑEDOS', image: nautico},
    { name: 'PASEO NAUTICO', image: mono1},
    { name: 'ATARDECER CON BRINDIS', image: mono2 }
  ];

  return (
    <div>
      <div className='seasonContainer'></div>

      <div>
        <h5>Temporada de Verano</h5>
        <p>
          Brindamos la posibilidad de visitar y disfrutar de Open Club a través de nuestro pase por el día.
          Incluye el ingreso a todas las piscinas y el uso de nuestras instalaciones. 
          <br /><br />
          Dentro del complejo contamos con un bar de tragos y comidas rápidas, reservas de canchas de pádel, alquiler de reposeras, fogoneros y parrillas, como también posibilidad de reservar excursiones náuticas o terrestres en la ciudad.
        </p>

        <div>
          {
            season.map((e, i)=> (
              <div key={i}>
                <p>{e.name}</p>
                <img src={e.image} alt="" width={100}/>
              </div>
            ))
          }
        </div>
        <div>
          <h5>Info</h5>
          <p>
          Tenemos convenios con distintos alojamientos de Paraná que incluyen en su estadía la visita a nuestro complejo. Consultanos cuales!
          <br /><br />
          <strong>Pases</strong> - Individuales por el día <br />
          - Pack por diez (10) pases.
          Contactanos por visitas grupales, festejos o alquiler de espacios.
          </p>
        </div>

        <div>
          <p>CONTACTO</p>

          <p>Temporada</p>

          <p>*No es necesario reservar la visita por el día, se abona al ingresar.</p>
        </div>
      </div>
    </div>
  )
}

export default Season