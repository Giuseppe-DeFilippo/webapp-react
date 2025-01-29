import CardComponent from "./CardComponent";
import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function MainComponent() {
    const [movies, setMovies] = useState([]) //si memorizzano i dati
    const navigate = useNavigate();

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
            <div className="row">
                {movies.length === 0 ? (
                    <div>non ci sono film</div>
                ) : (
                    movies.map((movie) => (
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4  cardPersonal" key={movie.id} onClick={() => navigate(`/pag2/${movie.id}`)} style={{ cursor: "pointer" }}>
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