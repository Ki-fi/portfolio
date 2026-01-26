import './ProjectCard.css';

function ProjectCard({ thumbnail, chips, onClick }) {

    return (
        <article className="project-card"
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

export default ProjectCard;