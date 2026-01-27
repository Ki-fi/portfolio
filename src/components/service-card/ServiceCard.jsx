import './ServiceCard.css';
import { forwardRef } from 'react';

const ServiceCard = forwardRef( ( { cardTitle, cardBody, chips }, ref) => {

    return (
        <article ref={ref} className="service-card">
            <span className='subheading'>{cardTitle}</span>
            <p className='card-body'>{cardBody}</p>
            <span className='subtitle'>Wat lever ik op:</span>
            <div className="deliverables">
                {chips}
            </div>
        </article>
    )
}
);

export default ServiceCard;