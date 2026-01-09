import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>rafaelYu.dev</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/projects">Projetos</Link>
                <Link to="/contacts">Contatos</Link>
            </nav>
        </header>
    );
}

export default Header;