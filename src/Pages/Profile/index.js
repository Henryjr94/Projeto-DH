import "./style.css"
import bookPlaceholder from "../../images/bookPlaceholder.jpg"
import profile from "../../images/perfil.png"


function Perfil() {
  return (
    <main className="profile">
      <section>
        <h2>Meu Perfil</h2>
        <section className="profile_box">
          <div className="profile_foto">
            <img src={profile} alt="Foto de Perfil" />
          </div>
          <div className="profile_info">
            <h3>João Silva</h3>
            <p><strong>E-mail: </strong>joao.silva@hotmail.com</p>
            <p><strong>Telefone </strong>11 94152-7895</p>
            <p><strong>Local: </strong> São Paulo</p>
            <button>Editar</button>
          </div>
        </section>

        <h2>Livros para trocas</h2>
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

export default Perfil