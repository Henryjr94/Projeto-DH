import Setup from './Pages/Header'
import Routes from './routes'
import { createContext, useState } from 'react'
// import axios from "axios"
// let clienteAtual

// axios.get(`http://localhost:3000/lista-cliente`).then(res => {

//             let bancoDados = res.data 

//             clienteAtual = bancoDados[0].email

// })  

export const DadosGlobais = createContext()

function App() {
  let [dados, setDados] = useState({
    nome: "clienteAtual[0].nome",
    email: "clienteAtual[0].email",
    livroBusca: ""
  })
  return (
    <DadosGlobais.Provider value={[dados, setDados]}>

      <Routes />
    
    </DadosGlobais.Provider>      
  );
}

export default App;