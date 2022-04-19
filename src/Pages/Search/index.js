import "./style.css"
import bookPlaceholder from "../../images/bookPlaceholder.jpg"

function Search () {
    return (
        <main className="search-container">
    {/* <!-- Dentro no MAIN ficaram a barra de pesquisa, o Resultado de Pesquisa e Os mais procurados 
    (que receberam uma className="chamada 'suggestions-book')   --> */}
        <form>
            <input type="search" name="q" placeholder="O que você deseja ler?"/>
            <div>
                <input type="submit" value=""/>
            </div>
        </form>

        <section className="search-results">
            <h2>Resultados da Pesquisa</h2>
            {/* <!-- Cada imagem e botão receberam o mesmo container para continuarem juntos quando for criado
            o site responsivo  --> */}
            <div className="imagens-container">
                <img src={bookPlaceholder} width="" height="" alt="" id=""/>
                <p className="book-name">Harry Potter</p>
                <p className="author-name">J.K. Rowling</p>
                <p className="bottom">TROCAR</p>
            </div>
            <div className="imagens-container">
                <img src={bookPlaceholder} width="" height="" alt="" id=""/>
                <p className="book-name">Harry Potter</p>
                <p className="author-name">J.K. Rowling</p>
                <p className="bottom">TROCAR</p>
            </div>
            <div className="imagens-container">
                <img src={bookPlaceholder} width="" height="" alt="" id=""/>
                <p className="book-name">Harry Potter</p>
                <p className="author-name">J.K. Rowling</p>
                <p className="bottom">TROCAR</p>
            </div>
            <div className="imagens-container">
                <img src={bookPlaceholder} width="" height="" alt="" id=""/>
                <p className="book-name">Harry Potter</p>
                <p className="author-name">J.K. Rowling</p>
                <p className="bottom">TROCAR</p>
            </div>
            <div className="imagens-container">
                <img src={bookPlaceholder} width="" height="" alt="" id=""/>
                <p className="book-name">Harry Potter</p>
                <p className="author-name">J.K. Rowling</p>
                <p className="bottom">TROCAR</p>
            </div>
        </section>


        <section className="suggestions-book">
            <h2>Os Mais Procurados</h2>
            <div className="imagens-container">
                <img src={bookPlaceholder} width="" height="" alt="" id=""/>
                <p className="book-name">Harry Potter</p>
                <p className="author-name">J.K. Rowling</p>
                <p className="bottom">TROCAR</p>
            </div>
            <div className="imagens-container">
                <img src={bookPlaceholder} width="" height="" alt="" id=""/>
                <p className="book-name">Harry Potter</p>
                <p className="author-name">J.K. Rowling</p>
                <p className="bottom">TROCAR</p>
            </div>
            <div className="imagens-container">
                <img src={bookPlaceholder} width="" height="" alt="" id=""/>
                <p className="book-name">Harry Potter</p>
                <p className="author-name">J.K. Rowling</p>
                <p className="bottom">TROCAR</p>
            </div>
            <div className="imagens-container">
                <img src={bookPlaceholder} width="" height="" alt="" id=""/>
                <p className="book-name">Harry Potter</p>
                <p className="author-name">J.K. Rowling</p>
                <p className="bottom">TROCAR</p>
            </div>
            <div className="imagens-container">
                <img src={bookPlaceholder} width="" height="" alt="" id=""/>
                <p className="book-name">Harry Potter</p>
                <p className="author-name">J.K. Rowling</p>
                <p className="bottom">TROCAR</p>
            </div>
        </section>


    </main>
    )
}

export default Search
