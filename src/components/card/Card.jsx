import './Card.css';

function Card({ thumbnail, chips }) {
    return (
        <article className="card">
            <div className="card-content">
                <img src={thumbnail} alt="project-thumbnail"/>
            </div>
            <div className="card-footer">
                {chips}
            </div>
        </article>
    )
}

export default Card;