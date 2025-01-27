import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import 'font-awesome/css/font-awesome.min.css';

export default function SingoloFilm() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [reviews, setReviews] = useState([]);



    useEffect(() => {
        axios.get(`http://localhost:3000/api/movie/${id}`)
            .then((response) => {
                console.log(response.data.item)
                setMovie(response.data.item);
                setReviews(response.data.item.reviews)
            })
            .catch((error) => {
                console.error("errore mella query", error)
            })
    }, [id]);


    //stelle
    const renderStars = (vote) => {
        const fullStars = Math.floor(vote);
        const emptyStars = 5 - fullStars
        let stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="fa fa-heart text-danger"></i>);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i key={`empty-${i}`} className="fa fa-heart-o text-mutedò"></i>);
        }

        return stars
    }


    if (!movie) return <p>non va</p>;
    const imageUrl = `http://localhost:3000${movie.image}`
    return (
        <div className="container">
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top" alt={movie.title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">Director: {movie.director}</p>
                    <p className="card-text">Genre: {movie.genre}</p>
                    <p className="card-text">Release: {movie.year}</p>
                    <p className="card-text">Abstract: {movie.abstract}</p>
                    <p className="card-text">Created At: {movie.created_at}</p>
                    <p className="card-text">Updated At: {movie.updated_at}</p>
                </div>
            </div>
            <div className="mt-4">
                <h3>Recensioni</h3>
                {reviews.length === 0 ? (
                    <p>0 recensioni</p>
                ) : (
                    reviews.map((review) => (
                        <div key={review.id} className="bg-white rounded shadow p-3 mb-3">
                            <h5>{review.name}</h5>
                            <p>Voto: {renderStars(review.vote)}</p>
                            {/* <span className=""> {renderStars(review.vote)} </span> */}
                            <p>{review.text}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );


}