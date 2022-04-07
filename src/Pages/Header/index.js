import "./style.css"
import { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import { DadosGlobais } from "../../App";

function Intro() {
    var [loginStyle, setLoginStyle] = useState('hidden')
    const [dados, setDados] = useContext(DadosGlobais)

    return (
        <header>
            <div id="header-main">
                <h1>Livraria de Todos</h1>
                <div id="head-right">
                    <button onClick={() => setLoginStyle('visible')}>LOGIN</button>
                    <form id="search-form">
                        <input type="text" placeholder="Pesquisar livros" name="book-name" onChange={e => setDados(data => ({...data, livroBusca:e.target.value}))}/>
                        <Link to="/search"> <input type="submit" className="sub-btn" value="Busca" onClick={() => console.log(dados)} /> </Link>
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

                <form method="get" className="login-form">
                    {/* change to post */}
                    <div>
                        Username
                        <input type="text" name="user" placeholder="Nome do usuario"/>
                    </div>
                    <div>
                        Senha
                        <input type="password" name="password" placeholder="Senha"/>
                    </div>
                    <input type="submit" id="login-sub" value="Login" />
                </form>


                <Link to="/cadastro" id="cadastro" onClick={() => setLoginStyle('hidden')}>Cadastrar-se </Link>

            </div>
        </header>

    )
}

export default Intro