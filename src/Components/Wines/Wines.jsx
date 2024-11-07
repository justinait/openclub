import React from 'react'
import './Wines.css'

function Wines() {
  
  const items = [
    { name: 'Excursiones temáticas'},
    { name: 'Visitas a las bodegas y viñedos'},
    { name: 'Maridajes especiales', description: 'y gastronomía con identidad'},
    { name: 'Paquetes turísticos', description: 'que vinculan viñedos y bodegas de Entre Ríos' },
    { name: 'Viajes de incentivo'},
    { name: 'Eventos especiales sociales y corporativos'}
  ];
  
  return (
    <div>
      <div className='winesContainer'></div>
      

      <div>
        <h5>Vinoteca</h5>
        <p>
          Vinos de Ríos es la primera y única vinoteca dedicada 100% a etiquetas entrerrianas. 
          Además de brindar la posibilidad de degustar y comprar vinos de muchas bodegas y viñedos entrerrianos, la vinoteca articula una muy buena propuesta de enoturismo con la posibilidad de conocer la historia de la vitivinicultura de la provincia, a través de
        </p>
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
          <button>Reservar</button>
        </div>
      </div>
    </div>
  )
}

export default Wines