export default function CardComponent({ title, director, genre, year, abstract, image, created_at, updated_at }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Director: {director}</p>
                <p className="card-text">Genre: {genre}</p>
                <p className="card-text">Release: {year}</p>
                <p className="card-text">Abstract: {abstract}</p>
                <p className="card-text">Created At: {created_at}</p>
                <p className="card-text">Updated At: {updated_at}</p>
            </div>
        </div>
    );
}