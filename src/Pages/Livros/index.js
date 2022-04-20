import "./style.css"
import bookPlaceholder from "../../images/bookPlaceholder.jpg"
import Livros from "../../images/perfil.png"

function Livro() {
   return (
    <main className="profile">
       <section>
        {/* <h1>Galeria do Livros</h1> */}
        {/* <section className="profile_box">
          <div className="profile_foto">
            <img src={Livros} alt="Foto de Perfil" />
          </div>
          <div className="profile_info">
            <h3>João Silva</h3>
            <p><strong>E-mail: </strong>joao.silva@hotmail.com</p>
            <p><strong>Telefone </strong>11 94152-7895</p>
            <p><strong>Local: </strong> São Paulo</p>
            <button>Editar</button>
          </div>
         </section>  */}

        <h2>Galeria de Livros</h2>
        <br/>
        <div className="profile_box_troca">
          <div className="profile_books">
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
            <div className="profile_book_box">
              <img src={bookPlaceholder} alt="Livro" />
              <p>Book - author</p>
              <button>Trocar</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )

}

export default Livro