import './ProjectCard.css';

function ProjectCard({ thumbnail, chips, onClick, projectTitle, setCursorType }) {

    return (
        <article
            className="project-card"
            onClick={onClick}
            onMouseEnter={() => setCursorType?.("project")}
            onMouseLeave={() => setCursorType?.("default")}
        >
            <div className="card-content">
                <img src={thumbnail} alt="project-thumbnail"/>
            </div>
            <div className="card-footer">
                <span className='subheading'>{projectTitle}</span>
                <div className='chip-container'>
                    {chips}
                </div>
            </div>
        </article>
    )
}

export default ProjectCard;