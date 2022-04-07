import Setup from './Pages/Header'
import Routes from './routes'
import { createContext, useState } from 'react'

export const Usuario = createContext()

function App() {
  let [usuario, setUsuario] = useState({
    nome: "Joao",
    email: "joao@oi.com"
  })
  return (
    <Usuario.Provider value={[usuario, setUsuario]}>

      <Routes />
    
    </Usuario.Provider>      
  );
}

export default App;