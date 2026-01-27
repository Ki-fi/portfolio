import './Services.css';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Button from "../../components/button/Button.jsx";
import portrait from "/src/assets/portrait.png";
import {useState} from "react";
import {inventory} from "../../constants/inventory.js";
import ServiceCard from "../../components/service-card/ServiceCard.jsx";
import Chip from "../../components/chip/Chip.jsx";

function Services() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentService = inventory[currentIndex];


    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % inventory.length);
    };

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + inventory.length) % inventory.length);
    };

    const chips = currentService.deliverables.map((deliverable) => (
        <Chip
            key={deliverable}
            variant="outlined"
            chipText={deliverable}
        />
    ));

    return (
        <>
            <header>
                <Header/>
            </header>
            <div className="services-wrapper">
                <section className="services-intro">
                    <span className='headline'>Services</span>
                    <p>Als Freelance Strategisch Product Designer ontwerp ik functionele en karaktervolle applicaties en websites.</p>
                    <p>Ik help je team of organisatie om complexe ideeën tot heldere en mensgerichte producten te maken. Met het oog op je bedrijfsdoelen en op de toekomst.</p>
                </section>
                <section className="services-section">
                    <ServiceCard
                        key={currentService.title}
                        cardTitle={currentService.title}
                        cardBody={currentService.body}
                        chips={chips}
                    />
                    <div className="carousel-nav">
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => {handlePrevClick()}}
                            aria-label="Vorige service">
                            <span className="material-symbols-outlined">arrow_back_ios</span>
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => {handleNextClick()}}
                            aria-label="Volgende service"
                            aria-label="Vorige service">
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </Button>
                    </div>
                </section>
                <section className='contact-section'>
                    <img className="contact-image" src={portrait} alt="avatar" />
                    <span className='subheading'>Samenwerken?</span>
                    <p>Ik ben benieuwd naar je idee of uitdaging en ik denk graag even met je mee.</p>
                    <div className='button-container'>
                        <Button
                            type="button"
                            variant="primary"
                            onClick={() => {window.location.href = "mailto:mail@kikimeekels.nl"}}>
                            Plan een kennismaking
                        </Button>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    )

}

export default Services;