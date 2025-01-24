import CardComponent from "./CardComponent";
import { useEffect, useState } from "react";
import axios from "axios"
export default function MainComponent() {
    const [movies, setMovies] = useState([]) //si memorizzano i dati

    useEffect(() => {
        axios.get("http://localhost:3000/api/movie")
            .then((response) => {
                setMovies(response.data.film);
            })
            .catch((error) => {
                console.error("errore", error);
            });
    }, []);




    return (
        <div>
            {movies.length === 0 ? (
                <div>non ci sono film</div>
            ) : (
                movies.map((movie) => (
                    <CardComponent
                        key={movie.id}
                        title={movie.title}
                        director={movie.director}
                        genre={movie.genre}
                        year={movie.release_year}
                        abstract={movie.abstract}
                        created_at={movie.created_at}
                        updated_at={movie.updated_at}
                    />
                ))
            )}
        </div>
    );
}