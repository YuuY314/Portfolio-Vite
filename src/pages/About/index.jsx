import styles from "./About.module.css";
import avatar from "./images/avatar.png";
import html from "./images/icon-html.svg";
import css from "./images/icon-css.svg";
import js from "./images/icon-js.svg";
import react from "./images/icon-react.svg";
import node from "./images/icon-node.svg";
import sql from "./images/icon-sql.svg";

function About() {
    return (
        <section className={styles.about}>
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar}/>
                <div className={styles.texts}>
                    <h2>Sobre</h2>
                    <p>
                        Sou <span>Rafael Yu</span> <br/>
                        <strong>Dev Full Stack</strong>
                    </p>
                    <p>Estou a procura da minha primeira vaga como desenvolvedor</p>
                    <p>Sou apaixonado por transformar ideias em realidade</p>
                    <p>Estudo sobre desenvolvimento de jogos como hobby</p>
                </div>
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icons}>
                    <img src={html} alt="Ícone do HTML"/>
                    <img src={css} alt="Ícone do CSS"/>
                    <img src={js} alt="Ícone do JS"/>
                    <img src={react} alt="Ícone do React"/>
                    <img src={node} alt="Ícone do Node"/>
                    <img src={sql} alt="Ícone do SQL"/>
                </div>
            </div>
        </section>
    );
}

export default About;