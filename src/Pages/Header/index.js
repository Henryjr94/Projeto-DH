import "./style.css"
import {useContext, useState} from "react";
import { Link } from 'react-router-dom'
import { Usuario } from "../../App";

function Intro() {
    var [loginStyle,setLoginStyle] = useState('hidden')
    const [usuario, setUsuario] = useContext(Usuario)

    console.log(usuario)
    return (
        <header>
            <div id="header-main">
                <h1>Livraria de Todos</h1>
                <div id="head-right">
                    <button onClick={() => setLoginStyle('visible')}>LOGIN</button>
                    <form id="search-form">
                        <input type="text" placeholder="Search" name="book-name"/>
                        <Link to="/search"> <input type="submit" className="sub-btn"/> </Link>                        
                    </form>
                </div>
            </div>
            <div id="nav-menu">
                <list>
                    <Link to="/"><ul>Home</ul></Link>
                    <Link to="/profile?name"><ul>Perfil</ul></Link>
                    <Link to="/livros"><ul>Livros</ul></Link>
                    <Link to="/about"><ul>Sobre Nos</ul></Link>               
                </list>
            </div>
            <div
                id="login-box"
                style={{
                visibility: loginStyle
            }}>
                <div id="login-top">
                    <p>LOGIN</p> 
                    <button onClick={() => setLoginStyle('hidden')}>X</button>
                </div>
                
                <form method="get" id="login-form">
                    {/* change to post */}
                    <input type="text" name="user" placeholder="username"/>
                    <input type="password" name="password" placeholder="password"/>
                    <input type="submit" id="login-sub"/>
                </form>

                <Link to="/cadastro">Cadastrar-se</Link>
            </div>
        </header>

    )
}

export default Intro