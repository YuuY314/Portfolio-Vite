import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Projects.module.css";

function Projects() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const searchRepositories = async () => {
            const response = await fetch("https://api.github.com/users/yuuy314/repos");
            const data = await response.json();
            setRepositories(data);
        }
        searchRepositories();
    }, []);

    return (
        <section className={styles.projects}>
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.list}>
                        {
                            repositories.map((repo) => (
                                <Card
                                    key={repo.id}
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </section>
    );
}

export default Projects;