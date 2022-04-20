import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Header from './Pages/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Search from './Pages/Search'
import Profile from './Pages/Profile'
import SignUp from './Pages/Sign-up'
import Livros from "./Pages/Livros"


function MyRoutes() {
    return(
         <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Cadastro" element={<SignUp />} />
                <Route path="/Livros" element={<Livros/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes