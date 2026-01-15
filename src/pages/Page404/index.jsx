import styles from "./Page404.module.css";

function Page404() {
    return (
        <section className={styles.page404}>
            <h2 className={styles.title2}>Algo de errado não está certo</h2>
            <div className={styles.texts}>
                <span className={styles.big_text}>404</span>
                <strong className={styles.red_text}>Página não localizada!</strong>
            </div>
        </section>
    );
}

export default Page404;