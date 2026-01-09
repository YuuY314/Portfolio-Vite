import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header/>
      <section className="container">
        <div className="presentation">
          <p>
            Olá, sou <br/>
            <span>Rafael Yu</span> <br/>
            Dev Full Stack
          </p>
          <button className="btn btn-red">
            Saiba mais sobre mim
          </button>
        </div>
        <figure>
          <img className="img-home" src="/developer-red.svg" alt="Imagem de Home"/>
        </figure>
      </section>
      <Footer/>
    </>
  )
}

export default App
