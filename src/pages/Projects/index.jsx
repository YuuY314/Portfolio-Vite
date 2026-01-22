import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Projects.module.css";

function Projects() {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/github");
                const data = await response.json();

                if(!Array.isArray(data)){
                    throw new Error(data.message || "Erro ao buscar projetos");
                }

                setRepositories(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if(loading) return (
        <section className={styles.projects}>
            <h2>Projetos</h2>
            <p>Carregando projetos...</p>
        </section>
    );

    if(error) return (
        <section className={styles.projects}>
            <h2>Erro</h2>
            <p>{error}</p>
        </section>
    );

    return (
        <section className={styles.projects}>
            <h2>Projetos</h2>
            <section className={styles.list}>
                {
                    repositories.map((repo) => (
                        <Card
                            key={repo.id}
                            name={repo.name}
                            description={repo.description}
                            html_url={repo.html_url}
                            languages={repo.languages}
                        />
                    ))
                }
            </section>
        </section>
    );
}

export default Projects;