import "./style.css"
import {useState} from "react";
import introImg from "../../images/book-stand.jpg"
import infoBox from "../../images/open-book.jpg"

//
function Home() {
    return (
        <main id="home">
            <div className="intro-box">
                <img src={introImg} alt=""/>

                <div className="intro-text">
                    <p className="home-title">Livro de enfeite?
                        <br/>
                        <strong className="home-strong">Nunca mais!</strong>
                    </p>
                    <hr/>
                    <p className="home-text">Sabe aquele livro que você terminou e que provavelmente não voltara a ler?
                        <br/>
                        Há outras pessoas que podem estar interessadas nele.</p>
                </div>

            </div>

            <div className="info-box">
                <div className="info-img">
                    <img src={infoBox} alt=""/>
                </div>
                <div className="info-text">
                    <div>
                        <p className="home-title">
                            <strong className="home-strong">Compartilhe </strong>
                            a experiencia
                            <br/>
                            com outras pessoas!</p>
                        <hr/>
                        <p className="home-text">Troque livros e compartilhe a experiencia que teve com
                            outros, Livros na estante nunca mais!</p>
                    </div>
                    <button id="more-info">mais informacoes</button>
                </div>

            </div>

        </main>
    )
}

export default Home