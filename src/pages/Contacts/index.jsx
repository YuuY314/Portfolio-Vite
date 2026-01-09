import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Contacts.module.css";
import { GoMail } from "react-icons/go";
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";

function Contacts() {
    return (
        <>
            <Header/>
            <Container>
                <section className={styles.contacts}>
                    <h2>Contatos</h2>
                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre</p>
                    <div className={styles.icons}>
                        <a href="mailto:rafaelyu0202@gmail.com" target="_blank" rel="noopener noreferrer">
                            <GoMail className={styles.icon}/>
                        </a>                        
                        <a href="https://www.instagram.com/rafael_yuuy/" target="_blank" rel="noopener noreferrer">
                            <BsInstagram className={styles.icon}/>
                        </a>
                        <a href="https://www.youtube.com/@yuuy7289" target="_blank" rel="noopener noreferrer">
                            <BsYoutube className={styles.icon}/>
                        </a>
                        <a href="https://github.com/YuuY314" target="_blank" rel="noopener noreferrer">
                            <BsGithub className={styles.icon}/>
                        </a>
                        <a href="https://www.linkedin.com/in/rafaelyuuy/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin className={styles.icon}/>
                        </a>
                    </div>
                </section>
            </Container>
            <Footer/>
        </>
    );
}

export default Contacts;