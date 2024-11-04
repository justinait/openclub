import React from "react"
import '@fontsource-variable/montserrat';
import '@fontsource/nokora';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Accommodations from "./Components/Accommodations/Accommodations";
import Events from "./Components/Events/Events";
import Wines from "./Components/Wines/Wines";
import Agency from "./Components/Agency/Agency";
import Season from "./Components/Season/Season";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={< Home />} />
        <Route path='/alojamientos' element={< Accommodations />} />
        <Route path='/eventos' element={< Events />} />
        <Route path='/vinoteca' element={< Wines />} />
        <Route path='/agencia' element={< Agency />} />
        <Route path='/temporada' element={< Season />} />
        <Route path='/contacto' element={< Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
