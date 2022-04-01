import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListaPacientes from './components/ListaPacientes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto mt-20">
          <Header />
          <Formulario />
          <ListaPacientes />
    </div>
  )
}

export default App
