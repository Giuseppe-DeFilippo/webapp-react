export default function CardComponent({ title, director, genre, releasey, abstract, image, created, updated }) {
    return (
        <div className="card" style={{ width: "18remò" }}>
            < img src="" className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">director</p>
                <p className="card-text">genre</p>
                <p className="card-text">release year</p>
                <p className="card-text">abstract</p>
                <p className="card-text">created_at</p>
                <p className="card-text">updated_at</p>

            </div>
        </div >
    )
}