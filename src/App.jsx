import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListaPacientes from './components/ListaPacientes'

function App() {
 
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerPacientes = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ??  [];
      setPacientes(pacientesLS);
    }

    obtenerPacientes();
  },[])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes]);

  const eliminarPaciente = (id) => {
     const pacientesActualizado = pacientes.filter(pacienteFiltrado => pacienteFiltrado.id !== id);
     setPacientes(pacientesActualizado);
  }

  return (
    <div className="container mx-auto mt-20">
          <Header 
          />

          <div className=' mt-12 md:flex'>
                    <Formulario 
                          pacientes={pacientes}
                          setPacientes={setPacientes}
                          paciente={paciente}
                          setPaciente={setPaciente}
                    />
                    <ListaPacientes 
                          pacientes={pacientes}
                          setPaciente={setPaciente}
                          eliminarPaciente={eliminarPaciente}
                    />
          </div>
    </div>
  )
}

export default App
