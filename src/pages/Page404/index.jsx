import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Page404.module.css";

function Page404() {
    return (
        <>
            <Header/>
            <Container>
                <h2 className={styles.title2}>Algo de errado não está certo</h2>
                <div className={styles.texts}>
                    <span className={styles.big_text}>404</span>
                    <strong className={styles.red_text}>Página não localizada!</strong>
                </div>
            </Container>
            <Footer/>
        </>
    );
}

export default Page404;