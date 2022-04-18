import './style.css'
import form from '../../images/form.webp'
import { useEffect, useState } from 'react'
import axios from "axios"
let clinteTitulo

// function efetuarCadastro () {


// }

// axios.all([
//     axios.post("`http://localhost:3000/cadastro/cliente").then(

//     )
// ])


function SignUp () {
    let [dadosCadastro, setDadosCadastro] = useState({nome:"",email:"",estado:"",cidade:"",bairro:"",senha:""})

    useEffect (() => {
    }, [dadosCadastro])

    return (
        <main className='signup'>

            <img src={form} />

            <div id='form-box'>

                <h2>Cadastro</h2>

                <form>
                    <div id='user-data'>
                        <div className='form-input'>
                            Nome
                            <input type="text" name='nome' placeholder='Nome' onChange={e => dadosCadastro.nome = e.target.value} />
                        </div>
                        <div className='form-input'>
                            Email
                            <input type="email" name='email'  placeholder='E-mail' onChange={e => dadosCadastro.email = e.target.value}/>       
                        </div>
                        <div className='form-input'>
                            Estado
                            <input type="text" name='estado' maxLength="2"  placeholder='Estado exemplo: SP' onChange={e => dadosCadastro.estado = e.target.value} />
                        </div>
                        <div className='form-input'>
                            Cidade
                            <input type="text" name='cidade'  placeholder='Cidade' onChange={e => dadosCadastro.cidade = e.target.value} />
                        </div>
                        <div className='form-input'>
                            Bairro
                            <input type="text" name='bairro'  placeholder='Bairro' onChange={e => dadosCadastro.bairro = e.target.value} />
                        </div>
                        <div className='form-input'>
                            Senha
                            <input type="password" name='senha' placeholder='senha' onChange={e => dadosCadastro.senha = e.target.value} />
                        </div>
                    </div>
                </form>
                <button id='cadastro' onClick={() => console.log(dadosCadastro)}> Enviar </button>
            </div>    

        </main>
    )
}

export default SignUp