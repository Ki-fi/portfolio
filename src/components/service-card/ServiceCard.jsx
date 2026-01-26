import './ServiceCard.css';

function ServiceCard( { cardTitle, cardBody, chips } ) {

    return (
        <article className="service-card">
            <span className='subheading'>{cardTitle}</span>
            <p className='card-body'>{cardBody}</p>
            <span className='subtitle'>Wat lever ik op:</span>
            <div className="deliverables">
                {chips}
            </div>
        </article>
    )

}

export default ServiceCard;