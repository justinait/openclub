import React from 'react'
import './Home.css'
import logo from '../../assets/logo.png'
import gerva from '../../assets/summerhome.jpg'
import alojamiento from '../../assets/alojamientohome.jpg'
import events from '../../assets/eventshome.jpg'

function Home() {

  const home = [
    { name: 'TEMPORADA DE VERANO', image: gerva, description: 'Pase del día a nuestras piscinas ' },
    { name: 'ALOJAMIENTOS', image: alojamiento, description: 'Dúplex, apartamentos, monoambientes y conteiner' },
    { name: 'EVENTOS', image: events, description: 'Sociales y corporativos' }
  ];

  return (
    <div>

      <div className='homeContainer'>
        <img src={logo} alt="Open Club - Complejo turístico" className='logoHero' />
      </div>

      <div>
        <h4>Sobre Nosotros</h4>
        <p>
          Somos el Complejo Turístico Open Club, ubicados en Paraná, E.R. más precisamente en el Complejo Playas del Thompson.
          En un entorno de belleza natural y arquitectura cuidada ofrecemos una serie de productos y servicios únicos en la ciudad.
          Entre ellos destacamos, apartamentos premium, eventos exclusivos, nuestra propia agencia de viajes, vinoteca de vinos entrerrianos, temporada de verano con bar y piscinas, y otros.
          <br /><br />
          Aquí nos enorgullece mencionar, el haber sido certificados con nivel bronce por el programa Hoteles Más Verdes, demostrando nuestro
          aporte con el medioambiente. También declarados como complejo de interés turístico por la Municipalidad de Paraná. 
        </p>
      </div>
      <div>
        <h4>Complejo turisitico</h4>
        <p>
          En Open Club, nos dedicamos a brindar una atención cálida y personalizada para que cada visitante se sienta bienvenido y cuidado.
        </p>
      </div>

      <div>
        {
          home.map(e=> (
            <div>
              <img src={e.image} alt="" />
              <p>{e.name}</p>
              <p>{e.description}</p>
            </div>
          ))
        }
      </div>

      <div className='reviewsContainerYellow'>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Home