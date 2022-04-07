import "./style.css"
import bookPlaceholder from "../../images/harryPotterEAPredraFilosofal.webp"


function Perfil() {
  return (
    <main>
      <section class="main">
        <h2>Meu Perfil</h2>
        <section class="box">
          <div class="foto_perfil">
            <img src="/images/perfil.png" alt="Foto de Perfil" />
          </div>
          <div class="info">
            <h3>João Silva</h3>
            <p><strong>E-mail: </strong>joao.silva@hotmail.com</p>
            <p><strong>Telefone </strong>11 94152-7895</p>
            <p><strong>Local: </strong> São Paulo</p>
            <p><strong>Trocas realizadas: </strong>10</p>
            <p><strong>Reputação: </strong>5 estrelas</p>
            <button>Editar</button>
          </div>

          <div class="info">
            <p><strong>Trocas realizadas: </strong>10</p>
            <p><strong>Reputação: </strong>5 estrelas</p>
          </div>
        </section>

        <h2>Livros para trocas</h2>
        <div class="box_troca">
          <div class="books">
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
          </div>
        </div>

        <h2>Livros que quero</h2>
        <div class="box_troca">
          <div class="books">
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>

            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
            <div class="book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Coraline - Neil Gaiman</p>
              <button>Trocar</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )

}

export default Perfil