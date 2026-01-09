import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
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
                <Link to="/about" className="btn btn-red">
                    Saiba mais sobre mim
                </Link>
                </div>
                <figure>
                <img className="img-home" src="/developer-red.svg" alt="Imagem de Home"/>
                </figure>
            </section>
            <Footer/>
        </>
    );
}

export default Home;