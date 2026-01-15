import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className={styles.header}>
            <Link to="/">
                <span>rafaelYu.dev</span>
            </Link>
            <nav
                className={`${styles.menuSandwich} ${showMenu ? styles.show : ""}`}
                onClick={toggleMenu}
            >
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/projects">Projetos</Link>
                <Link to="/contacts">Contatos</Link>
            </nav>
            <div
                className={styles.menuButton}
                onClick={toggleMenu}
            >
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
        </header>
    );
}

export default Header;