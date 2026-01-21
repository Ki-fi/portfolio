import './Overview.css';
import SectionTitle from "../section-title/SectionTitle.jsx";

function Overview({ title, description, tag1Title, tag1Body, tag2Title, tag2Body,  tag3Title, tag3Body } ) {
    return (
        <section className="overview">
            <SectionTitle text={"Project overview"}/>
            <div className="project-info">
                <span className="subheading">{title}</span>
                <p>{description}</p>
                <div className="project-tags">
                    <div className="tag1">
                        <span className="sectiontitle">{tag1Title}</span>
                        <p>{tag1Body}</p>
                    </div>
                    <div className="tag2">
                        <span className="sectiontitle">{tag2Title}</span>
                        <p>{tag2Body}</p>
                    </div>
                    <div className="tag3">
                        <span className="sectiontitle">{tag3Title}</span>
                        <p>{tag3Body}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview;

