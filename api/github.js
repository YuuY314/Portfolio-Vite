export default async function handler(req, res) {
    try {
        const response = await fetch(
            "https://api.github.com/users/yuuy314/repos?page=1&per_page=50",
            {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                },
            });
        
        const data = await response.json();

        if(!Array.isArray(data)) {
            return res.status(500).json(data);
        }

        const dataWithLanguages = await Promise.all(
            data.map(async (repo) => {
                const languagesResponse = await fetch(repo.languages_url, {
                    headers: {
                        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                    },
                });

                const languages = await languagesResponse.json();

                return {
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    html_url: repo.html_url,
                    languages: Object.keys(languages),
                };
            })
        );

        res.setHeader(
            "Cache-Control",
            "s-maxage=3600, stale-while-revalidate"
        );

        res.status(200).json(dataWithLanguages);
    } catch (error) {
        res.status(500).json({ message: "Erro interno: ", error});
    }
}