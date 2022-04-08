import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListaPacientes from './components/ListaPacientes'

function App() {
 
  const [pacientes, setPacientes] = useState([]);
   


  return (
    <div className="container mx-auto mt-20">
          <Header 
          />

          <div className=' mt-12 md:flex'>
          <Formulario 
          pacientes={pacientes}
            setPacientes={setPacientes}
          />
          <ListaPacientes 
            pacientes={pacientes}
          />
          </div>
    </div>
  )
}

export default App
