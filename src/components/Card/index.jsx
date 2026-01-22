import { FaCss3Alt, FaHtml5, FaJava, FaJs, FaPhp, FaReact } from "react-icons/fa";
import styles from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";
import { PiFileCSharp } from "react-icons/pi";

const languageIcons = {
    HTML: <FaHtml5/>,
    CSS: <FaCss3Alt/>,
    JavaScript: <FaJs/>,
    React: <FaReact/>,
    Java: <FaJava/>,
    "C#": <PiFileCSharp/>,
    PHP: <FaPhp/>
};

function Card({ name, description, html_url, languages }) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icons}>
                    {
                        languages?.map((lang) => languageIcons[lang] ? (
                            <span key={lang} title={lang}>
                                {languageIcons[lang]}
                            </span>
                        ): null)
                    }
                </div>
                <a href={html_url} target="_blank" rel="noopenner norefferer" className={styles.button}>
                    <BsArrowRight/>
                </a>
            </div>
        </section>
    );
}

export default Card;