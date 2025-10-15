import './Card.css';

function Card({ thumbnail, chips, onClick }) {

    return (
        <article className="card"
                 onClick={onClick}
        >
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