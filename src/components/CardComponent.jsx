export default function CardComponent({ title, director, genre, year, abstract, image, created_at, updated_at }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            < img src={image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">director: {director}</p>
                <p className="card-text"> genre: {genre}</p>
                <p className="card-text">release {year}</p>
                <p className="card-text">abstract: {abstract} </p>
                <p className="card-text">created_at: {created_at} </p>
                <p className="card-text">updated_at: {updated_at} </p>
            </div>
        </div >
    )
}