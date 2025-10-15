
import './SectionTitle.css';

function SectionTitle( { text } ) {
    return (
        <div className="section-title">
            <span className="sectiontitle">{text}</span>
        </div>
    )
}

export default SectionTitle;