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
        <div className="container ">
            {/* Row per i film */}
            <div className="row">
                {movies.length === 0 ? (
                    <div>non ci sono film</div>
                ) : (
                    movies.map((movie) => (
                        <div className="col-12 col-md-4" key={movie.id}>
                            <CardComponent
                                image={`http://localhost:3000${movie.image}`}
                                title={movie.title}
                                director={movie.director}
                                genre={movie.genre}
                                year={movie.release_year}
                                abstract={movie.abstract}
                                created_at={movie.created_at}
                                updated_at={movie.updated_at}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}