import Setup from './Pages/Header'
import Routes from './routes'
import { createContext, useState } from 'react'

export const DadosGlobais = createContext()

function App() {
  let [dados, setDados] = useState({
    nome: "Joao",
    email: "joao@oi.com",
    livroBusca: ""
  })
  return (
    <DadosGlobais.Provider value={[dados, setDados]}>

      <Routes />
    
    </DadosGlobais.Provider>      
  );
}

export default App;